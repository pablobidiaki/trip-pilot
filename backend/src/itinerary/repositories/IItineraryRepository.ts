import { createItineraryDto, ItineraryInterface } from "../interfaces/Itinerary.interface";

export abstract class IItineraryRepository {
    abstract create(createItineraryDto: createItineraryDto): Promise<void>
    abstract findAll(): Promise<ItineraryInterface[]>
    abstract findOne(id: string): Promise<ItineraryInterface>
    abstract findUserItineraries(userId: string): Promise<ItineraryInterface[]>
    abstract removeAll(): Promise<void>
    abstract removeOne(id: string): Promise<void>
}