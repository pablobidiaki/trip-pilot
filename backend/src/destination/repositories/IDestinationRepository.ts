export abstract class IDestinationRepository {
    abstract create(data: any): Promise<void>
    abstract findAll(): Promise<any[]>
    abstract findOne(id: string): Promise<any>
    abstract removeAll(): Promise<void>
    abstract removeOne(id: string): Promise<void>
}