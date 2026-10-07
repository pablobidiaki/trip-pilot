import texts from "@/constants/texts";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

interface YourItinerariesCardProps {
    itineraries: ItineraryInterface[]
}

export default function YourItinerariesCard({ itineraries }: YourItinerariesCardProps) {
    if (itineraries.length === 0) {
        return (
            <div className="flex items-center mx-5 py-5">
                <p className="text-second-color text-lg italic">{texts.profile.noneItineraryCreated}</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 py-2 gap-5 px-2
            md:grid-cols-2
            xl:grid-cols-4
        ">
            {itineraries.slice(0, 4).map((itinerary) => (
                <Link href={`/itinerary/${itinerary.id}`} className="relative bg-background-color border border-gray-100 rounded-xl transition-all hover:duration-200 hover:scale-101
                    xl:w-85
                " key={itinerary.id}>
                    <img className="absolute top-2 right-2 w-5 object-cover z-10
                        xl:w-8
                    " src={itinerary.countryDestinationFlagURL} alt={itinerary.countryDestination} />
                    <img className="object-cover brightness-50 rounded-t-xl w-full max-h-45 min-h-45
                        xl:w-85 xl:h-52
                    " src={itinerary.itinerary.tours[0].imageURL} alt={itinerary.itinerary.tours[0].name} />
                    <div>
                        <div className="flex items-center justify-between mt-1 mx-2 mb-2">
                            <p className="font-semibold text-gray-900 truncate">{itinerary.destination}</p>
                            <p className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{itinerary.travelType}</p>
                        </div>

                        <div className="space-y-2 text-xs text-second-color mx-2
                            md:text-sm
                        ">
                            <p><span>{formatDate(itinerary.startDate)}</span> - <span>{formatDate(itinerary.endDate)}</span></p>
                            <div className="flex gap-2">
                                <p>{itinerary.days} {texts.days}</p>
                                <p>·</p>
                                <p>{itinerary.travelers} {texts.people}</p>
                            </div>
                        </div>

                        <div className="mt-2 border-gray-100 pt-3 mx-2 mb-1">
                            <p className="text-sm font-bold text-gray-900
                                md:text-xl
                            ">{texts.real} {itinerary.budgetTotal.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}