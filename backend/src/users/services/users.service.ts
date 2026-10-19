import { PrismaService } from '../../prisma/prisma.service';
import { ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { CreateUsersDto, EditCountryDto } from '../dtos/create-users-dto';
import { LoginInterface } from '../../auth/interfaces/auth.interfaces';
import { ICrypto } from 'src/core/crypto/ICrypto';
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
      password: hashedPassword
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email
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

  async addCountryVisited(data: EditCountryDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      select: {
        countriesVisited: true,
      },
    });

    const countriesVisited = [
      ...(user?.countriesVisited ?? []),
      data.country,
    ];

    return this.prisma.user.update({
      where: {
        id: data.userId,
      },
      data: {
        countriesVisited,
      },
    });
  }

  async removeCountryVisited(data: EditCountryDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      select: {
        countriesVisited: true,
      },
    });

    let countries = user?.countriesVisited

    const countriesVisited = countries?.filter(
      country => country !== data.country
    )

    return this.prisma.user.update({
      where: {
        id: data.userId,
      },
      data: {
        countriesVisited,
      },
    });
  }

  async addCountryCountryWishlist(data: EditCountryDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      select: {
        countriesWishlist: true,
      },
    });

    const countriesWishlist = [
      ...(user?.countriesWishlist ?? []),
      data.country,
    ];

    return this.prisma.user.update({
      where: {
        id: data.userId,
      },
      data: {
        countriesWishlist,
      },
    });
  }

  async removeCountryCountryWishlist(data: EditCountryDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      select: {
        countriesWishlist: true,
      },
    });

    let countries = user?.countriesWishlist

    const countriesWishlist = countries?.filter(
      country => country !== data.country
    )

    return this.prisma.user.update({
      where: {
        id: data.userId,
      },
      data: {
        countriesWishlist,
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

  async createGoogleUser(dto: CreateUsersDto) {
    return this.userRepository.create(dto)
  }

  async findByPayload({ login }: any): Promise<any> {
    return await this.prisma.user.findFirst({
      where: login
    });
  }
}