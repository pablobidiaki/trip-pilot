import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface GuideCardProps{
    image: string,
    title: string,
    subtitle: string,
    duration: string,
    type: string,
    type_icon: ReactNode
    description: string,
    link_guide: string,
    price: number
}

export default function GuideCard({image, title, subtitle, duration, type, type_icon, description, link_guide, price}: GuideCardProps) {
    return (
        <div className="relative mt-10 max-w-90 overflow-hidden rounded-2xl border border-gray-300">
            <Heart className="absolute right-2 mt-1 text-white cursor-pointer transition-colors hover:fill-red-500 hover:text-red-500"/>
            <Image
                src={image}
                alt={`${title} image`}
                width={75}
                height={75}
                className="w-full object-cover"
                priority
            />

            <h1 className="text-primary-color font-medium text-2xl mx-2 mt-2">{title}</h1>
            <h2 className=" text-second-color mx-2 text-sm">{subtitle}</h2>

            <div className="flex gap-5 mx-2 my-2">
                <InfoItem icon={<Clock />} text={duration}/>
                <InfoItem icon={type_icon} text={type}/>
            </div>

            <p className="text-primary-color mx-2 text-sm">{description}</p>
            <div className=" flex justify-between items-center mx-2 mb-2 mt-5">
                <p>R$ {price}</p>
                <Link className="rounded-2xl cursor-pointer p-2 border border-[#6366F1] text-[#6366F1]" href={link_guide}> Ver Roteiro</Link>
            </div>
        </div>
    )
}