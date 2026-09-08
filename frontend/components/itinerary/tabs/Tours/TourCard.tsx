"use client"

import ImageFullScreen from "@/components/ui/ImageFullScreen/ImageFullScreen";
import texts from "@/constants/texts"
import { Fullscreen } from "lucide-react";
import { useState } from "react";

interface TourCardProps {
    imageURL: string,
    title: string,
    description: string,
    price: number
}

export default function TourCard({ imageURL, title, description, price }: TourCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-gray-200 w-100 h-90 bg-white rounded-2xl flex flex-col transition-all hover:shadow-2xl hover:duration-200">
            <div className="relative">
                <img src={imageURL} className="w-full h-60 object-cover rounded-t-2xl"/>
                
                <span className="absolute top-3 right-3 bg-green-100  text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {price === 0 ? texts.free : `${texts.real} ${price}`}
                </span>

                <Fullscreen size={30} onClick={() => setIsOpen(true)} className="cursor-pointer absolute top-2 left-3 text-white"/>
            </div>
            <p className="mx-2 mt-2 text-primary-color text-xl font-semibold truncate">{title}</p>
            <p className="mx-2 mb-2 text-second-color line-clamp-2">{description}</p>
            <div className="mx-2 mb-1 mt-auto">
                <hr/>
                <div className="flex justify-between">
                    <p className="text-second-color">{texts.price}</p>
                    <p className="text-green-600 font-semibold mt-1">{price === 0 ? texts.free : `${texts.real} ${price} ${texts.per_person}`}</p>
                </div>
            </div>
            {isOpen && <ImageFullScreen image={imageURL} title={title} description={description} price={price} isOpen={isOpen} onClick={() => setIsOpen(false)} />}
        </div>
    );
}