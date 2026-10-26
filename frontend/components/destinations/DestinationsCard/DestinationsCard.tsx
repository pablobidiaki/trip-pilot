import InfoItem from "@/components/ui/InfoItem/InfoItem"
import { Earth, Luggage, MapPin } from "lucide-react"
import Link from "next/link"
import FavoriteButton from "@/components/destination/DestinationBanner/FavoriteButton"
import { UserInterface } from "@/interfaces/user.interface"

interface DestinationCardProps {
    id: string,
    image: string,
    name: string,
    description: string,
    travel_type: string,
    continent: string,
    country: string,
    user?: UserInterface
}

export default function DestinationCard({ id, image, name, description, travel_type, continent, country, user }: DestinationCardProps) {
    return (
        <div className="relative h-80 overflow-hidden rounded-2xl m-4 animate-[optionSelector_300ms_ease-out]">
            <Link href={`/destinations/${id}`}>
                <img
                    src={image}
                    className="absolute inset-0 h-full w-full object-cover brightness-70"
                    alt={name}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                {user &&
                    <div className=" absolute top-2 right-5 ">
                        <FavoriteButton userId={user?.id} destinationId={id} />
                    </div>
                }
                <div className="absolute mx-2 bottom-2 left-2 right-5">
                    <div>
                        <p className="text-white text-3xl font-medium mb-1 line-clamp-2">{name}</p>
                        <p className="text-[#c4c4c4] text-xs mb-1 line-clamp-3">{description}</p>
                        <div className="flex justify-between mt-5 truncate">
                            <p className="text-[#c4c4c4] text-xs ">{travel_type}</p>
                            <p className="text-[#c4c4c4] text-xs ">{country}</p>
                            <p className="text-[#c4c4c4] text-xs ">{continent}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}