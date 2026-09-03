"use client"

import ImageFullScreen from "@/components/ui/ImageFullScreen/ImageFullScreen";
import texts from "@/constants/texts";
import { Expand } from "lucide-react";
import { useState } from "react";

interface TourCardProps {
    image: string,
    title: string,
    description: string,
    price: number
}

export default function TourCard({ image, title, description, price }: TourCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex gap-4 p-2 items-center">
            <div className="relative group w-30 h-28">
                <img src={image}
                    alt="Tour tip image"
                    className="cursor-pointer w-full h-full rounded-2xl object-cover transition-all group-hover:brightness-50"
                    onClick={() => setIsOpen(true)}
                />

                <Expand className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" size={28}/>
            </div>
            <div>
                <h1 className="text-primary-color font-medium text-xl line-clamp-1">{title}</h1>
                <p className="text-second-color text-sm max-w-56 line-clamp-2">{description}</p>
                {price == 0 ? <p className="text-green-500 font-medium mt-2">{texts.free}</p> : <p className="text-green-500 font-medium mt-2">{texts.real} {price} {texts.per_person}</p>}
            </div>

            {isOpen && <ImageFullScreen image={image} title={title} description={description} isOpen={isOpen} onClick={() => setIsOpen(false)} />}
        </div>

    )
}