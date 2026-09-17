export async function getUserIdByEmail(email: string | null | undefined): Promise<string> {
    const response = await fetch(`http://localhost:3001/user/${email}`)

    if (!response.ok)
        throw new Error("Erro ao buscar usuario")

    return response.json()
}

export async function registerUser(data: {name: string, email: string, password: string}) {
    const response = await fetch("http://localhost:3001/user/register", {
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