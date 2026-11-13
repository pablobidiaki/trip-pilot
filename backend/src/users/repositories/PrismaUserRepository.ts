import { CreateUserDto } from "../../auth/dtos/create.user.dto";
import { IUserRepository } from "./IUserRepository";
import { PrismaService } from "../../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { EditUserInfosDto } from "../dtos/users-dto";
import { CitiesInterface } from "../interfaces/user.interface";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.user.create({ data })
    }

    async findAll(): Promise<any[]> {
        return this.prisma.user.findMany()
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.user.findUnique({ where: { id } })
    }

    async findOneByEmail(email: string): Promise<any | null> {
        return this.prisma.user.findUnique({
            where: { email },
            include: {
                countriesMemories: {
                    include: {
                        cities: true,
                        memories: true,
                    },
                },
            },
        })
    }

    async update(data: Partial<EditUserInfosDto>): Promise<any> {
        const { id, ...userData } = data;
        return this.prisma.user.update({ where: { id }, data: userData })
    }

    async removeAll(): Promise<any> {
        return this.prisma.user.deleteMany()
    }

    async removeOne(id: string): Promise<any> {
        return this.prisma.user.delete({ where: { id } })
    }

    async updatePassword(id: string, password: string): Promise<any> {
        return this.prisma.user.update({ where: { id }, data: { password } })
    }

    async getByUsername(username: string): Promise<any> {
        return this.prisma.user.findUnique({
            where: { username },
            include: {
                countriesMemories: {
                    include: {
                        cities: true,
                        memories: true,
                    },
                },
            },
        })
    }

    async createCountryMemory(data: any): Promise<any> {
        const userContryObj = await this.prisma.userCountry.findFirst({ where: { countryCode: data.countryCode } })

        if (!userContryObj) throw new Error('Country not found')

        await this.prisma.userCountry.update({
            where: { userId: data.userId, id: userContryObj!.id },
            data: {
                notes: data.notes,
                visitedAt: data.visitedAt,
                cities: {
                    deleteMany: {},
                    create: data.cities.map((city: CitiesInterface) => ({ name: city.name }))
                }
            },
            include: {
                cities: true
            }
        })
    }

    async getUserCities(id: string): Promise<any>{
        return await this.prisma.userCountryCity.findMany({where: {userCountry: {is: {userId: id}}}})
    }
}