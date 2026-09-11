import { Body, Controller, Post } from '@nestjs/common';
import { CreateItineraryLlmDto } from '../dtos/generate-itinerary-dto';
import { LlmService } from '../services/llm.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('LLM')
@Controller("llm")
export class LlmController{
    constructor(private readonly llmService: LlmService,) {}

    @Post()
    @ApiOperation({
        summary: 'Generates a JSON with all infos about the travel',
    })
    generate(@Body() dto: CreateItineraryLlmDto){
        return this.llmService.generate(dto);
    }
}