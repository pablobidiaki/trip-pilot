import { DestinationInterface } from "@/interfaces/destination.interface";

export async function getDestinations(): Promise<DestinationInterface[]> {
    const response = await fetch("http://localhost:3001/destination")

    if (!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}

export async function getDestination(id: string): Promise<DestinationInterface[]> {
    const response = await fetch(`http://localhost:3001/destination/${id}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destino")

    return response.json()
}

export async function favoriteDestination(userId: string, destinationId: string) {
    try {
        const response = await fetch("http://localhost:3001/destination/favorite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, destinationId })
        });

        if (!response.ok) {
            const errorData = await response.json();

            console.error("Erro retornado pelo backend:", errorData);

            throw new Error(
                errorData.message || "Erro ao favoritar destino"
            );
        }

        return await response.json();

    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}

export async function getFavoriteDestinations(id: string) {
    const response = await fetch(`http://localhost:3001/destination/favorite/${id}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos favoritos")

    return response.json()
}