import { Destination } from "@/interfaces/destination.interface";

export async function getDestinations(): Promise<Destination[]> {
    const response = await fetch("http://localhost:3001/destination")

    if(!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}   