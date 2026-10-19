import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaUserRepository } from "./PrismaUserRepository";
import { IUserRepository } from "./IUserRepository";

@Module({
    imports: [PrismaModule],
    providers: [{provide: IUserRepository, useClass: PrismaUserRepository}],
    exports: [IUserRepository]
})

export class PrismaUserRepositoryModule{}