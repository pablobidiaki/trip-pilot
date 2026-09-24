import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from "bcrypt"
import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common"
import { EditCountryDto } from '../dtos/create-users-dto';


interface teste {
  id: string;
  email: string;
  name: string;
  image: string;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  getAll() {
    return this.prisma.user.findMany()
  }

  getIdByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }

  getById(id: string) {
    const user = this.prisma.user.findUnique({
      where: {
        id: id
      }
    })

    return user
  }

  async getByEmail(email: string) {
    const user = this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    return user
  }

  async register(name: string, email: string, password: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (existingUser) {
      throw new ConflictException("Email já cadastrado")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  deleteAll() {
    return this.prisma.user.deleteMany()
  }

  deleteById(id: string) {
    const user = this.prisma.user.deleteMany({
      where: {
        id: id
      }
    })

    return user
  }

  async login(email: string, password: string) {

    const user = await this.prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.password) {
      throw new UnauthorizedException("Email ou senha inválidos")
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordMatch) {
      throw new UnauthorizedException("Email ou senha inválidos")
    }

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

    let teste = user?.countriesVisited

    const countriesVisited = teste?.filter(
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

    let teste = user?.countriesWishlist

    const countriesWishlist = teste?.filter(
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
}