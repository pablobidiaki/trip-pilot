import texts from "@/constants/texts";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

interface YourItinerariesCardProps {
    itineraries: ItineraryInterface[]
}

export default function YourItinerariesCard({ itineraries }: YourItinerariesCardProps) {
    return (
        <div className="flex gap-5 overflow-x-auto py-2 px-5">
            {itineraries.map((itinerary) => (
                <Link href={`/itinerary/${itinerary.id}`} className="relative bg-background-color border rounded-2xl transition-all hover:duration-200 hover:scale-103" key={itinerary.id}>
                    <img className="absolute top-2 right-2 w-8 object-cover z-10" src={itinerary.countryDestinationFlagURL} alt={itinerary.countryDestination} />
                    <img className="w-75 h-52 object-cover brightness-50 rounded-t-2xl" src={itinerary.itinerary.tours[0].imageURL} alt={itinerary.itinerary.tours[0].name} />
                    <div>
                        <div className="flex items-center justify-between mt-1 mx-2 mb-2">
                            <p className="text-lg font-semibold text-gray-900">{itinerary.destination}</p>
                            <p className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{itinerary.travelType}</p>
                        </div>

                        <div className="space-y-2 text-sm text-second-color mx-2">
                            <p><span>{formatDate(itinerary.startDate)}</span> - <span>{formatDate(itinerary.endDate)}</span></p>
                            <div className="flex gap-2">
                                <p>{itinerary.days} {texts.days}</p>
                                <p>·</p>
                                <p>{itinerary.travelers} {texts.people}</p>
                            </div>
                        </div>

                        <div className="mt-2 border-gray-100 pt-3 mx-2 mb-1">
                            <p className="text-xl font-bold text-gray-900">{texts.real} {itinerary.budgetTotal.toLocaleString("pt-BR", {
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