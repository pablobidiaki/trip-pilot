"use client"

import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import Loading from "@/components/loading/Loading/Loading"
import { useState } from "react"
import ReviewBar from "@/components/ui/ReviewBar/ReviewBar"
import InfoRow from "../../tabs/InfoRow/InfoRow"
import { BedDouble, MapPin, Package } from "lucide-react"
import texts from "@/constants/texts"

interface MainContentTabsProps {
    itinerary: ItineraryInterface[]
}

export default function Accommodation({ itinerary}: MainContentTabsProps) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className="grid grid-cols-3 mt-1 mx-auto gap-5">
            {itinerary[0].itinerary.accommodations.map((accommodation, index) => (
                <div className="w-125 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" key={index}>
                    <div className="relative ">
                        {isLoading &&
                            <div className="absolute w-125 h-75 rounded-t-2xl bg-gray-100">
                                <Loading />
                            </div>
                        }
                        <iframe
                            className="w-125 h-75 rounded-t-2xl"
                            loading="lazy"
                            src={accommodation.googleMapsEmbed}
                            onLoad={() => setIsLoading(false)}
                        >
                        </iframe>
                    </div>
                    <div className="relative bg-white max-w-125 ">
                        <h1 className="text-4xl pt-2 text-center">{accommodation.name}</h1>
                        <div className="w-fit mx-auto">
                            <ReviewBar rating={accommodation.rating}
                                reviews={accommodation.reviewsCount}
                            />
                        </div>
                        <div className="px-5 pb-5 mt-4 space-y-3">
                            <InfoRow icon={<MapPin size={20} />}
                                label={texts.accommodations.address}
                                value={accommodation.address}
                            />

                            <InfoRow icon={<Package size={20} />}
                                label={texts.accommodations.include}
                                value={accommodation.includes}
                            />

                            <InfoRow icon={<BedDouble size={20} />}
                                label={texts.accommodations.roomType}
                                value={accommodation.roomType}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}