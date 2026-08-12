import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { CreateUsersDto } from '../dtos/create-users-dto';

@ApiTags('Users')
@Controller("user")
export class UsersController{
    constructor(private readonly usersService: UsersService,) {}
    @Post("create")
    @ApiOperation({
        summary: 'Cria um usuario',
    })
    create(@Body() dto: CreateUsersDto){
        return this.usersService.create(dto);
    }
}