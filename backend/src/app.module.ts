import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LlmModule } from './llm/llm.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ItineraryModule } from './itinerary/itinerary.module';
import { DestinationModule } from './destination/destination.module';
import { ReadyGuidesModule } from './readyGuide/readyGuide.module';
import { ImagesModule } from './images/images.module';
import { AuthModule } from './auth/auth.module';

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
    ImagesModule,
    LlmModule,
    AuthModule
  ],
})
export class AppModule {}