import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { IItineraryRepository } from "./IItineraryRepository";

@Injectable()
export class PrismaItineraryRepository implements IItineraryRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: any): Promise<any>{
        return this.prisma.itinerary.create({data})
    }

    async findAll(): Promise<any[]> {
        return this.prisma.itinerary.findMany()
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.itinerary.findUnique({where: {id}})
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