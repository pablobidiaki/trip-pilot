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
}

export interface UpdatePasswordInterface{
    id: string
    currentPassword: string
    password: string
}