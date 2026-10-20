import texts from "@/constants/texts";

import { MapPin, FlagTriangleRight, CalendarDays, Clock, Users, Banknote } from 'lucide-react'
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import formatDate from "@/utils/formatDate";
import DataCard from "./DataCard";

interface ProvidedDataProps {
    itinerary: ItineraryInterface
}

export default function ProvidedData({ itinerary }: ProvidedDataProps) {
    return (
        <div className="flex flex-col gap-2 justify-between mt-8 rounded-2xl px-2 py-4 bg-white border border-gray-100
            lg:grid lg:grid-cols-3
            2xl:grid-cols-6
        ">
            <DataCard icon={<MapPin />} title={texts.providedData.origin} text={itinerary.departure} />
            <DataCard icon={<FlagTriangleRight />} title={texts.providedData.destination} text={itinerary.destination} />
            <DataCard icon={<CalendarDays />} title={texts.providedData.departureDate} text={formatDate(itinerary.startDate)} />
            <DataCard icon={<Clock />} title={texts.days} text={`${itinerary.days.toString()} ${texts.days}`} />
            <DataCard icon={<Users />} title={texts.providedData.travelers} text={`${itinerary.travelers.toString()} ${texts.people}`} />
            <DataCard icon={<Banknote />} title={texts.providedData.budget} text={`${texts.real} ${itinerary.budgetTotal.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).toString()}`} />
        </div>
    )
}