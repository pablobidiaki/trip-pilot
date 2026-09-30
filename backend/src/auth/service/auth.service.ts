import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from '../dtos/create.user.dto';
import { JwtPayloadInterface, LoginInterface, RegistrationStatusInterface, UserInterface } from '../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
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
        const user = await this.usersService.findByEmail(dto);
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

        const accessToken = this.jwtService.sign(payload);

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
}