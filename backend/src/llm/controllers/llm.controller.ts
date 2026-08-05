import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenerateItineraryDto } from '../dtos/generate-itinerary-dto';
import { LlmService } from '../services/llm_service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('LLM')
@Controller("llm")
export class LlmController{
    constructor(private readonly llmService: LlmService,) {}

    @Post("generate")
    @ApiOperation({
        summary: 'Gera um roteiro utilizando IA',
    })
    generate(@Body() dto: GenerateItineraryDto){
        return this.llmService.generate(dto);
    }
    
}