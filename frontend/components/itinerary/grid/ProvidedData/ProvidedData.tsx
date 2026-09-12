import texts from "@/constants/texts";

import { MapPin, FlagTriangleRight, CalendarDays, Clock, Users, Banknote, Info } from 'lucide-react'
import InfoRow from "../InfoRow/InfoRow";
import CardTitle from "../CardTitle/CardTitle";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";

interface ProvidedDataProps {
    itinerary: ItineraryInterface[]
}

function formatDate(date: string) {
    const [year, month, day] = date.split("-")
    return `${day}/${month}/${year}`
}

export default function ProvidedData({ itinerary }: ProvidedDataProps) {
    return (
        <div className="bg-white border rounded-2xl border-gray-300 min-w-1/3 max-w-1/3 mt-8">
            <CardTitle icon={<Info />} title={texts.itineraryTitles.providedData} />

            <InfoRow icon={<MapPin />}
                information={texts.providedData.origin}
                value={itinerary[0].departure}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<FlagTriangleRight />}
                information={texts.providedData.destination}
                value={itinerary[0].destination}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<CalendarDays />}
                information={texts.providedData.departureDate}
                value={formatDate(itinerary[0].startDate)}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<Clock />}
                information={texts.providedData.durationDays}
                value={`${itinerary[0].days.toString()} ${texts.days}`}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<Users />}
                information={texts.providedData.travelers}
                value={`${itinerary[0].travelers.toString()} ${texts.people}`} tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<Banknote />}
                information={texts.providedData.budget}
                value={`${texts.real} ${itinerary[0].budgetTotal.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).toString()}`}
                tailwindTags="px-2 py-3"
            />
        </div>
    )
}