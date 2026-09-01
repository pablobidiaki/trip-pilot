import { Module } from '@nestjs/common';
import { ItineraryController } from './controllers/itinerary.controller';
import { ItineraryService } from './service/itinerary.service';
import { LlmModule } from 'src/llm/llm.module';
import { ImagesModule } from 'src/images/images.module';

@Module({
    controllers: [ItineraryController],
    providers: [ItineraryService],
    imports: [
        LlmModule,
        ImagesModule
    ]
})

export class ItineraryModule { }