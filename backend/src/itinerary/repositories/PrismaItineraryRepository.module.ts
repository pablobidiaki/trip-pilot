import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { IItineraryRepository } from "./IItineraryRepository";
import { PrismaItineraryRepository } from "./PrismaItineraryRepository";

@Module({
    imports: [PrismaModule],
    providers: [{provide: IItineraryRepository, useClass: PrismaItineraryRepository}],
    exports: [IItineraryRepository]
})

export class PrismaItineraryRepositoryModule{}