import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { IDestinationRepository } from "./IDestinationRepository";

@Injectable()
export class PrismaDestinationRepository implements IDestinationRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: any): Promise<any>{
        return this.prisma.destinations.create({data})
    }

    async findAll(): Promise<any[]> {
        return this.prisma.destinations.findMany()
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.destinations.findUnique({where: {id}})
    }
    
    async removeAll(): Promise<any> {
        return this.prisma.destinations.deleteMany()
    }

    async removeOne(id: string): Promise<any> {
        return this.prisma.destinations.deleteMany({where: {id}})
    }
}