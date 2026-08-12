import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../dtos/create-users-dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUsersDto) {
    await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
      },
    });

    return {
      success: true,
      message: 'User created successfully.',
    };
  }
}