import { Module } from "@nestjs/common";
import { ICrypto } from "./ICrypto";
import { BCrypto } from "./BCrypto";

@Module({
    providers:[{provide: ICrypto, useClass: BCrypto}],
    exports:[ICrypto]
})
export class BCryptoModule {}