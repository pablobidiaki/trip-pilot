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
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 mt-8">
            <CardTitle icon={<Calendar />} title={texts.itinerary_titles.itinerary} />
            <div className="grid grid-cols-5 gap-4 p-4">
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