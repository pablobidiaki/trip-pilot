import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { IDestinationRepository } from "./IDestinationRepository";
import { PrismaDestinationRepository } from "./PrismaDestinationRepository";

@Module({
    imports: [PrismaModule],
    providers: [{provide: IDestinationRepository, useClass: PrismaDestinationRepository}],
    exports: [IDestinationRepository]
})

export class PrismaDestinationRepositoryModule{}