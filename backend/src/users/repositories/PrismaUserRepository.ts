import { IUserRepository } from "./IUserRepository";
import { PrismaService } from "../../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { EditUserInfosDto } from "../dtos/users-dto";

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

    async handleCountryMemory(data: any): Promise<any> {
        const userContryObj = await this.prisma.userCountry.findFirst({ where: { countryCode: data.countryCode } })

        await this.prisma.userCountry.update({where: {id: userContryObj?.id}, data:{notes: data.countryNotes}})

        if (!userContryObj) throw new Error('Country not found')

        // await this.prisma.userCountryCity.create({
        //     data: {
        //         name: data.cityName,
        //         visitedAt: data.visitedAt,
        //         notes: data.cityNotes,
        //         image: data.cityImage || null,
        //         userCountry: {
        //             connect: {
        //                 id: userContryObj!.id,
        //             },
        //         },
        //     },
        // });
    }

    async deleteCountryMemory(memoryId: string): Promise<any> {
        return await this.prisma.userCountryCity.delete({ where: { id: memoryId } })
    }

    async getUserCities(id: string): Promise<any> {
        return await this.prisma.userCountryCity.findMany({ where: { userCountry: { is: { userId: id } } } })
    }

    async getCountryInfos(userId: string, countryCode: string) {
        const country = await this.prisma.userCountry.findUnique({
            where: {
                userId_countryCode: {
                    userId,
                    countryCode,
                },
            },
            include: {
                cities: true,
            },
        });

        return country ?? [];
    }

    async createCityInfo(data: any) {
        console.log(data)
    }
}