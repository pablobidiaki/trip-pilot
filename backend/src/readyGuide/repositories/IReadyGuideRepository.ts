import { CreateGuideDto } from "../dtos/create-guide-dto";

export abstract class IReadyGuideRepository{
    abstract create(createReadyGuideDto: CreateGuideDto): Promise<any>
    abstract findAll(): Promise<any[]>
    abstract findOne(id: string): Promise<any>
    abstract removeAll(): Promise<void>
    abstract removeOne(id: string): Promise<void>
}