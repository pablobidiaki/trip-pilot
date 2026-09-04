"use client"

import ImageFullScreen from "@/components/ui/ImageFullScreen/ImageFullScreen";
import texts from "@/constants/texts"
import { Expand } from "lucide-react";
import { useState } from "react";

interface TipicalFoodsCardProps{
    imageURL: string
    title: string
    description: string
    averagePrice: number
    category: string
}

export default function TipicalFoodsCard({imageURL, title, description, averagePrice, category}: TipicalFoodsCardProps){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="flex rounded-2xl m-4 border border-gray-200 min-h-30 max-h-30">
            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
                <img src={imageURL} className="rounded-l-2xl min-h-30 max-h-30 max-w-32 transition-all group-hover:brightness-50" />
                <Expand className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    size={28}
                />
            </div>
            <div className="mr-4 ml-2">
                <p className="text-primary-color font-medium line-clamp-2">{texts.tipicalFood.name}<span className="text-second-color">{title}</span></p>
                <p className="text-primary-color font-medium line-clamp-2">{texts.tipicalFood.description}<span className="text-second-color">{description}</span></p>
                <p className="text-primary-color font-medium">{texts.tipicalFood.category}<span className="text-second-color">{category}</span></p>
                <p className="text-primary-color font-medium">{texts.tipicalFood.averagePrice}<span className="text-second-color">{texts.real} {averagePrice}</span></p>
            </div>

            {isOpen && <ImageFullScreen image={imageURL} title={title} description={description} isOpen={isOpen} onClick={() => setIsOpen(false)} />}
        </div>
    )
}