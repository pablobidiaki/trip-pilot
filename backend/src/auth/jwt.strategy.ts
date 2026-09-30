import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from "./service/auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from 'src/users/services/users.service';
import { JwtPayloadInterface } from './interfaces/auth.interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: 'trip-pilot-super-secret-key-2026',
        });
    }

    async validate(payload: JwtPayloadInterface): Promise<any> {
        const user = await this.usersService.getById(payload.sub);

        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }

        return user;
    }
}

export interface JwtPayload { login: string; }