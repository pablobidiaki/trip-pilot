"use client"

import texts from "@/constants/texts";
import InfoRow from "../InfoRow/InfoRow";
import CardTitle from "../CardTitle/CardTitle";
import { MapPin, Package, Bed, BedDouble, ChevronLeft, ChevronRight } from "lucide-react";
import { AccommodationsInterface } from "@/interfaces/itinerary.interface";
import { useState } from "react";
import ReviewBar from "@/components/ui/ReviewBar/ReviewBar";

interface AccommodationProps {
    accommodations: AccommodationsInterface[]
}

export default function Accommodation({ accommodations }: AccommodationProps) {
    console.log(accommodations)
    const [option, setOption] = useState(0)

    const plusButtonClicked = () => option == 2 ? setOption(0) : setOption(option + 1)
    const minusButtonClicked = () => option == 0 ? setOption(2) : setOption(option - 1)

    return (
        <div className="mx-2 border rounded-2xl border-gray-300 min-w-4/7 mt-8 bg-white">
            <CardTitle icon={<Bed />} title={texts.itinerary_titles.accommodations} />
            <div className="flex py-5 px-1">
                <ChevronLeft onClick={minusButtonClicked} size={30} className=" cursor-pointer p-1 my-auto mr-2 bg-blue-100 rounded-full shrink-0 hover:duration-200 hover:bg-blue-300 hover:text-white hover:scale-110" />

                <img key={option}
                    src={accommodations[option].imageURL}
                    alt="hotel image"
                    className="w-75 h-75 object-cover rounded-2xl mr-5"
                />
                <div className="w-full flex-col justify-between">
                    <h1 className="text-primary-color text-2xl font-medium mb-3">{accommodations[option].name}</h1>
                    
                    <ReviewBar rating={accommodations[option].rating} 
                               reviews={accommodations[option].reviewCount}
                    />

                    <InfoRow icon={<MapPin />} information={texts.accommodations.address} value={accommodations[option].address} tailwindTags="mt-5" />
                    <hr className="mx-2 text-gray-300 my-3" />

                    <InfoRow icon={<Package />} information={texts.accommodations.include} value={accommodations[option].includes} />
                    <hr className="mx-2 text-gray-300 my-3" />

                    <div className="flex gap-2 mt-3">
                        <BedDouble className="text-blue-600" />
                        <p className=" text-second-color">{accommodations[option].roomType}</p>
                    </div>

                    <div className="bg-blue-100 p-2 rounded-2xl mt-8">
                        <p className="font-medium text-blue-900">{texts.accommodations.cost_estimate} <span className="text-primary-color font-medium">{texts.real} {accommodations[option].costEstimate}</span></p>
                    </div>
                </div>

                <ChevronRight onClick={plusButtonClicked} size={30} className=" cursor-pointer p-1  my-auto ml-2 bg-blue-100 rounded-full shrink-0 hover:duration-200 hover:bg-blue-300 hover:text-white hover:scale-110" />
            </div>
        </div>
    )
}