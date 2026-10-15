import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from '../dtos/create.user.dto';
import { JwtPayloadInterface, LoginInterface, RegistrationStatusInterface, UserInterface } from '../interfaces/auth.interfaces';
import { OAuth2Client } from "google-auth-library";

@Injectable()
export class AuthService {
    private googleClient = new OAuth2Client(process.env.AUTH_GOOGLE_ID);
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) { }

    async register(dto: CreateUserDto): Promise<RegistrationStatusInterface> {
        let status: RegistrationStatusInterface = {
            success: true,
            message: "ACCOUNT_CREATE_SUCCESS",
        }

        try {
            status.data = await this.usersService.create(dto);
        } catch (err) {
            status = {
                success: false,
                message: err instanceof Error ? err.message : String(err),
            };
        }
        return status;
    }

    async login(dto: LoginInterface): Promise<any> {
        const user = await this.usersService.findByLogin(dto);
        const token = this._createToken(user);

        return {
            ...token,
            data: user
        };
    }

    private _createToken(user: UserInterface) {
        const payload: JwtPayloadInterface = {
            sub: user.id,
            email: user.email,
        };
        
        const accessToken = this.jwtService.sign(payload, {secret: process.env.SECRETKEY!});
        
        return {
            accessToken,
            expiresIn: process.env.EXPIRESIN,
        };
    }

    async validateUser(payload: JwtPayloadInterface): Promise<any> {
        const user = await this.usersService.findByPayload(payload);
        if (!user) throw new HttpException("INVALID_TOKEN", HttpStatus.UNAUTHORIZED);

        return user;
    }

    async googleLogin(idToken: string): Promise<any> {
        const ticket = await this.googleClient.verifyIdToken({
            idToken,
            audience: process.env.AUTH_GOOGLE_ID,
        });

        const googlePayload = ticket.getPayload();

        if (!googlePayload?.email || !googlePayload.email_verified) {
            throw new UnauthorizedException("Conta Google inválida");
        }

        const email = googlePayload.email.toLowerCase();

        let user = await this.usersService.findByEmail(email);

        if (!user) {
            user = await this.usersService.createGoogleUser({
                name: googlePayload.name || email,
                email,
            });
        }
        const token = this._createToken(user);

        return {
            ...token,
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    }
}