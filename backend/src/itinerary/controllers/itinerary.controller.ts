import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ItineraryService } from '../service/itinerary.service';
import { CreateItineraryDto } from '../dtos/create-itinerary-dto';

@ApiTags('Itinerary')
@Controller('itinerary')
export class ItineraryController {
    constructor(private readonly itineraryService: ItineraryService) { }

    @Get()
    @ApiOperation({
        summary: 'Get all existents itineraries'
    })
    async getAll() {
        return await this.itineraryService.getAll()
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Get an especific itinerary',
    })
    async get(@Param('id') id: string) {
        return await this.itineraryService.get(id)
    }

    @Get('user/:userId')
    @ApiOperation({
        summary: 'Get itineraries for a specific user',
    })
    async getUserItineraries(@Param('userId') userId: string) {
        return await this.itineraryService.getUserItineraries(userId);
    }


    @Post()
    @ApiOperation({
        summary: 'Create a itinerary',
    })
    async create(@Body() dto: CreateItineraryDto) {
        return await this.itineraryService.create(dto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Delete an especific itinerary',
    })
    async delete(@Param('id') id: string) {
        return await this.itineraryService.delete(id)
    }

    @Delete()
    @ApiOperation({
        summary: 'Delete all itinerary',
    })
    async deleteAll() {
        return await this.itineraryService.deleteAll()
    }

    @Get('flag/:countryIsoNumericNumber')
    @ApiOperation({
        summary: 'Get a country flag',
    })
    async getCountryFlag(@Param('countryIsoNumericNumber') countryIsoNumericNumber: string) {
        const flag = await this.itineraryService.getCountryFlag(countryIsoNumericNumber)
        return {
            flag: flag
        }
    }
}