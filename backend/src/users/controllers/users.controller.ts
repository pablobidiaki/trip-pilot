import { Body, Controller, Get, Param, Post, Delete, Patch, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { EditCountryDto } from '../dtos/create-users-dto';
import { JwtAuthGuard } from '../../auth/guards/jwt.auth.guard';

@ApiTags('Users')
@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService,) { }

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
    @UseGuards(JwtAuthGuard)
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
