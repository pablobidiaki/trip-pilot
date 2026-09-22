"use client"

import { Heart } from "lucide-react"
import { toast } from "sonner"

import { favoriteDestination, getFavoriteDestinations } from "@/services/destination.service"
import { useEffect, useState } from "react"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"

interface FavoriteButtonProps {
    userId: string
    destinationId: string
}

export default function FavoriteButton({ userId, destinationId }: FavoriteButtonProps) {
    const [isFavorited, setIsFavorited] = useState(false)

    const handleFavoriteClick = async () => {
        try {
            let text = ""
            if (!isFavorited) text = "Destino favoritado com sucesso!"
            else text = "Destino removido dos favoritos com sucesso!"

            await favoriteDestination(userId, destinationId)
            toast.success(text)

            setIsFavorited(!isFavorited)
        } catch (error) {
            console.error("Erro ao favoritar destino:", error)
            toast.error("Erro ao favoritar destino. Tente novamente mais tarde.")
        }
    }

    const isFavorite = async () => {
        const destinations = await getFavoriteDestinations(userId)
        const isFavorite = destinations.some((saved: SavedDestinationInterface) => saved.destinationId === destinationId)
        setIsFavorited(isFavorite)
    }

    useEffect(() => {
        isFavorite()
    }, [isFavorited])

    return (
        <Heart onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()

            handleFavoriteClick()
        }}
            className={`cursor-pointer transition-all duration-200 ease-out hover:fill-red-500 hover:text-red-500 active:scale-125 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-white'} `}
        />
    )
}