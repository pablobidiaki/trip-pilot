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
            countryName: countryName,
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
            countryName: countryName,
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

export async function handleCountryMemory(data: any) {
    const response = await fetch(`${apiKey}/user/countryMemory`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data
        })
    });

    if (!response.ok) {
        throw new Error("Erro ao salvar memória");
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

export async function deleteCountryMemory(memoryId: string) {
    const response = await fetch(`${apiKey}/user/deleteCountryMemory/${memoryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();

        console.error("Erro retornado pelo backend:", errorData);

        throw new Error(
            errorData.message || "Erro ao remover memoria"
        );
    }

    return await response.json();
}

export async function getCitiesVisited(userId: string) {
    const response = await fetch(`${apiKey}/user/userCitiesVisited/${userId}`)

    if (!response.ok) throw new Error("Erro ao buscar destinos")

    return response.json()
}

export async function getCountryInfos(userId: string, countryCode: string) {
    const response = await fetch(`${apiKey}/user/${userId}/countries/${countryCode}/cities`);

    if (!response.ok) throw new Error("Erro ao buscar cidades");

    return response.json();
}


export async function handleCityExperience(data: any) {
    try {
        const response = await fetch(`${apiKey}/user/cityMemory`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data
            })
        });

        if (!response.ok) {
            const errorData = await response.json();

            console.error("Erro retornado pelo backend:", errorData);

            throw new Error(
                errorData.message || "Erro ao criar informações da cidade"
            );
        }
    } catch (error) {
        console.error("Error: ", error)
    }
}

export async function getCityMemories(userId: string) {
    const response = await fetch(`${apiKey}/user/cityMemories/${userId}`);

    if (!response.ok) throw new Error("Erro ao buscar cidades");

    return response.json();
}