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

export default function Accommodation({ itinerary }: MainContentTabsProps) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className="grid grid-cols-1 mx-auto gap-5 animate-[optionSelector_300ms_ease-out]
            xl:grid-cols-2
            2xl:grid-cols-3
        ">
            {itinerary[0].itinerary.accommodations.map((accommodation, index) => (
                <div key={index} className="w-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mb-5
                    lg:flex
                    xl:flex-col
                ">
                    <div className="relative ">
                        {isLoading &&
                            <div className="absolute w-full h-75 rounded-t-2xl bg-gray-100
                                lg:h-full
                                
                            ">
                                <Loading />
                            </div>
                        }
                        <iframe
                            className="w-full h-75 rounded-t-2xl
                                lg:h-full
                                
                            "
                            loading="lazy"
                            src={accommodation.googleMapsEmbed}
                            onLoad={() => setIsLoading(false)}
                        >
                        </iframe>
                    </div>
                    <div className="relative bg-white w-full
                        
                    ">
                        <h1 className="text-4xl pt-2 text-center">{accommodation.name}</h1>
                        <div className="w-fit mx-auto">
                            <ReviewBar rating={accommodation.rating}
                                reviews={accommodation.reviewsCount}
                            />
                        </div>
                        <div className="px-5 mt-4 space-y-3
                            lg:w-fit lg:mx-auto
                            2xl:w-full
                        ">
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
                            <p className="rounded-2xl mb-2 p-2 bg-green-200 w-fit mx-auto font-medium text-primary-color mt-5">{texts.accommodations.averagePricePerPerson}
                                <span className="text-green-700 font-semibold"> {texts.real} {accommodation.costEstimate.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}