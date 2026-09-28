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
        <div onClick={() => setIsOpen(true)} className="flex items-end m-2 max-h-60 min-w-70 max-w-70 cursor-pointer transition-all hover:duration-200 hover:scale-101">
            <img src={image}
                alt="Tour tip image"
                className="relative w-full h-full rounded-xl object-cover brightness-30"
            />

            <div className="absolute mx-2 z-10 max-w-70">
                <h1 className="text-white font-medium line-clamp-1 max-w-66">{title}</h1>
                <p className="text-gray-300 text-xs max-w-66 line-clamp-2">{description}</p>
                {price == 0 ? <p className="text-sm bg-green-100 w-fit mb-2 px-2 rounded-xl text-green-500 font-medium mt-2">{texts.free}</p> :
                    <p className="text-sm text-green-500 font-medium mt-2 px-2 bg-green-100 rounded-xl w-fit mb-2">{texts.real} {price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })} {texts.perPerson}
                    </p>
                }
            </div>

            {isOpen && <ImageFullScreen image={image} title={title} description={description} price={price} isOpen={isOpen} onClick={() => setIsOpen(false)} />}
        </div>

    )
}