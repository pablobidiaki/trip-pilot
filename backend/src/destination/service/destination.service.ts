import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateDestinationDto } from "../dtos/create-destination-dto";

@Injectable()
export class DestinationService {
    constructor(private readonly prisma: PrismaService) { }

    create(dto: CreateDestinationDto) {
        const destination = this.prisma.destinations.create({
            data: {
                destination: dto.destination,
                description: dto.description,
                country: dto.country,
                travelType: dto.travelType,
                bestTime: dto.bestTime,
                language: dto.language,
                currenty: dto.currenty,
                weather: dto.weather,
                dayReccomended: dto.dayReccomended,
                usefulInformation: dto.usefulInformation,
                whatToDo: dto.whatToDo,
                attractions: dto.attractions,
                averageCost: dto.averageCost
            }
        })

        return destination
    }

    getAll() {
        return this.prisma.destinations.findMany()
    }

    get(id: string) {
        return this.prisma.destinations.findMany({
            where: {
                id: id
            }
        })
    }
}