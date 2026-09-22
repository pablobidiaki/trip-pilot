import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

export async function getReadyGuides(): Promise<ReadyGuideInterface[]> {
    const response = await fetch("http://localhost:3001/readyGuide")

    if(!response.ok)
        throw new Error("Erro ao buscar guias")

    return response.json()
}   

export async function getReadyGuide(id: string): Promise<ReadyGuideInterface[]> {
    const response = await fetch(`http://localhost:3001/readyGuide/${id}`)

    if(!response.ok)
        throw new Error("Erro ao buscar guias")

    return response.json()
}  

export async function favoriteReadyGuide(userId: string, readyGuideId: string) {
    try {
        const response = await fetch("http://localhost:3001/readyGuide/favorite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, readyGuideId })
        });

        if (!response.ok) {
            const errorData = await response.json();

            console.error("Erro retornado pelo backend:", errorData);

            throw new Error(
                errorData.message || "Erro ao favoritar Guia"
            );
        }

        return await response.json();

    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}

export async function getFavoriteReadyGuides(userId: string) {
    const response = await fetch(`http://localhost:3001/readyGuide/favorite/${userId}`)

    if (!response.ok)
        throw new Error("Erro ao buscar destinos favoritos")

    return response.json()
}