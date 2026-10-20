import { DestinationInterface } from "@/interfaces/destination.interface";

const apiKey = process.env.NEXT_PUBLIC_API_URL

export async function getDestinations(): Promise<DestinationInterface[]> {
    const response = await fetch(`${apiKey}/destination`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos")

    return response.json()
}

export async function getDestination(id: string): Promise<DestinationInterface> {
    const response = await fetch(`${apiKey}/destination/${id}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destino")

    return response.json()
}

export async function favoriteDestination(userId: string, destinationId: string) {
    try {
        const response = await fetch(`${apiKey}/destination/favorite`, {
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

export async function getFavoriteDestinations(userId: string) {
    const response = await fetch(`${apiKey}/destination/favorite/${userId}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos favoritos")

    return response.json()
}