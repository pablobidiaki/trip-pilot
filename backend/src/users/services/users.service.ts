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

  async getAllUser(){
    let users = await this.prisma.user.findMany()

    return{
        success: true,
        users
    }
  }

  async getUser(id: string){
    let user = await this.prisma.user.findUnique({
        where:{
            id: id
        }
    })

    return{
        success: true,
        user
    }
  }
}