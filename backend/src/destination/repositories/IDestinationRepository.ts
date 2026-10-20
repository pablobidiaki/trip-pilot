import { CreateDestinationDto } from "../dtos/create-destination-dto";

export abstract class IDestinationRepository {
    abstract create(data: CreateDestinationDto): Promise<void>
    abstract findAll(): Promise<any[]>
    abstract findOne(id: string): Promise<any>
    abstract removeAll(): Promise<void>
    abstract removeOne(id: string): Promise<void>
}