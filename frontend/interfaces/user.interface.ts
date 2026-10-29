export interface UserInterface{
    id: string
    countriesVisited: string[]
    countriesWishlist: string[]
    email: string
    image?: string 
    name: string
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
    password: string | undefined
}