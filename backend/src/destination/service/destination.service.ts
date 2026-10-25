import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateDestinationDto } from "../dtos/create-destination-dto";
import { IDestinationRepository } from "../repositories/IDestinationRepository";

@Injectable()
export class DestinationService {
    constructor(private readonly prisma: PrismaService,
        private readonly destinationRepository: IDestinationRepository
    ) { }

    create(dto: CreateDestinationDto) {
        return this.destinationRepository.create(dto)
    }

    getAll() {
        return this.destinationRepository.findAll()
    }

    get(id: string) {
        return this.destinationRepository.findOne(id)
    }

    deleteAll() {
        return this.destinationRepository.removeAll()
    }

    delete(id: string) {
        return this.destinationRepository.removeOne(id)
    }

    async favorite(userId: string, destinationId: string) {
        const favorite = await this.prisma.savedDestinations.findUnique({
            where: {
                userId_destinationId: {
                    userId,
                    destinationId
                }
            }
        })

        if (favorite) {
            await this.prisma.savedDestinations.delete({
                where: {
                    id: favorite.id
                }
            })

            return {
                isFavorite: false
            }
        }

        await this.prisma.savedDestinations.create({
            data: {
                userId,
                destinationId
            }
        })

        return {
            isFavorite: true
        }
    }

    getAllFavorites(userId: string) {
        return this.prisma.savedDestinations.findMany({
            where: {
                userId: userId
            }, include: {
                destination: true
            }
        })
    }
}