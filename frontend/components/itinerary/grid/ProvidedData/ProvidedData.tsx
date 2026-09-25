import texts from "@/constants/texts";

import { MapPin, FlagTriangleRight, CalendarDays, Clock, Users, Banknote } from 'lucide-react'
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import formatDate from "@/utils/formatDate";
import DataCard from "./DataCard";

interface ProvidedDataProps {
    itinerary: ItineraryInterface[]
}

export default function ProvidedData({ itinerary }: ProvidedDataProps) {
    return (
        <div className="flex gap-2 justify-between mt-8 rounded-2xl px-2 py-4 bg-white">
            <DataCard icon={<MapPin />} title={texts.providedData.origin} text={itinerary[0].departure} />
            <DataCard icon={<FlagTriangleRight />} title={texts.providedData.destination} text={itinerary[0].destination} />
            <DataCard icon={<CalendarDays />} title={texts.providedData.departureDate} text={formatDate(itinerary[0].startDate)} />
            <DataCard icon={<Clock />} title={texts.days} text={`${itinerary[0].days.toString()} ${texts.days}`} />
            <DataCard icon={<Users />} title={texts.providedData.travelers} text={`${itinerary[0].travelers.toString()} ${texts.people}`} />
            <DataCard icon={<Banknote />} title={texts.providedData.budget} text={`${texts.real} ${itinerary[0].budgetTotal.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).toString()}`} />
        </div>
    )
}