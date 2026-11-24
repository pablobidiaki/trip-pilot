import { EditUserInfosDto } from "../dtos/users-dto";

export abstract class IUserRepository{
    abstract create(createUserDto: any): Promise<any>
    abstract findAll(): Promise<any[]>
    abstract findOne(id: string): Promise<any>
    abstract findOneByEmail(email: string): Promise<any>
    abstract update(data: Partial<EditUserInfosDto>): Promise<any>
    abstract removeAll(): Promise<void>
    abstract removeOne(id: string): Promise<void>
    abstract updatePassword(id: string, password: string): Promise<any>
    abstract getByUsername(username: string): Promise<any>
    abstract handleCountryMemory(data: any): Promise<any>
    abstract deleteCountryMemory(memoryId: string)
    abstract getUserCities(id: string): Promise<any>
    abstract getCountryCities(userId:  string, countryCode: string)
    abstract createCityInfo(data: any)
}