import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../dtos/create-users-dto';
import { PrismaService } from '../../prisma/prisma.service';

interface teste{
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

  async createIfNotExists(data: CreateUsersDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (user) {
      return user
    }

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        image: data.image,
      },
    })
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
}