import { Body, Controller, Get, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { EditCountryUserDto, EditPasswordDto, EditUserInfosDto } from '../dtos/users-dto';
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
        return await this.usersService.getUserByEmail(email)
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

    @Patch('countryVisited')
    @ApiOperation({
        summary: 'Add or remove country in countriesVisited'
    })
    async handleCountryVisited(@Body() dto: EditCountryUserDto){
        return await this.usersService.handleCountryVisited(dto)
    }

    @Patch('countryWishlist')
    @ApiOperation({
        summary: 'Add or remove country in countryWishlist'
    })
    async handleCountryWishlist(@Body() dto: EditCountryUserDto){
        return await this.usersService.handleCountryWishlist(dto)
    }

    @Patch('edit')
    @ApiOperation({
        summary: 'Edit user infos'
    })
    async editUserInfos(@Body() data: EditUserInfosDto){
        return await this.usersService.editUserInfos(data)
    }

    @Patch('edit/password')
    @ApiOperation({
        summary: 'Edit user password'
    })
    async changePassword(@Body() data: EditPasswordDto){
        return await this.usersService.changePassword(data)
    }

    @Get('profile/:username')
    @ApiOperation({
        summary: 'Get an especific user',
    })
    async getByUsername(@Param('username') username: string) {
        const user = await this.usersService.getByUsername(username)
        return {
            success: true,
            user
        }
    }

    @Patch('countryMemory')
    @ApiOperation({
        summary: 'Create a country memory',
    })
    async createCountryMemory(@Body() data: any){
        return await this.usersService.createCountryMemory(data.data)
    }

    @Get('userCities/:id')
    @ApiOperation({
        summary: 'Get an especific user',
    })
    async getUserCities(@Param('id') id: string) {
        return await this.usersService.getUserCities(id)
    }
}
