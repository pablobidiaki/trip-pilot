import { Module } from "@nestjs/common";
import { DestinationController } from "./controllers/destination.controller";
import { DestinationService } from "./service/destination.service";

@Module({
    controllers: [DestinationController],
    providers: [DestinationService]
})

export class DestinationModule { }