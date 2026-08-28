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

    get(id: string) {
        const itinerary = this.prisma.itinerary.findMany({
            where: {
                id: id
            }
        })

        return itinerary
    }

    async create(dto: CreateItineraryDto) {
        // const itineraryJson = await this.llmService.generate(dto)
        const itinerary = this.prisma.itinerary.create({
            data: {
                userId: dto.userId,
                departure: dto.departure,
                destination: dto.destination,
                startDate: dto.startDate,
                endDate: this.calculateEndDate(dto.startDate, dto.days),
                countryOrigin: dto.countryOrigin,
                countryDestination: dto.countryDestination,
                days: dto.days,
                departureDate: dto.departureDate,
                budgetTotal: dto.budgetTotal,
                travelers: dto.travelers,
                travelType: dto.travelType,
                currency: dto.currency,
                itinerary: dto.itinerary
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