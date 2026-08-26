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
    async create(@Body() dto: CreateGuideDto){
        const guide = await this.readyGuideService.create(dto)

        return{
            success: true,
            guide: guide
        }
    }

    @Get()
    @ApiOperation({
        summary: "Get all guides"
    })
    async getAll(){
        const guides = await this.readyGuideService.getAll()

        return{
            success: true,
            guides: guides
        }
    }

    @Get(':id')
    @ApiOperation({
        summary: "Get a especific guide"
    })
    async get(@Param('id') id: string){
        const guide = await this.readyGuideService.get(id)

        return {
            success: true,
            guide: guide
        }
    }

    @Delete()
    @ApiOperation({
        summary: "Get all guides"
    })
    async deleteAll(){
        const guides = await this.readyGuideService.deleteAll()

        return{
            success: true,
            guides: guides
        }
    }

    @Delete(':id')
    @ApiOperation({
        summary: "Get a especific guide"
    })
    async delete(@Param('id') id: string){
        const guide = await this.readyGuideService.delete(id)

        return {
            success: true,
            guide: guide
        }
    }
}