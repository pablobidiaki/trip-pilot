import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { DestinationService } from "../service/destination.service";
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateDestinationDto } from "../dtos/create-destination-dto";

@ApiTags('Destinations')
@Controller('destination')
export class DestinationController {
    constructor(private readonly destinationService: DestinationService) { }

    @Post()
    @ApiOperation({
        summary: 'Create a destination'
    })
    async create(@Body() dto: CreateDestinationDto) {
        const destination = await this.destinationService.create(dto)

        return {
            success: true,
            destination: destination
        }
    }

    @Get()
    @ApiOperation({
        summary: 'Get all destinations'
    })
    async getAll() {
        return await this.destinationService.getAll()
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Get an especific destination'
    })
    async get(@Param('id') id: string) {
        return await this.destinationService.get(id)
    }

    @Delete()
    @ApiOperation({
        'summary': 'Delete all destinations'
    })
    async deleteAll(){
        return {
            success: true,
            destinations: await this.destinationService.deleteAll()
        }
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Delete an especific destination'
    })
    async delete(@Param('id') id: string) {
        return {
            success: true,
            destination: await this.destinationService.delete(id)
        }
    }
}