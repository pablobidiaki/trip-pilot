import { FlagInterface } from "@/interfaces/map.interface"

const apiKey = process.env.NEXT_PUBLIC_API_URL

export async function getCountryFlag(country: string): Promise<FlagInterface> {
    const response = await fetch(`${apiKey}/itinerary/flag/${country}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}

export async function handleCountryVisited(userId: string, countryName: string, countryCode: string, isAdd: boolean) {
    await fetch(`${apiKey}/user/countryVisited`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            countryCode: countryCode,
            countryName:countryName,
            isAdd: isAdd
        }),
    });
}

export async function addCountryWishlist(userId: string, countryName: string, countryCode: string, isAdd: boolean) {
    await fetch(`${apiKey}/user/countryWishlist`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            countryCode: countryCode,
            countryName:countryName,
            isAdd: isAdd
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

export async function createMemoryContry(userId: string, data: any){
    await fetch(`${apiKey}/user/countryMemory`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            data: data
        }),
    });
}