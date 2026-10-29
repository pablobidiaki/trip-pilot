import { RegisterUserInterface, UpdateUserInterface } from "@/interfaces/user.interface"

const apiKey = process.env.NEXT_PUBLIC_API_URL

export async function getUserIdByEmail(accessToken: string, email: string | null | undefined) {
    const response = await fetch(`${apiKey}/user/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })

    if (!response.ok)
        throw new Error("Erro ao buscar usuario")

    return response.json()
}

export async function getUserById(userId: string) {
    const response = await fetch(`${apiKey}/user/${userId}`)

    if (!response.ok)
        throw new Error("Erro ao buscar usuario")

    return response.json()
}

export async function registerUser(data: RegisterUserInterface) {
    const response = await fetch(`${apiKey}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) throw new Error(result.message || "Error trying to register user.")

    return result
}

export async function updateUser(data: UpdateUserInterface | {}) {
    const response = await fetch(`${apiKey}/user/edit`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) throw new Error(result.message || "Error trying to register user.")

    return result
}