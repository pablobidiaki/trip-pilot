"use client"

import { useState } from "react";
import { UserInfoCard } from "./UserInfoCard";
import { PhotoModal } from "./PhotoModal";
import { UserInterface } from "@/interfaces/user.interface";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";

interface UserInfosProps {
    user: UserInterface
    itineraries: ItineraryInterface[]
}

export default function UserInfos({ user, itineraries }: UserInfosProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handlePhoto = () => {
        if(user?.image) setIsOpen(true)
    }

    const getCountriesVisited = (): number => {
        let value = 0

        for(let i = 0; i < user.countriesMemories.length; i ++)
            if(user.countriesMemories[i].isVisitedCountry) value++

        return value
    }

    const getCountriesWishList = (): number => {
        let value = 0

        for(let i = 0; i < user.countriesMemories.length; i ++)
            if(user.countriesMemories[i].isWishListCountry) value++

        return value
    }

    return (
        <div className="w-fit mx-auto flex flex-col items-center">
            <div onClick={() => handlePhoto()} className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 mt-5">
                {user?.image ? <img src={user?.image} alt="Foto de perfil" className="h-full w-full object-cover rounded-full" /> : 
                <span className="text-3xl font-bold text-indigo-600"> {user?.name.charAt(0).toUpperCase()} </span>}
            </div>
            <h1 className="text-xl font-medium mt-2">{user?.name}</h1>
            <p className="text-sm text-secondary-color">@{user?.username}</p>
            <p className="mt-2 mb-5 font-light mx-4">{user?.biography}</p>
            <div className="flex gap-10">
                <UserInfoCard title="Roteiros criados" value={user?.isPublicAccount ? itineraries?.length : "*"} />
                <UserInfoCard title="Países visitados" value={user?.isPublicAccount ? getCountriesVisited() : "*"} />
                <UserInfoCard title="Países desejados" value={user?.isPublicAccount ? getCountriesWishList() : "*"} />
            </div>

            <PhotoModal open={isOpen} src={user?.image!} onClose={() => setIsOpen(false)} />
        </div>
    )
}