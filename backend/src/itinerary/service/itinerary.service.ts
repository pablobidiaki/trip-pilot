import { Injectable } from '@nestjs/common';
import { CreateItineraryDto } from '../dtos/create-itinerary-dto';
import { LlmService } from '../../llm/services/llm.service';
import { ImagesService } from '../../images/services/images.service';
import { UsersService } from '../../users/services/users.service';
import { IItineraryRepository } from '../repositories/IItineraryRepository';

@Injectable()
export class ItineraryService {
    constructor(private readonly llmService: LlmService,
        private readonly imagesService: ImagesService,
        private readonly usersService: UsersService,
        private readonly itineraryRepository: IItineraryRepository
    ) { }

    getAll() {
        return this.itineraryRepository.findAll()
    }

    getUserItineraries(userId: string) {
        return this.itineraryRepository.findUserItineraries(userId)
    }

    async get(id: string) {
        return await this.itineraryRepository.findOne(id)
    }

    async create(dto: CreateItineraryDto) {
        const userId = await this.usersService.getUserByEmail(dto.userId)
        if (!userId) throw new Error('User not found')

        const itineraryJson = await this.llmService.generate(dto)
        const countryOriginFlag = await this.getCountryFlag(dto.countryOrigin)
        const countryDestinationFlag = await this.getCountryFlag(dto.countryDestination)
        const endDate = this.calculateEndDate(dto.startDate, dto.days)

        const finalItinerary = await this.getAllImagesURLs(JSON.parse(itineraryJson))

        const itinerary = this.itineraryRepository.create({
            userId: userId.id,
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
            itinerary: finalItinerary
        })

        return itinerary
    }

    deleteAll() {
        return this.itineraryRepository.removeAll()
    }

    delete(id: string) {
        return this.itineraryRepository.removeOne(id)
    }

    calculateEndDate(startDate: string, days: number): string {
        const endDate = new Date(startDate)

        endDate.setDate(endDate.getDate() + days - 1)

        return endDate.toISOString().split('T')[0]
    }

    async getCountryFlag(country: any): Promise<string> {

        const response = await fetch(
            `https://api.restcountries.com/countries/v5?q=${country}`,
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