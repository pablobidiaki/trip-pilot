import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Clock, Heart, Landmark } from "lucide-react";
import Link from "next/link";

interface GuideCardProps {
    image: string,
    title: string,
    cities: string[],
    duration: number,
    type: string,
    description: string,
    link_guide: string,
    price: number
}

export default function GuideCard({ image, title, cities, duration, type, description, link_guide, price }: GuideCardProps) {
    return (
        <div className="relative mt-10 max-w-90 overflow-hidden rounded-2xl border border-gray-300">
            <Heart className="absolute right-2 mt-1 text-white cursor-pointer transition-colors hover:fill-red-500 hover:text-red-500" />
            <img
                src={image}
                alt={`${title} image`}
                width={75}
                height={75}
                className="w-full object-cover"
            />

            <h1 className="text-primary-color font-medium text-2xl mx-2 mt-2">{title}</h1>
            <div className="flex">
                {cities.map(city => (
                    <h2 className=" text-second-color mx-2 text-sm">{city}</h2>
                ))}
            </div>

            <div className="flex gap-5 mx-2 my-2">
                <InfoItem icon={<Clock />} text={`${duration.toString()} dias`} />
                <InfoItem icon={<Landmark />} text={type} />
            </div>

            <p className="text-primary-color mx-2 text-sm">{description}</p>
            <div className=" flex justify-between items-center mx-2 mb-2 mt-5">
                <p className="p-2 bg-green-200 text-green-500 rounded-2xl">R$ {price}</p>
                <Link className="rounded-2xl cursor-pointer p-2 border border-[#6366F1] text-[#6366F1]" href={`/ready_guide/${link_guide}`}> Ver Roteiro</Link>
            </div>
        </div>
    )
}