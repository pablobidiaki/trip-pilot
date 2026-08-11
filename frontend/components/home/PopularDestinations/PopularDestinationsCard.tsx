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
        <div className="relative w-75 h-62.5 overflow-hidden rounded-2xl">
            <Image
                src={image}
                alt={`${title} image`}
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                className="object-cover brightness-50 "
                priority
            />

            <div>
                <div className="absolute bottom-0 p-4 text-white">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-sm text-gray-200">{text}</p>
                </div>

                <div className="bg-white absolute bottom-4 p-2 right-4 rounded-full">
                    <Link href={route_to_destination}><ChevronRight size={20} className="text-link-color"/></Link>
                </div>
            </div>
        </div>
    )
}