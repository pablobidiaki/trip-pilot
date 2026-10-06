import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { Calendar } from "lucide-react";
import ItineraryDaysCard from "./ItineraryDaysCard";
import { DayToDayInterface } from "@/interfaces/itinerary.interface";

interface ItineraryDaysProps {
    itineraryDays: DayToDayInterface[]
}

export default function ItineraryDays({ itineraryDays }: ItineraryDaysProps) {
    return (
        <div className="bg-white border rounded-2xl border-gray-100 mt-8">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">10</span> {texts.itineraryTitles.itinerary}</h1>
            <p className="text-second-color italic mx-4">{texts.itinerary.tip}</p>
            <div className="grid grid-cols-1 gap-4 p-4
                lg:grid-cols-2 lg:gap-2 lg:gap-y-5
                xl:grid-cols-4
            ">
                {itineraryDays.map((day, index) => (
                    <ItineraryDaysCard key={index}
                        day={day.day}
                        title={day.title}
                        image={day.imageURL}
                        morning={day.morning}
                        afternoon={day.afternoon}
                        evening={day.night}
                        cost_estimate={day.dayCostEstimate}
                        hours={day.hours}
                    />
                ))}
            </div>
        </div>
    )
}