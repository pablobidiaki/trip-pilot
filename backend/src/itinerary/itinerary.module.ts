import { Module } from '@nestjs/common';
import { ItineraryController } from './controllers/itinerary.controller';
import { ItineraryService } from './service/itinerary.service';
import { LlmModule } from '../llm/llm.module';
import { ImagesModule } from '../images/images.module';
import { UsersModule } from '../users/users.module';

@Module({
    controllers: [ItineraryController],
    providers: [ItineraryService],
    imports: [
        LlmModule,
        ImagesModule,
        UsersModule
    ]
})

export class ItineraryModule { }