import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { IReadyGuideRepository } from "./IReadyGuideRepository";
import { PrismaReadyGuideRepository } from "./PrismaReadyGuideRepository";

@Module({
    imports: [PrismaModule],
    providers: [{provide: IReadyGuideRepository, useClass: PrismaReadyGuideRepository}],
    exports: [IReadyGuideRepository]
})

export class PrismaReadyGuideRepositoryModule{}