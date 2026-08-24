import { Destination } from "@/interfaces/destination.interface";

export async function getDestinations(): Promise<Destination[]> {
    const response = await fetch("http://localhost:3001/destination")

    if(!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}   

export async function getDestination(id: string): Promise<Destination[]> {
    const response = await fetch(`http://localhost:3001/destination/${id}`)

    if(!response.ok)
        throw new Error("Erro ao buscar destino")

    return response.json()
}  