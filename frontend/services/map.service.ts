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
    await fetch(`${apiKey}/user/countryMemory`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data
        })
    });
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

export async function getCountryCities(userId: string, countryCode: string) {
    const response = await fetch(`${apiKey}/user/${userId}/countries/${countryCode}/cities`);

    if (!response.ok) throw new Error("Erro ao buscar cidades");

    return response.json();
}

export async function handleCityInfo(title: string, description: string, imageURL: string, cityId?: string) {
    if (cityId !== undefined) {
        try{
            await fetch(`${apiKey}/user/cityInfos`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cityId: cityId,
                    title: title,
                    description: description,
                    imageURL: imageURL
                }),
            })
        }
        catch(error){
            console.error("Error: ", error)
        }
    }
    else {
        try{
            const response = await fetch(`${apiKey}/user/cityInfos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    title: title,
                    description: description,
                    imageURL: imageURL
                })
            });
    
            if (!response.ok) {
                const errorData = await response.json();
    
                console.error("Erro retornado pelo backend:", errorData);
    
                throw new Error(
                    errorData.message || "Erro ao criar informações da cidade"
                );
            }
    
            return await response.json();
        } catch(error){
            console.error("Error: ", error)
        }
    }
}