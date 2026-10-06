"use client"

import ImageFullScreen from "@/components/ui/ImageFullScreen/ImageFullScreen";
import texts from "@/constants/texts";
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
        <div onClick={() => setIsOpen(true)} className="relative flex items-end m-2 max-h-60 min-h-60 cursor-pointer">
            <img src={image}
                alt="Tour tip image"
                className="absolute w-full h-full rounded-xl object-cover brightness-30 hover:brightness-50 transition-all hover:duration-200"
            />

            <div className="relative px-2 mx-1 z-10 w-full">
                <h1 className="text-white font-medium truncate">{title}</h1>
                <p className="text-gray-300 text-xs line-clamp-2">{description}</p>
                {price == 0 ? <p className="text-sm bg-green-100 w-fit mb-2 px-2 rounded-xl text-green-500 font-medium mt-2">{texts.free}</p> :
                    <p className="text-sm text-green-500 font-medium mt-2 px-2 bg-green-100 rounded-xl w-fit mb-2">{texts.real} {price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2 
                    })} {texts.perPerson}
                    </p>
                }
            </div>

            <ImageFullScreen image={image} title={title} description={description} price={price} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>

    )
}