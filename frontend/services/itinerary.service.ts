import { ItineraryInterface } from "@/interfaces/itinerary.interface"

interface createItineraryData {
    userId: string,
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

export async function createItinerary(data: createItineraryData) {
    try {
        const response = await fetch("http://localhost:3001/itinerary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
    const response = await fetch(`http://localhost:3001/itinerary/${id}`)
    if(typeof response === "string"){
        console.log('siom é uma styring ')
        JSON.parse(response)
        console.log(response)
    }

    if (!response.ok)
        throw new Error("Erro ao buscar itinerary")

    return response.json()
}  