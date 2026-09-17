export async function getUserIdByEmail(email: string | null | undefined): Promise<string> {
    const response = await fetch(`http://localhost:3001/user/${email}`)

    if(!response.ok)
        throw new Error("Erro ao buscar usuario")

    return response.json()
}  