import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { DestinationService } from "../service/destination.service";
import { Controller, Post, Body } from '@nestjs/common';
import { CreateDestinationDto } from "../dtos/create-destination-dto";

@ApiTags('Destinations')
@Controller('destination')
export class DestinationController {
    constructor(private readonly destinationService: DestinationService){}

    @Post()
    @ApiOperation({
        summary: 'Create a destination'
    })
    async create(@Body() dto: CreateDestinationDto){
        const destination = await this.destinationService.create(dto)

        return {
            success: true, 
            destination: destination
        }
    }
}