import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from '../dtos/create.user.dto';
import { JwtPayloadInterface, LoginInterface, RegistrationStatusInterface, UserInterface } from '../interfaces/auth.interfaces';
import { OAuth2Client } from "google-auth-library";
import { createHash, randomBytes } from 'crypto';
import { Resend } from 'resend';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICrypto } from 'src/core/crypto/ICrypto';

@Injectable()
export class AuthService {
    private googleClient = new OAuth2Client(process.env.AUTH_GOOGLE_ID);
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
        private readonly prisma: PrismaService,
        private readonly crypto: ICrypto
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

        const accessToken = this.jwtService.sign(payload, { secret: process.env.SECRETKEY! });

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

        let user = await this.usersService.getUserByEmail(email);

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

    async forgotPassword(email: string): Promise<any> {
        const user = await this.usersService.getUserByEmail(email)

        if (user == null) return { message: "Usuário não encontrado" }
        else {
            const token = randomBytes(32).toString('hex');
            const tokenHash = createHash('sha256').update(token).digest('hex');

            const resend = new Resend(process.env.RESEND_KEY);

            await this.prisma.passwordResetToken.create({
                data: {
                    tokenHash,
                    userId: user.id,
                    expiresAt: new Date(Date.now() + 15 * 60 * 1000)
                }
            })

            const { data, error } = await resend.emails.send({
                from: 'TripPilot <onboarding@resend.dev>',
                to: [`pbidiaki03@gmail.com`],
                subject: 'Recuperação de senha',
                html: `<p>Olá!</p>
                    <p>Recebemos uma solicitação para redefinir a senha da sua conta TripPilot.</p>
                    <p>Clique no botão abaixo para criar uma nova senha:</p>
                    <p>Link para redefinir sua senha: <a href='http://localhost:3000/reset-password?token=${token}'>aqui!</a></p>
                    <p>Se você não solicitou essa alteração, ignore este e-mail.</p>
                    `,
            });

            if (error) return console.error({ error });
        }

        return { message: "Foi enviado um link de recuperção ao e-mail" }
    }

    async changePassword(data: { token: string, password: string }): Promise<any> {
        const tokenHash = createHash('sha256').update(data.token).digest('hex')
        const resetToken = await this.prisma.passwordResetToken.findUnique({ where: { tokenHash } })

        if (!resetToken || resetToken.usedAt || resetToken.expiresAt < new Date()) {
            throw new BadRequestException('Token inválido ou expirado');
        } else {
            const hashPassword = await this.crypto.hash(data.password)
            await this.prisma.user.update({ where: { id: String(resetToken.userId) }, data: { password: String(hashPassword) } })
            return { sucess: true }
        }
    }
}