import { CreateUserDto } from "src/auth/dtos/create.user.dto";
import { IUserRepository } from "./IUserRepository";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { EditUserInfosDto } from "../dtos/create-users-dto";

@Injectable()
export class PrismaUserRepository implements IUserRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateUserDto){
        return this.prisma.user.create({data})
    }

    async findAll(): Promise<any[]> {
        return this.prisma.user.findMany()
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.user.findUnique({where: {id}})
    }

    async findOneByEmail(email: string): Promise<any> {
        return this.prisma.user.findUnique({where: {email}})
    }

    async update(data: Partial<EditUserInfosDto>): Promise<any> {
        const { id, ...userData } = data;
        return this.prisma.user.update({where: {id}, data: userData})
    }
    
    async removeAll(): Promise<any> {
        return this.prisma.user.deleteMany()
    }

    async removeOne(id: string): Promise<any> {
        return this.prisma.user.delete({where: {id}})
    }
}