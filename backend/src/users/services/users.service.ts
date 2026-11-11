import { PrismaService } from '../../prisma/prisma.service';
import { ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { CreateUsersDto, EditCountryUserDto, EditPasswordDto, EditUserInfosDto } from '../dtos/users-dto';
import { LoginInterface } from '../../auth/interfaces/auth.interfaces';
import { ICrypto } from '../../core/crypto/ICrypto';
import { IUserRepository } from '../repositories/IUserRepository';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userRepository: IUserRepository,
    private readonly crypto: ICrypto
  ) { }

  getAll() {
    return this.userRepository.findAll()
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOneByEmail(email)
  }

  getById(id: string) {
    return this.userRepository.findOne(id)
  }

  async create(dto: CreateUsersDto) {
    const emailAlreadyRegistred = await this.userRepository.findOneByEmail(dto.email)

    if (emailAlreadyRegistred) throw new ConflictException("Email já cadastrado")

    const hashedPassword = await this.crypto.hash(dto.password!)

    const user = await this.userRepository.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      isPublicAccount: true,
      username: dto.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase(),
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      isPublicAccount: user.isPublicAccount
    }
  }

  deleteAll() {
    return this.userRepository.removeAll()
  }

  deleteById(id: string) {
    return this.userRepository.removeOne(id)
  }

  async login(email: string, password: string) {

    const user = await this.userRepository.findOneByEmail(email)

    if (!user || !user.password) throw new UnauthorizedException("Email ou senha inválidos")

    const passwordMatch = await this.crypto.compare(password, user.password)

    if (!passwordMatch) throw new UnauthorizedException("Email ou senha inválidos")

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    }
  }

  async handleCountryVisited(dto: EditCountryUserDto) {
    return this.prisma.userCountry.upsert({
      where: {
        userId_countryCode: {
          userId: dto.userId,
          countryCode: dto.countryCode,
        },
      },
      create: {
        userId: dto.userId,
        countryCode: dto.countryCode,
        countryName: dto.countryName,
        isVisitedCountry: true
      },
      update: {
        isVisitedCountry: dto.isAdd
      },
    });
  }

  async handleCountryWishlist(dto: EditCountryUserDto) {
    return this.prisma.userCountry.upsert({
      where: {
        userId_countryCode: {
          userId: dto.userId,
          countryCode: dto.countryCode,
        },
      },
      create: {
        userId: dto.userId,
        countryCode: dto.countryCode,
        countryName: dto.countryName,
        isWishListCountry: true
      },
      update: {
        isWishListCountry: dto.isAdd
      },
    });
  }

  async findByLogin(dto: LoginInterface) {
    const user = await this.userRepository.findOneByEmail(dto.email)

    if (!user) throw new HttpException("invalid_credentials", HttpStatus.UNAUTHORIZED);

    const areEqual = await this.crypto.compare(dto.password, user.password!);

    if (!areEqual) throw new HttpException("invalid_credentials", HttpStatus.UNAUTHORIZED)

    const { password: p, ...rest } = user;

    return rest;
  }

  async createGoogleUser(dto: any) {
    return this.userRepository.create(dto)
  }

  async findByPayload({ login }: any): Promise<any> {
    return await this.prisma.user.findFirst({
      where: login
    });
  }

  async editUserInfos(data: EditUserInfosDto) {
    return await this.userRepository.update(data)
  }

  async changePassword(dto: EditPasswordDto): Promise<any> {
    const user = await this.userRepository.findOne(dto.id);

    if (!user?.password) throw new UnauthorizedException('Não é possível alterar a senha desta conta por este fluxo.');

    const validPassword = await this.crypto.compare(dto.currentPassword, user.password);

    if (!validPassword) throw new UnauthorizedException('Senha atual incorreta.',);

    const hashedPassword = await this.crypto.hash(dto.newPassword,);

    await this.userRepository.updatePassword(dto.id, hashedPassword);

    return { message: 'Senha alterada com sucesso.' };
  }

  async getByUsername(username: string): Promise<any> {
    return await this.userRepository.getByUsername(username)
  }

  async createCountryMemory(data: any): Promise<any> {
    return await this.userRepository.createCountryMemory(data)
  }
}