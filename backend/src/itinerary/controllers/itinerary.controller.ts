import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ItineraryService } from '../service/itinerary.service';
import { CreateItineraryDto } from '../dtos/create-itinerary-dto';

@ApiTags('Itinerary')
@Controller('itinerary')
export class ItineraryController {
    constructor(private readonly itineraryService: ItineraryService,) { }
    
    @Get()
    @ ApiOperation({
        summary: 'Get all existents itineraries'
    })
    async getAll(){
        const itineraries = await this.itineraryService.getAll()

        return {
            success: true,
            itineraries: itineraries
        }
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
    async delete(@Param('id') id: string){
        return await this.itineraryService.delete(id)
    }

    @Delete()
    @ApiOperation({
        summary: 'Delete all itinerary',
    })
    async deleteAll(){
        return await this.itineraryService.deleteAll()
    }
}