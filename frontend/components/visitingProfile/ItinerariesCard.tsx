import texts from "@/constants/texts"
import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import Link from "next/link"

interface ItinerariesCardProps {
    itinerary: ItineraryInterface
}

export default function ItinerariesCard({ itinerary }: ItinerariesCardProps) {
    return (
        <Link href={`/itinerary/${itinerary.id}`} className="cursor-pointer relative w-full min-w-90 max-w-90 min-h-90 max-h-90 overflow-hidden rounded-lg
            lg:min-w-120 lg:max-w-120
            3xl:min-w-140 3xl:max-w-140
        ">
            <img className="absolute inset-0 w-full h-full object-cover brightness-30" src={itinerary.itinerary.tours[0].imageURL} />
            <img className="absolute top-2 right-2 max-w-10" src={itinerary.countryDestinationFlagURL} />
            <p className="absolute top-2 left-2 border border-gray-300 text-gray-300 px-2 rounded-xl">{texts.visitingProfile.publicItinerary}</p>

            <div className=" absolute inset-x-0 bottom-0 flex flex-col gap-3 p-2">
                <div>
                    <p className="text-sm font-medium text-white/70">
                        {texts.visitingProfile.itinerary}
                    </p>

                    <h3 className="text-2xl font-semibold text-white">
                        {itinerary.destination}
                    </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <p className="rounded-lg border border-grey-300 px-2 py-1 text-sm text-white">
                        {itinerary.travelType}
                    </p>

                    <p className="rounded-lg border border-grey-300 px-2 py-1 text-sm text-white">
                        {itinerary.days} {texts.days}
                    </p>
                </div>
            </div>
        </Link>
    )
}