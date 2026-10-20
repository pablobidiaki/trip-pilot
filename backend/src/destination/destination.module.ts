import { Module } from "@nestjs/common";
import { DestinationController } from "./controllers/destination.controller";
import { DestinationService } from "./service/destination.service";
import { PrismaDestinationRepositoryModule } from "./repositories/PrismaDestinationRepository.module";

@Module({
    imports:[PrismaDestinationRepositoryModule],
    controllers: [DestinationController],
    providers: [DestinationService]
})

export class DestinationModule { }