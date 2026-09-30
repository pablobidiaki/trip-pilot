import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: "trip-pilot-super-secret-key-2026",
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers:[AuthController],
  providers: [AuthService, PrismaService, JwtModule, JwtStrategy, UsersService]
})

export class AuthModule {}
