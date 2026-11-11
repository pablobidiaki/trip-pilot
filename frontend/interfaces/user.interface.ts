export interface UserInterface{
    id: string
    countriesVisited: string[]
    countriesWishlist: string[]
    email: string
    image?: string 
    name: string
    username: string
    biography?: string
    isPublicAccount: boolean
    countriesMemories: CountriesMemoriesInterface[]
}

export interface CountriesMemoriesInterface{
    id: string
    cities: string[]
    countryCode: string
    countryName: string
    isVisitedCountry: boolean
    isWishListCountry: boolean
    notes: string
    visitedAt: string
    userId: string
}

export interface RegisterUserInterface{
    name: string
    email: string
    password: string
}

export interface UpdateUserInterface{
    id: string 
    name: string | undefined
    image: string | undefined
    biography: string| undefined
    isPublicAccount: string | undefined
}

export interface UpdatePasswordInterface{
    id: string
    currentPassword: string
    password: string
}