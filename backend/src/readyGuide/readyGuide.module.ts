import { Module } from "@nestjs/common"
import { ReadyGuideController } from "./controllers/readyGuide.controller";
import { ReadyGuideService } from "./services/readyGuide.service";
import { PrismaReadyGuideRepositoryModule } from "./repositories/PrismaReadyGuideRepository.module";

@Module({
    imports: [PrismaReadyGuideRepositoryModule],
    controllers:[ReadyGuideController],
    providers:[ReadyGuideService]
})

export class ReadyGuidesModule {}
