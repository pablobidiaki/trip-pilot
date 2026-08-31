import texts from "@/constants/texts";

import { FileText, MapPin, FlagTriangleRight, CalendarDays, Clock, Users, Banknote } from 'lucide-react'
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
            <CardTitle icon={<FileText />} title={texts.itinerary_titles.provided_data} />
            <InfoRow icon={<MapPin />} information={texts.provided_data.origin} value={itinerary[0].departure} tailwindTags="px-2 py-3" />
            <InfoRow icon={<FlagTriangleRight />} information={texts.provided_data.destination} value={itinerary[0].destination} tailwindTags="px-2 py-3" />
            <InfoRow icon={<CalendarDays />} information={texts.provided_data.departure_date} value={formatDate(itinerary[0].departureDate)} tailwindTags="px-2 py-3" />
            <InfoRow icon={<Clock />} information={texts.provided_data.duration_days} value={`${itinerary[0].days.toString()} ${texts.days}`} tailwindTags="px-2 py-3" />
            <InfoRow icon={<Users />} information={texts.provided_data.travelers} value={`${itinerary[0].travelers.toString()} ${texts.people}`} tailwindTags="px-2 py-3" />
            <InfoRow icon={<Banknote />} information={texts.provided_data.budget} value={`${texts.real} ${itinerary[0].budgetTotal.toString()}`} tailwindTags="px-2 py-3" />
        </div>
    )
}