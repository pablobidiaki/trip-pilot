import texts from "@/constants/texts"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import Link from "next/link"

interface DestinationSavedCardProps {
    savedDestinations: SavedDestinationInterface[]
}

export default function DestinationSavedCard({ savedDestinations }: DestinationSavedCardProps) {
    return (
        <div className="grid grid-cols-4 py-2 gap-5 px-4">
            {savedDestinations.slice(0, 4).map((destination, index) => (
                <Link key={index} className="relative bg-background-color border rounded-2xl transition-all hover:duration-200 hover:scale-103" href={`/destinations/${destination.destination.id}`}>
                    <p className="absolute top-2 right-2 object-cover z-10 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{destination.destination.travelType}</p>
                    <img className="relative w-full h-52 object-cover brightness-50 rounded-t-2xl" src={destination.destination.imageURL} />
                    <p className="mx-2 text-lg font-semibold text-gray-900 truncate">{destination.destination.destination}</p>
                    <p className="mx-2 mb-2 line-clamp-2 text-sm text-second-color">{destination.destination.description}</p>
                    <div className="flex gap-2 mx-2 text-second-color">
                        <p>{destination.destination.country}</p>
                        <p>·</p>
                        <p>{destination.destination.dayReccomended} {texts.days}</p>
                    </div>
                    <div className="pt-3 mx-2 mb-1">
                        <p className="text-xl font-bold text-gray-900">{texts.real} {destination.destination.averageCost.total.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}