import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { IReadyGuideRepository } from "./IReadyGuideRepository";
import { CreateGuideDto } from "../dtos/create-guide-dto";

@Injectable()
export class PrismaReadyGuideRepository implements IReadyGuideRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateGuideDto){
        return this.prisma.readyGuides.create({data})
    }

    async findAll(): Promise<any[]> {
        return this.prisma.readyGuides.findMany()
    }

    async findOne(id: string): Promise<any> {
        return this.prisma.readyGuides.findUnique({where: {id}})
    }

    async update(id: string, data: Partial<CreateGuideDto>): Promise<any> {
        return this.prisma.readyGuides.update({where: {id}, data})
    }
    
    async removeAll(): Promise<any> {
        return this.prisma.readyGuides.deleteMany()
    }

    async removeOne(id: string): Promise<any> {
        return this.prisma.readyGuides.delete({where: {id}})
    }
}