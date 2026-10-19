import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { BCryptoModule } from 'src/core/crypto/BCrypto.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    UsersModule,
    BCryptoModule
  ],
  controllers:[AuthController],
  providers: [AuthService, PrismaService, JwtModule, JwtStrategy]
})

export class AuthModule {}
