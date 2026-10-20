import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { IItineraryRepository } from "./IItineraryRepository";
import { CreateItineraryDto } from '../dtos/create-itinerary-dto';

@Injectable()
export class PrismaItineraryRepository implements IItineraryRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: any){
        return this.prisma.itinerary.create({data})
    }

    async findAll(): Promise<any[]> {
        return this.prisma.itinerary.findMany()
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.itinerary.findUnique({where: {id}})
    }

    async update(id: string, data: Partial<CreateItineraryDto>): Promise<any> {
        return this.prisma.itinerary.update({where: {id}, data})
    }
    
    async removeAll(): Promise<any> {
        return this.prisma.itinerary.deleteMany()
    }

    async removeOne(id: string): Promise<any> {
        return this.prisma.itinerary.delete({where: {id}})
    }

    async findUserItineraries(userId: string): Promise<any> {
        return this.prisma.itinerary.findMany({where:{ userId}})
    }
}