import InfoItem from "@/components/ui/InfoItem/InfoItem"
import { Heart, Luggage, MapPin } from "lucide-react"
import Link from "next/link"

interface DestinationCardProps {
    id: string,
    image: string,
    name: string,
    description: string,
    travel_type: string,
    country: string
}

export default function DestinationCard({ id, image, name, description, travel_type, country }: DestinationCardProps) {
    return (
        <div className="relative h-80 overflow-hidden rounded-2xl m-4">
            <Link href={`/destinations/${id}`}>
                <img
                    src={image}
                    className="absolute inset-0 h-full w-full object-cover"
                    alt={name}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <Heart className="cursor-pointer text-white absolute top-2 right-5 transition-colors hover:fill-red-500 hover:text-red-500" />
                <div className="absolute mx-2 bottom-2 left-2 right-5">
                    <div>
                        <p className="text-white text-3xl font-medium mb-1">{name}</p>
                        <p className="text-[#c4c4c4] text-xs mb-1">{description}</p>
                        <div className="flex gap-5">
                            <InfoItem icon={<Luggage size={20} className="text-[#c4c4c4]" />} text={travel_type} tailwindTextTags="text-[#c4c4c4] text-xs" />
                            <InfoItem icon={<MapPin size={20} className="text-[#c4c4c4]" />} text={country} tailwindTextTags="text-[#c4c4c4] text-xs" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}