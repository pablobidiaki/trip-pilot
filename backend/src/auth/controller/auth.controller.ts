import { Body, Controller, Patch, Post } from "@nestjs/common";
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

    @Post("google")
    async googleLogin(@Body() body: { idToken: string }) {
        return this.authService.googleLogin(body.idToken);
    }

    @Post("forgotPassword")
    async forgotPassword(@Body() body: { email: string }) {
        return this.authService.forgotPassword(body.email);
    }

    @Patch("changePassword")
    async changePassword(@Body() body: { token:string, password:string }) {
        return this.authService.changePassword(body);
    }
}