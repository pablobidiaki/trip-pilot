import { ItineraryInterface } from "@/interfaces/itinerary.interface";

export async function getItinerary(id: string): Promise<ItineraryInterface[]> {
    const response = await fetch(`http://localhost:3001/itinerary/${id}`)

    if(!response.ok)
        throw new Error("Erro ao buscar itinerary")
    
    return response.json()
}  