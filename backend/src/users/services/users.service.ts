import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../dtos/create-users-dto';
import { PrismaService } from '../../prisma/prisma.service';

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

  create(dto: CreateUsersDto) {
    const user = this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
      },
    });

    return user
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