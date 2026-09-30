import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { CreateUserDto } from '../dtos/create.user.dto';
import { LoginInterface } from "../interfaces/auth.interfaces";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() dto: CreateUserDto) {
        return this.authService.register(dto)
    }

    @Post("login")
    async login(@Body() dto: LoginInterface) {
        return this.authService.login(dto)
    }
}