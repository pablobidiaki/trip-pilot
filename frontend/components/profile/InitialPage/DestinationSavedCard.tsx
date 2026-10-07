import FavoriteButton from "@/components/destination/DestinationBanner/FavoriteButton"
import texts from "@/constants/texts"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import { UserInterface } from "@/interfaces/user.interface"
import Link from "next/link"

interface DestinationSavedCardProps {
    user: UserInterface
    savedDestinations: SavedDestinationInterface[]
}

export default function DestinationSavedCard({ user, savedDestinations }: DestinationSavedCardProps) {
    if (savedDestinations.length === 0) {
        return (
            <div className="flex items-center mx-5 py-5">
                <p className="text-second-color text-lg italic">{texts.profile.noneDestinationSaved}</p>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-1 py-2 gap-5 px-2
            md:grid-cols-2
            lg:grid-cols-4
        ">
            {savedDestinations.slice(0, 4).map((destination, index) => (
                <Link key={index} className="relative bg-background-color border border-gray-100 rounded-2xl transition-all hover:duration-200 hover:scale-101" href={`/destinations/${destination.destination.id}`}>
                    <div className="z-100 absolute top-2 right-2 ">
                        <FavoriteButton userId={user?.id} destinationId={destination.destination.id} />
                    </div>
                    <p className="absolute top-2 left-2 object-cover z-10 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{destination.destination.travelType}</p>
                    <img className="relative w-full h-52 object-cover brightness-50 rounded-t-2xl" src={destination.destination.imageURL} />
                    <p className="mx-2 text-lg font-semibold text-gray-900 truncate">{destination.destination.destination}</p>
                    <p className="mx-2 mb-2 line-clamp-2 text-xs text-second-color
                        lg:text-sm
                    ">{destination.destination.description}</p>
                    <div className="flex gap-2 mx-2 text-second-color text-xs
                        lg:text-lg
                    ">
                        <p>{destination.destination.country}</p>
                        <p>·</p>
                        <p>{destination.destination.dayReccomended} {texts.days}</p>
                    </div>
                    <div className="pt-3 mx-2 mb-1">
                        <p className="text-sm font-bold text-gray-900
                            lg:text-xl
                        ">{texts.real} {destination.destination.averageCost.total.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}