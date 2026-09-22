"use client"

import { Heart } from "lucide-react"
import { toast } from "sonner"

import { favoriteDestination, getFavoriteDestinations } from "@/services/destination.service"
import { useEffect, useState } from "react"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import { favoriteReadyGuide, getFavoriteReadyGuides } from "@/services/readyGuides.service"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"

interface FavoriteButtonProps {
    userId: string
    destinationId?: string
    readyGuideId?: string
}

export default function FavoriteButton({ userId, destinationId, readyGuideId }: FavoriteButtonProps) {
    const [isFavorited, setIsFavorited] = useState(false)

    const handleFavoriteClick = async () => {
        try {
            let text = ""
            if (!isFavorited) text = "Destino favoritado com sucesso!"
            else text = "Destino removido dos favoritos com sucesso!"

            if (destinationId) await favoriteDestination(userId, destinationId)
            if (readyGuideId) await favoriteReadyGuide(userId, readyGuideId)
            toast.success(text)

            setIsFavorited(!isFavorited)
        } catch (error) {
            console.error("Erro ao favoritar destino:", error)
            toast.error("Erro ao favoritar destino. Tente novamente mais tarde.")
        }
    }

    const isFavorite = async () => {
        let isFavorite
        
        const destinations = await getFavoriteDestinations(userId)
        const readyGuides = await getFavoriteReadyGuides(userId)

        if(destinationId) isFavorite = destinations.some((saved: SavedDestinationInterface) => saved.destinationId === destinationId)
        if(readyGuideId) isFavorite = readyGuides.some((saved: SavedReadyGuideInterface) => saved.readyGuideId === readyGuideId)

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