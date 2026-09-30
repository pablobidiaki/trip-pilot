import { IsString, MinLength } from "class-validator"

export class CreateUserDto{
    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    @MinLength(3)
    password: string
}