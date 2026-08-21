import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateItineraryDto } from '../dtos/create-itinerary-dto';
import { LlmService } from 'src/llm/services/llm.service';

@Injectable()
export class ItineraryService {
    constructor(private readonly prisma: PrismaService,
                private readonly llmService: LlmService
                ) { }

    getAll() {
        return this.prisma.itinerary.findMany()
    }

    async create(dto: CreateItineraryDto) {
        const itineraryJson = await this.llmService.generate(dto)
        const itinerary = this.prisma.itinerary.create({
            data: {
                userId: dto.userId,
                destination: dto.destination,
                startDate: dto.departureDate,
                endDate: this.calculateEndDate(dto.departureDate, dto.days),
                itinerary: JSON.parse(itineraryJson),
            },
        });

        return itinerary
    }

    deleteAll() {
        return this.prisma.itinerary.deleteMany()
    }

    delete(id: string) {
        const itinerary = this.prisma.itinerary.deleteMany({
            where: {
                id: id
            }
        })

        return itinerary
    }

    calculateEndDate(startDate: string, days: number): string {
        const endDate = new Date(startDate)

        // '-1' because day 1 counts as a travel day
        endDate.setDate(endDate.getDate() + days - 1)

        // split to remove the time
        return endDate.toISOString().split('T')[0]
    }
}