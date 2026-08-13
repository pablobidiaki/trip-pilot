import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { CreateUsersDto } from '../dtos/create-users-dto';

@ApiTags('Users')
@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService,) { }

    @Post()
    @ApiOperation({
        summary: 'Create an user',
    })
    async create(@Body() dto: CreateUsersDto) {
        const user = await this.usersService.create(dto)
        return {
            success: true,
            user
        }
    }

    @Get()
    @ApiOperation({
        summary: 'Get all users',
    })
    async getAll() {
        const users = await this.usersService.getAll()
        return {
            success: true,
            users
        }
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Get an especific user',
    })
    async getById(@Param('id') id: string) {
        const user = await this.usersService.getById(id)
        return {
            success: true,
            user
        }
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Delete an especific user'
    })
    async deleteById(@Param('id') id: string){
        const user = await this.usersService.deleteById(id)
        return{
            success: true,
            user
        }
    }

    @Delete()
    @ApiOperation({
        summary: 'Delete all users'
    })
    async delete(){
        const user = await this.usersService.deleteAll()
        return{
            success: true,
            user
        }
    }
}
