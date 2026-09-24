import { FlagInterface } from "@/interfaces/map.interface"

export async function getCountryFlag(country: string): Promise<FlagInterface> {
    const response = await fetch(`http://localhost:3001/itinerary/flag/${country}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}

export async function addCountryVisited(userId: string, country: string) {
    await fetch(`http://localhost:3001/user/countryVisited`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            country: country
        }),
    });
}