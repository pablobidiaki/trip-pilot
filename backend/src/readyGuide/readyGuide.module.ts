import { Module } from "@nestjs/common"
import { ReadyGuideController } from "./controllers/readyGuide.controller";
import { ReadyGuideService } from "./services/readyGuide.service";

@Module({
    controllers:[ReadyGuideController],
    providers:[ReadyGuideService]
})

export class ReadyGuidesModule {}
