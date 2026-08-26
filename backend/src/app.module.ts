import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LlmModule } from './llm/llm.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ItineraryModule } from './itinerary/itinerary.module';
import { DestinationModule } from './destination/destination.module';
import { ReadyGuidesModule } from './readyGuide/readyGuide.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    ItineraryModule,
    DestinationModule,
    ReadyGuidesModule,
    LlmModule
  ],
})
export class AppModule {}