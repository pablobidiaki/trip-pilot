import { Injectable } from "@nestjs/common";
import { ICrypto } from "./ICrypto";
import * as bcrypt from "bcrypt"

@Injectable()
export class BCrypto implements ICrypto {
    async hash(value: string): Promise<string> {
        return bcrypt.hash(value, 10)
    }

    async compare(value: string, hash: string): Promise<boolean> {
        return bcrypt.compare(value, hash)
    }
}