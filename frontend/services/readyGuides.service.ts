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