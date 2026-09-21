"use client"

import { Heart } from "lucide-react"
import { toast } from "sonner"

import { favoriteDestination } from "@/services/destination.service"

interface FavoriteButtonProps {
    userId: string
    destinationId: string
}

export default function FavoriteButton({userId, destinationId}: FavoriteButtonProps) {
    const handleFavoriteClick = async () => {
        try {
            await favoriteDestination(userId, destinationId)
            toast.success("Destino favoritado com sucesso!")
        } catch (error) {
            console.error("Erro ao favoritar destino:", error)
            toast.error("Erro ao favoritar destino. Tente novamente mais tarde.")
        }
    }

    return (
        <Heart onClick={handleFavoriteClick}
            className="cursor-pointer transition-colors hover:fill-red-500 hover:text-red-500"
        />
    )
}