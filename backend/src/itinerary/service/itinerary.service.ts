import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateItineraryDto } from '../dtos/create-itinerary-dto';
import { LlmService } from 'src/llm/services/llm.service';
import { ImagesService } from 'src/images/services/images.service';

@Injectable()
export class ItineraryService {
    constructor(private readonly prisma: PrismaService,
        private readonly llmService: LlmService,
        private readonly imagesService: ImagesService
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
        const itineraryJson = await this.llmService.generate(dto)
        const countryOriginFlag = await this.getCountryFlag(dto.countryOrigin)
        const countryDestinationFlag = await this.getCountryFlag(dto.countryDestination)
        const endDate = this.calculateEndDate(dto.startDate, dto.days)

        await this.getAllImagesURLs(JSON.parse(itineraryJson))

        const itinerary = this.prisma.itinerary.create({
            data: {
                userId: dto.userId,
                departure: dto.departure,
                destination: dto.destination,
                startDate: dto.startDate,
                endDate: endDate,
                countryOrigin: dto.countryOrigin,
                countryDestination: dto.countryDestination,
                countryOriginFlagURL: countryOriginFlag,
                countryDestinationFlagURL: countryDestinationFlag,
                travelType: dto.travelType,
                currency: dto.currency,
                days: dto.days,
                travelers: dto.travelers,
                budgetTotal: dto.budgetTotal,
                itinerary: JSON.parse(itineraryJson)
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

        endDate.setDate(endDate.getDate() + days - 1)

        return endDate.toISOString().split('T')[0]
    }

    async getCountryFlag(contry: string): Promise<string> {
        const response = await fetch(
            `https://api.restcountries.com/countries/v5?q=${contry}`,
            { headers: { 'Authorization': `Bearer  ${process.env.REST_COUNTRIES_KEY}` } }
        );
        const data = await response.json();

        return data.data.objects[0].flag.url_png
    }

    async getAllImagesURLs(data: any) {
        data.tours = await Promise.all(
            data.tours.map(async (tour) => {
                const imageURL = await this.imagesService.getImages(tour.photoPrompt)

                return {
                    ...tour,
                    imageURL,
                }
            })
        )

        data.tipicalFood = await Promise.all(
            data.tipicalFood.map(async (food) => {
                const imageURL = await this.imagesService.getImages(food.photoPrompt, 'square')

                return {
                    ...food,
                    imageURL,
                }
            })
        )

        data.dayToDay = await Promise.all(
            data.dayToDay.map(async (day) => {
                const imageURL = await this.imagesService.getImages(day.photoPrompt, 'landscape')

                return {
                    ...day,
                    imageURL,
                }
            })
        )

        return data
    }
}