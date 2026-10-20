import { ItineraryInterface } from "@/interfaces/itinerary.interface"

const apiKey = process.env.NEXT_PUBLIC_API_URL

interface createItineraryData {
    userId: any
    departure: string,
    destination: string,
    days: number,
    startDate: string,
    countryOrigin: string,
    countryDestination: string,
    currency: string,
    budgetTotal: number,
    travelers: number,
    travelType: string,
    aiProvider: string,
    itinerary: object
}

export async function createItinerary(accessToken: string, data: createItineraryData) {
    try {
        const response = await fetch(`${apiKey}/itinerary`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();

            console.error("Erro retornado pelo backend:", errorData);

            throw new Error(
                errorData.message || "Erro ao gerar roteiro"
            );
        }

        return await response.json();

    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}

export async function getItinerary(id: string): Promise<ItineraryInterface[]> {
    const response = await fetch(`${apiKey}/itinerary/${id}`)

    if (!response.ok)
        throw new Error("Erro ao buscar itinerary")

    return response.json()
}  

export async function getUserItineraries(userId: any): Promise<ItineraryInterface[]> {
    const response = await fetch(`${apiKey}/itinerary/user/${userId}`)

    if (!response.ok)
        throw new Error("Erro ao buscar itinerary")

    return response.json()
}

export async function deleteItinerary(accessToken: string, id: string) {
    try {
        const response = await fetch(`${apiKey}/itinerary/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        });

        if (!response.ok) {
            const errorData = await response.json();

            console.error("Erro retornado pelo backend:", errorData);

            throw new Error(
                errorData.message || "Erro ao gerar roteiro"
            );
        }

        return await response.json();

    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}