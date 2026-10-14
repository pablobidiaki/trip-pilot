import { FlagInterface } from "@/interfaces/map.interface"

const apiKey = process.env.NEXT_PUBLIC_API_URL

export async function getCountryFlag(country: string): Promise<FlagInterface> {
    const response = await fetch(`${apiKey}/itinerary/flag/${country}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}

export async function addCountryVisited(userId: string, country: string) {
    await fetch(`${apiKey}/user/add/countryVisited`, {
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

export async function removeCountryVisited(userId: string, country: string) {
    await fetch(`${apiKey}/user/remove/countryVisited`, {
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

export async function addCountryWishlist(userId: string, country: string) {
    await fetch(`${apiKey}/user/add/countryWishlist`, {
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

export async function removeCountryWishlist(userId: string, country: string) {
    await fetch(`${apiKey}/user/remove/countryWishlist`, {
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