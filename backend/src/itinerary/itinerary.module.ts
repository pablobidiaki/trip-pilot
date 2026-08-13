import { Module } from '@nestjs/common';
import { ItineraryController } from './controllers/itinerary.controller';
import { ItineraryService } from './service/itinerary.service';
import { LlmService } from 'src/llm/services/llm.service';
import { LlmModule } from 'src/llm/llm.module';

@Module({
    imports:[LlmModule],
    controllers: [ItineraryController],
    providers: [ItineraryService]
})

export class itineraryModule { }