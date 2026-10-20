import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { IDestinationRepository } from "./IDestinationRepository";
import { CreateDestinationDto } from "../dtos/create-destination-dto";

@Injectable()
export class PrismaDestinationRepository implements IDestinationRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateDestinationDto): Promise<any>{
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