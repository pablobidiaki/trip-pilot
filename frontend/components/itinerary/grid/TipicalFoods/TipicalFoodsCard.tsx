"use client"

import ImageFullScreen from "@/components/ui/ImageFullScreen/ImageFullScreen";
import texts from "@/constants/texts"
import { Expand } from "lucide-react";
import { useState } from "react";

interface TipicalFoodsCardProps {
    imageURL: string
    title: string
    description: string
    averagePrice: number
    category: string
}

export default function TipicalFoodsCard({ imageURL, title, description, averagePrice, category }: TipicalFoodsCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(true)} className="flex max-h-40 rounded-2xl m-2 border border-gray-100 bg-background-color transition-all hover:duration-200 hover:scale-101">
            <div className="relative group cursor-pointer">
                <img src={imageURL} className="max-h-40 min-w-40 max-w-30 rounded-l-2xl transition-all group-hover:brightness-50" alt={`${title} image`}/>
                <Expand className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    size={28}
                />
            </div>
            <div className="flex flex-col max-w-[170] ml-2
                md:max-w-238
            ">
                <p className="text-primary-color font-medium truncate text-2xl">{title}</p>
                <p className="text-primary-color mb-2 text-sm italic ">{category}</p>
                <p className="text-second-color line-clamp-2">{description}</p>
                <p className="text-green-500 font-medium mt-auto">{texts.real} {averagePrice.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>
            </div>

            {isOpen && <ImageFullScreen image={imageURL} title={title} description={description} price={averagePrice} isOpen={isOpen} onClick={() => setIsOpen(false)} />}
        </div>
    )
}