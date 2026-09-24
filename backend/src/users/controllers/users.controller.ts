import { Body, Controller, Get, Param, Post, Delete, Query, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { EditCountryDto, CreateUsersDto } from '../dtos/create-users-dto';

@ApiTags('Users')
@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService,) { }

    @Post("register")
    async register(@Body() data: CreateUsersDto) {
        return this.usersService.register(
            data.name,
            data.email,
            data.password
        )
    }

    @Post("login")
    async login(
        @Body() data: {
            email: string
            password: string
        }
    ) {
        return this.usersService.login(
            data.email,
            data.password
        )
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

    @Get(':email')
    @ApiOperation({
        summary: 'Get an especific user id by email',
    })
    async getIdByEmail(@Param('email') email: string) {
        return await this.usersService.getIdByEmail(email)
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
    async deleteById(@Param('id') id: string) {
        const user = await this.usersService.deleteById(id)
        return {
            success: true,
            user
        }
    }

    @Delete()
    @ApiOperation({
        summary: 'Delete all users'
    })
    async delete() {
        const user = await this.usersService.deleteAll()
        return {
            success: true,
            user
        }
    }

    @Patch('add/countryVisited')
    @ApiOperation({
        summary: 'Add country in countriesVisited'
    })
    async addCountryVisited(@Body() data: EditCountryDto){
        return await this.usersService.addCountryVisited(data)
    }

    @Patch('remove/countryVisited')
    @ApiOperation({
        summary: 'Remove country in countriesVisited'
    })
    async removeCountryVisited(@Body() data: EditCountryDto){
        return await this.usersService.removeCountryVisited(data)
    }

    @Patch('add/countryWishlist')
    @ApiOperation({
        summary: 'Add country in countryWishlist'
    })
    async addCountryCountryWishlist(@Body() data: EditCountryDto){
        return await this.usersService.addCountryCountryWishlist(data)
    }

    @Patch('remove/countryWishlist')
    @ApiOperation({
        summary: 'Remove country in countryWishlist'
    })
    async removeCountryCountryWishlist(@Body() data: EditCountryDto){
        return await this.usersService.removeCountryCountryWishlist(data)
    }
}
