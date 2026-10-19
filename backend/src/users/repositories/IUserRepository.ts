import { CreateUsersDto } from "../dtos/create-users-dto";

export abstract class IUserRepository{
    abstract create(createUserDto: CreateUsersDto): Promise<any>
    abstract findAll(): Promise<any[]>
    abstract findOne(id: string): Promise<any>
    abstract findOneByEmail(email: string): Promise<any>
    abstract update(id: string, createUserDto: Partial<CreateUsersDto>): Promise<any>
    abstract removeAll(): Promise<void>
    abstract removeOne(id: string): Promise<void>
}