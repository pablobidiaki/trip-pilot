export interface RegistrationStatusInterface{
    success: boolean
    message: string | unknown
    data?: UserInterface
}

export interface UserInterface{
    id: string
    name: string
    email: string
}

export interface LoginInterface{
    email: string
    password: string
}

export interface JwtPayloadInterface {
  sub: string;
  email: string;
}