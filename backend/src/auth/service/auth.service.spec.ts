
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

jest.mock('google-auth-library', () => ({
  OAuth2Client: jest.fn().mockImplementation(() => ({
    verifyIdToken: jest.fn(),
  })),
}));

describe('AuthService', () => {
  let service: AuthService;

  let jwtService: {
    sign: jest.Mock;
  };

  let usersService: {
    create: jest.Mock;
    findByLogin: jest.Mock;
    findByPayload: jest.Mock;
    getUserByEmail: jest.Mock;
    createGoogleUser: jest.Mock;
  };

  let googleClientMock: {
    verifyIdToken: jest.Mock;
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    jwtService = {
      sign: jest.fn().mockReturnValue('fake-access-token'),
    };

    usersService = {
      create: jest.fn(),
      findByLogin: jest.fn(),
      findByPayload: jest.fn(),
      getUserByEmail: jest.fn(),
      createGoogleUser: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: jwtService },
        { provide: UsersService, useValue: usersService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);

    googleClientMock = (service as any).googleClient;
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('deve registrar um usuário com sucesso', async () => {
      const dto = {
        name: 'Pablo',
        email: 'pablo@email.com',
        password: '123456',
      };

      const user = {
        id: 'user-1',
        name: 'Pablo',
        email: 'pablo@email.com',
      };

      usersService.create.mockResolvedValue(user);

      const result = await service.register(dto as any);

      expect(usersService.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual({
        success: true,
        message: 'ACCOUNT_CREATE_SUCCESS',
        data: user,
      });
    });

    it('deve retornar erro quando o cadastro falhar', async () => {
      usersService.create.mockRejectedValue(
        new Error('Email já cadastrado'),
      );

      const result = await service.register({} as any);

      expect(result).toEqual({
        success: false,
        message: 'Email já cadastrado',
      });
    });
  });

  describe('login', () => {
    it('deve autenticar o usuário e retornar um token', async () => {
      const user = {
        id: 'user-1',
        name: 'Pablo',
        email: 'pablo@email.com',
      };

      usersService.findByLogin.mockResolvedValue(user);

      const result = await service.login({
        email: user.email,
        password: '123456',
      });

      expect(usersService.findByLogin).toHaveBeenCalledWith({
        email: user.email,
        password: '123456',
      });

      expect(jwtService.sign).toHaveBeenCalledWith(
        {
          sub: user.id,
          email: user.email,
        },
        {
          secret: process.env.SECRETKEY,
        },
      );

      expect(result).toEqual({
        accessToken: 'fake-access-token',
        expiresIn: process.env.EXPIRESIN,
        data: user,
      });
    });

    it('deve propagar o erro quando as credenciais forem inválidas', async () => {
      usersService.findByLogin.mockRejectedValue(
        new UnauthorizedException(),
      );

      await expect(
        service.login({
          email: 'pablo@email.com',
          password: 'senha-errada',
        }),
      ).rejects.toThrow(UnauthorizedException);

      expect(jwtService.sign).not.toHaveBeenCalled();
    });
  });

  describe('validateUser', () => {
    it('deve retornar o usuário quando o payload for válido', async () => {
      const payload = {
        sub: 'user-1',
        email: 'pablo@email.com',
      };

      const user = {
        id: 'user-1',
        email: 'pablo@email.com',
      };

      usersService.findByPayload.mockResolvedValue(user);

      await expect(service.validateUser(payload)).resolves.toEqual(user);
      expect(usersService.findByPayload).toHaveBeenCalledWith(payload);
    });

    it('deve lançar erro quando o usuário não existir', async () => {
      usersService.findByPayload.mockResolvedValue(null);

      await expect(
        service.validateUser({
          sub: 'user-1',
          email: 'pablo@email.com',
        }),
      ).rejects.toThrow('INVALID_TOKEN');
    });
  });

  describe('googleLogin', () => {
    const idToken = 'fake-google-id-token';

    const googlePayload = {
      email: 'Pablo@Email.com',
      email_verified: true,
      name: 'Pablo',
    };

    beforeEach(() => {
      googleClientMock.verifyIdToken.mockResolvedValue({
        getPayload: () => googlePayload,
      });
    });

    it('deve autenticar um usuário Google já cadastrado', async () => {
      const user = {
        id: 'user-1',
        name: 'Pablo',
        email: 'pablo@email.com',
      };

      usersService.getUserByEmail.mockResolvedValue(user);

      const result = await service.googleLogin(idToken);

      expect(googleClientMock.verifyIdToken).toHaveBeenCalledWith({
        idToken,
        audience: process.env.AUTH_GOOGLE_ID,
      });

      expect(usersService.getUserByEmail).toHaveBeenCalledWith(
        'pablo@email.com',
      );

      expect(usersService.createGoogleUser).not.toHaveBeenCalled();

      expect(result).toEqual({
        accessToken: 'fake-access-token',
        expiresIn: process.env.EXPIRESIN,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    });

    it('deve criar um usuário quando ele ainda não estiver cadastrado', async () => {
      const user = {
        id: 'user-2',
        name: 'Pablo',
        email: 'pablo@email.com',
      };

      usersService.getUserByEmail.mockResolvedValue(null);
      usersService.createGoogleUser.mockResolvedValue(user);

      const result = await service.googleLogin(idToken);

      expect(usersService.createGoogleUser).toHaveBeenCalledWith({
        name: 'Pablo',
        email: 'pablo@email.com',
      });

      expect(result.data).toEqual({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    });

    it('deve usar o email como nome se o Google não retornar um nome', async () => {
      googleClientMock.verifyIdToken.mockResolvedValue({
        getPayload: () => ({
          email: 'pablo@email.com',
          email_verified: true,
        }),
      });

      usersService.getUserByEmail.mockResolvedValue(null);
      usersService.createGoogleUser.mockResolvedValue({
        id: 'user-3',
        name: 'pablo@email.com',
        email: 'pablo@email.com',
      });

      await service.googleLogin(idToken);

      expect(usersService.createGoogleUser).toHaveBeenCalledWith({
        name: 'pablo@email.com',
        email: 'pablo@email.com',
      });
    });

    it('deve rejeitar uma conta sem email verificado', async () => {
      googleClientMock.verifyIdToken.mockResolvedValue({
        getPayload: () => ({
          email: 'pablo@email.com',
          email_verified: false,
        }),
      });

      await expect(service.googleLogin(idToken)).rejects.toThrow(
        UnauthorizedException,
      );

      expect(usersService.getUserByEmail).not.toHaveBeenCalled();
    });

    it('deve rejeitar um token sem payload válido', async () => {
      googleClientMock.verifyIdToken.mockResolvedValue({
        getPayload: () => undefined,
      });

      await expect(service.googleLogin(idToken)).rejects.toThrow(
        'Conta Google inválida',
      );
    });

    it('deve propagar erros na validação do token Google', async () => {
      googleClientMock.verifyIdToken.mockRejectedValue(
        new Error('Token inválido'),
      );

      await expect(service.googleLogin(idToken)).rejects.toThrow(
        'Token inválido',
      );
    });
  });
});
