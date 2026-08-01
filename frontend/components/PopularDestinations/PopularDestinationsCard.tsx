import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

interface CardProps{
    image: string,
    title: string,
    text: string
}

export default function PopularDestinationsCard({image, title, text}: CardProps){
    return(
        <div className="relative w-75 h-62.5 overflow-hidden rounded-2xl">
            <Image
                src={image}
                alt={`${title} image`}
                fill
                className="object-cover brightness-50 -z-10"
                priority
            />

            <div>
                <div className="absolute bottom-0 p-4 text-white">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm">{text}</p>
                </div>

                <div className="bg-white absolute bottom-4 p-2 right-4 rounded-full">
                    <Link href={"/"}><ChevronRight size={20} className="text-link-color"/></Link>
                </div>
            </div>
        </div>
    )
}