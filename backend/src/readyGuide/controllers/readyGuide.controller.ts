import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateGuideDto } from "../dtos/create-guide-dto";
import { ReadyGuideService } from "../services/readyGuide.service";

@ApiTags("ReadyGuide")
@Controller("readyGuide")
export class ReadyGuideController {
    constructor(private readonly readyGuideService: ReadyGuideService) { }

    @Post()
    @ApiOperation({
        summary: "Create a guide"
    })
    async create(@Body() dto: CreateGuideDto) {
        const guide = await this.readyGuideService.create(dto)

        return {
            success: true,
            guide: guide
        }
    }

    @Get()
    @ApiOperation({
        summary: "Get all guides"
    })
    async getAll() {
        return await this.readyGuideService.getAll()

    }

    @Get(':id')
    @ApiOperation({
        summary: "Get a especific guide"
    })
    async get(@Param('id') id: string) {
        return await this.readyGuideService.get(id)
    }

    @Delete()
    @ApiOperation({
        summary: "Get all guides"
    })
    async deleteAll() {
        const guides = await this.readyGuideService.deleteAll()

        return {
            success: true,
            guides: guides
        }
    }

    @Delete(':id')
    @ApiOperation({
        summary: "Get a especific guide"
    })
    async delete(@Param('id') id: string) {
        const guide = await this.readyGuideService.delete(id)

        return {
            success: true,
            guide: guide
        }
    }

    @Post('favorite')
    @ApiOperation({
        summary: 'Favorite a guide'
    })
    async favorite(@Body() body: { userId: string; readyGuideId: string }) {
        const guide = await this.readyGuideService.favorite(body.userId, body.readyGuideId)

        return {
            success: true,
            guide: guide
        }
    }

    @Get('favorite/:userId')
    @ApiOperation({
        summary: 'Get all favorite guides'
    })
    async getAllFavorites(@Param('userId') userId: string) {
        return await this.readyGuideService.getAllFavorites(userId)
    }
}