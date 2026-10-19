import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateGuideDto } from "../dtos/create-guide-dto";
import { IReadyGuideRepository } from "../repositories/IReadyGuideRepository";

@Injectable()
export class ReadyGuideService {
    constructor(private readonly prisma: PrismaService,
    private readonly readyGuideRepository: IReadyGuideRepository

    ) { }

    create(dto: CreateGuideDto) {
        return this.readyGuideRepository.create(dto)
    }

    getAll() {
        return this.readyGuideRepository.findAll()
    }

    get(id: string) {
        return this.readyGuideRepository.findOne(id)
    }

    deleteAll() {
        return this.readyGuideRepository.removeAll()
    }

    delete(id: string) {
        return this.readyGuideRepository.removeOne(id)
    }

    async favorite(userId: string, readyGuideId: string) {
        const favorite = await this.prisma.savedReadyGuides.findUnique({
            where: {
                userId_readyGuideId: {
                    userId,
                    readyGuideId
                }
            }
        })

        if (favorite) {
            await this.prisma.savedReadyGuides.delete({
                where: {
                    id: favorite.id
                }
            })

            return {
                isFavorite: false
            }
        }

        await this.prisma.savedReadyGuides.create({
            data: {
                userId,
                readyGuideId
            }
        })

        return {
            isFavorite: true
        }
    }

    getAllFavorites(userId: string) {
        return this.prisma.savedReadyGuides.findMany({
            where: {
                userId: userId
            }, include: {
                readyGuide: true
            }
        })
    }
}