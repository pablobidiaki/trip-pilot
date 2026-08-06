import texts from "@/constants/texts";

import { MapPin, FlagTriangleRight, CalendarDays, Clock, Users, Banknote } from 'lucide-react'
import InfoRow from "../infoRow/InfoRow";

export default function ProvidedData(){
    return(
        <div className="mx-4 border rounded-2xl border-gray-300 max-w-1/5 mt-8">
            <h1 className="bg-blue-100 rounded-t-2xl py-1 px-2 font-medium text-xl text-primary-color">{texts.itinerary_titles.provided_data}</h1>
            <InfoRow icon={<MapPin />} information={texts.provided_data.origin} value="São Paulo, SP"/>
            <InfoRow icon={<FlagTriangleRight />} information={texts.provided_data.destination} value="Gramado, RS"/>
            <InfoRow icon={<CalendarDays />} information={texts.provided_data.departure_date} value="10/08/2027"/>
            <InfoRow icon={<Clock />} information={texts.provided_data.duration_days} value="5 dias"/>
            <InfoRow icon={<Users />} information={texts.provided_data.travelers} value="2 pessoas"/>
            <InfoRow icon={<Banknote />} information={texts.provided_data.budget} value="R$ 3.000,00"/>
        </div>
    )
}