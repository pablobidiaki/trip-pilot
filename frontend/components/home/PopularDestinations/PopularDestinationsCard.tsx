import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

interface CardProps{
    image: string,
    title: string,
    text: string,
    route_to_destination: string
}

export default function PopularDestinationsCard({image, title, text, route_to_destination}: CardProps){
    return(
        <Link href={route_to_destination} className="relative w-80 h-62.5 overflow-hidden rounded-2xl transition-all hover:duration-200 hover:scale-105 cursor-pointer">
            <img
                src={image}
                alt={`${title} image`}
                className="object-cover brightness-50 w-80 h-62.5"
            />

            <div>
                <div className="absolute bottom-0 p-4 text-white">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-sm text-gray-200 max-w-[85%] line-clamp-2">{text}</p>
                </div>

                <div className="bg-white text-link-color absolute bottom-4 p-2 right-4 rounded-full transition-all hover:duration-200 hover:bg-link-color hover:text-white">
                    <span><ChevronRight size={20}/></span>
                </div>
            </div>
        </Link>
    )
}