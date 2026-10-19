import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { BCryptoModule } from 'src/core/crypto/BCrypto.module';

@Module({
    imports: [BCryptoModule],
    controllers:[UsersController],
    providers:[UsersService],
    exports:[UsersService]
})

export class UsersModule{}