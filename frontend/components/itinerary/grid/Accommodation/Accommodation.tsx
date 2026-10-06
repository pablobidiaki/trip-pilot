"use client"

import texts from "@/constants/texts";
import InfoRow from "../InfoRow/InfoRow";
import { MapPin, Package, BedDouble, ChevronLeft, ChevronRight, Hotel } from "lucide-react";
import { AccommodationsInterface } from "@/interfaces/itinerary.interface";
import { useState } from "react";
import ReviewBar from "@/components/ui/ReviewBar/ReviewBar";
import Loading from "@/components/loading/Loading/Loading";

interface AccommodationProps {
    accommodations: AccommodationsInterface[]
}

export default function Accommodation({ accommodations }: AccommodationProps) {
    const [option, setOption] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const plusButtonClicked = () => {
        option == 2 ? setOption(0) : setOption(option + 1)
        setIsLoading(true)
    }

    const minusButtonClicked = () => {
        option == 0 ? setOption(2) : setOption(option - 1)
        setIsLoading(true)
    }

    return (
        <div className="border rounded-2xl border-gray-100 w-full mt-5 bg-white
            xl:max-2/3
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">1</span> {texts.itineraryTitles.accommodations}</h1>
            <div className="flex flex-col py-5 px-1
                lg:flex-row
            ">
                <ChevronLeft onClick={minusButtonClicked} size={30} className="text-orange-500 cursor-pointer p-1 my-auto mr-2 bg-orange-100 rounded-full shrink-0 hover:duration-200 hover:bg-orange-300 hover:scale-105 hidden
                    lg:block
                "/>
                <div className="relative w-full h-60
                    lg:w-75 lg:h-92 lg:mr-5
                ">
                    {isLoading &&
                        <div className="absolute rounded-2xl bg-gray-100 w-full h-60
                            lg:w-75 lg:h-92
                        ">
                            <Loading />
                        </div>
                    }
                    <iframe
                        className="rounded-2xl w-full h-60
                            lg:w-75 lg:h-92
                        "
                        loading="lazy"
                        src={accommodations[option].googleMapsEmbed}
                        onLoad={() => setIsLoading(false)}
                    >
                    </iframe>
                </div>

                <div className="w-full flex flex-col justify-between">
                    <h1 className="text-primary-color text-2xl font-medium">{accommodations[option].name}</h1>

                    <ReviewBar rating={accommodations[option].rating}
                        reviews={accommodations[option].reviewsCount}
                    />

                    <InfoRow icon={<MapPin size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg" />} information={texts.accommodations.address} value={accommodations[option].address} tailwindTags="mt-8 items-center text-xs gap-5 xl:text-lg" />
                    <hr className="text-gray-300 my-3" />

                    <InfoRow icon={<Package size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg" />} information={texts.accommodations.include} value={accommodations[option].includes} tailwindTags="text-xs gap-5 xl:text-lg"/>
                    <hr className=" text-gray-300 my-3" />

                    <InfoRow icon={<BedDouble size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg" />} information={texts.accommodations.roomType} value={accommodations[option].roomType} tailwindTags="text-xs gap-5 xl:text-lg"/>
                    <hr className=" text-gray-300 my-3" />

                    <div className="flex gap-2 items-center justify-between">
                        <p className="font-medium">{texts.accommodations.costEstimate}</p>
                        <span className="text-green-500 text-sm p-2 bg-green-100 rounded-xl font-medium">{texts.real} {accommodations[option].costEstimate.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                        </span>
                    </div>
                </div>

                <ChevronRight onClick={plusButtonClicked} size={30} className="text-orange-500 cursor-pointer p-1 my-auto ml-2 bg-orange-100 rounded-full shrink-0 hover:duration-200 hover:bg-orange-300 hover:scale-105 hidden
                    lg:block
                "/>
            </div>

            <div className="w-fit mx-auto flex gap-8 pb-5">
                <ChevronLeft onClick={minusButtonClicked} size={30} className="text-orange-500 cursor-pointer p-1  my-auto ml-2 bg-orange-100 rounded-full shrink-0 hover:duration-200 hover:bg-orange-300 hover:scale-105
                    lg:hidden
                " />
                <ChevronRight onClick={plusButtonClicked} size={30} className="text-orange-500 cursor-pointer p-1  my-auto ml-2 bg-orange-100 rounded-full shrink-0 hover:duration-200 hover:bg-orange-300 hover:scale-105
                    lg:hidden
                " />
            </div>
        </div>
    )
}