
import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, UnauthorizedException } from '@nestjs/common';

import { UsersService } from './users.service';
import { PrismaService } from '../../prisma/prisma.service';
import { IUserRepository } from '../repositories/IUserRepository';
import { ICrypto } from '../../core/crypto/ICrypto';

describe('UsersService', () => {
    let service: UsersService;

    const userRepositoryMock = {
        findAll: jest.fn(),
        findOne: jest.fn(),
        findOneByEmail: jest.fn(),
        create: jest.fn(),
        removeAll: jest.fn(),
        removeOne: jest.fn(),
    };

    const cryptoMock = {
        hash: jest.fn(),
        compare: jest.fn(),
    };

    const prismaMock = {
        user: {
            findUnique: jest.fn(),
            update: jest.fn(),
            findFirst: jest.fn(),
        },
    };

    beforeEach(async () => {
        jest.clearAllMocks();

        const module: TestingModule =
            await Test.createTestingModule({
                providers: [
                    UsersService,
                    {
                        provide: PrismaService,
                        useValue: prismaMock,
                    },
                    {
                        provide: IUserRepository,
                        useValue: userRepositoryMock,
                    },
                    {
                        provide: ICrypto,
                        useValue: cryptoMock,
                    },
                ],
            }).compile();

        service = module.get<UsersService>(UsersService);
    });

    describe('create', () => {
        it('deve cadastrar um usuário com sucesso', async () => {
            const dto = {
                name: 'Pablo',
                email: 'pablo@email.com',
                password: '123456',
            };

            userRepositoryMock.findOneByEmail.mockResolvedValue(null);
            cryptoMock.hash.mockResolvedValue('senha_hash');
            userRepositoryMock.create.mockResolvedValue({
                id: 'user-123',
                name: 'Pablo',
                email: 'pablo@email.com',
                password: 'senha_hash',
            });

            const result = await service.create(dto);

            expect(userRepositoryMock.findOneByEmail)
                .toHaveBeenCalledWith(dto.email);

            expect(cryptoMock.hash)
                .toHaveBeenCalledWith(dto.password);

            expect(userRepositoryMock.create).toHaveBeenCalledWith({
                name: dto.name,
                email: dto.email,
                password: 'senha_hash',
            });

            expect(result).toEqual({
                id: 'user-123',
                name: 'Pablo',
                email: 'pablo@email.com',
            });

            expect(result).not.toHaveProperty('password');
        });

        it('deve lançar ConflictException se o e-mail já existir', async () => {
            userRepositoryMock.findOneByEmail.mockResolvedValue({
                id: 'user-123',
                email: 'pablo@email.com',
            });

            await expect(
                service.create({
                    name: 'Pablo',
                    email: 'pablo@email.com',
                    password: '123456',
                }),
            ).rejects.toThrow(ConflictException);

            expect(cryptoMock.hash).not.toHaveBeenCalled();
            expect(userRepositoryMock.create).not.toHaveBeenCalled();
        });
    });

    describe('login', () => {
        it('deve autenticar um usuário com credenciais válidas', async () => {
            userRepositoryMock.findOneByEmail.mockResolvedValue({
                id: 'user-123',
                name: 'Pablo',
                email: 'pablo@email.com',
                password: 'senha_hash',
                image: 'foto.png',
            });

            cryptoMock.compare.mockResolvedValue(true);

            const result = await service.login(
                'pablo@email.com',
                '123456',
            );

            expect(cryptoMock.compare).toHaveBeenCalledWith(
                '123456',
                'senha_hash',
            );

            expect(result).toEqual({
                id: 'user-123',
                name: 'Pablo',
                email: 'pablo@email.com',
                image: 'foto.png',
            });

            expect(result).not.toHaveProperty('password');
        });

        it('deve rejeitar o login quando o usuário não existir', async () => {
            userRepositoryMock.findOneByEmail.mockResolvedValue(null);

            await expect(
                service.login('inexistente@email.com', '123456'),
            ).rejects.toThrow(UnauthorizedException);

            expect(cryptoMock.compare).not.toHaveBeenCalled();
        });

        it('deve rejeitar o login quando a senha estiver incorreta', async () => {
            userRepositoryMock.findOneByEmail.mockResolvedValue({
                id: 'user-123',
                name: 'Pablo',
                email: 'pablo@email.com',
                password: 'senha_hash',
            });

            cryptoMock.compare.mockResolvedValue(false);

            await expect(
                service.login('pablo@email.com', 'senha_errada'),
            ).rejects.toThrow(UnauthorizedException);
        });
    });
});
