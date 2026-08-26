import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGuideDto } from "../dtos/create-guide-dto";

@Injectable()
export class ReadyGuideService {
    constructor(private readonly prisma: PrismaService) { }

    create(dto: CreateGuideDto) {
        return this.prisma.readyGuides.create({
            data: {
                imageURL: dto.imageURL,
                title: dto.title,
                description: dto.description,
                travelType: dto.travelType,
                bestTime: dto.bestTime,
                language: dto.language,
                currenty: dto.currenty,
                overviewResume: dto.overviewResume,
                cities: dto.cities,
                days: dto.days,
                price: dto.price,
                overview: dto.overview,
                itinerary: dto.itinerary,
                accommodations: dto.accommodations,
                usefulInformation: dto.usefulInformation
            }
        })
    }

    getAll() {
        return this.prisma.readyGuides.findMany()
    }

    get(id: string) {
        return this.prisma.readyGuides.findMany({
            where: {
                id: id
            }
        })
    }

    deleteAll() {
        return this.prisma.readyGuides.deleteMany()
    }

    delete(id: string) {
        return this.prisma.readyGuides.deleteMany({
            where: {
                id: id
            }
        })
    }
}