import texts from "@/constants/texts";

import { FileText, MapPin, FlagTriangleRight, CalendarDays, Clock, Users, Banknote } from 'lucide-react'
import InfoRow from "../InfoRow/InfoRow";
import CardTitle from "../CardTitle/CardTitle";

export default function ProvidedData(){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 min-w-1/5 mt-8">
            <CardTitle icon={<FileText />} title={texts.itinerary_titles.provided_data}/>
            <InfoRow icon={<MapPin />} information={texts.provided_data.origin} value="São Paulo, SP" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<FlagTriangleRight />} information={texts.provided_data.destination} value="Gramado, RS" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<CalendarDays />} information={texts.provided_data.departure_date} value="10/08/2027" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Clock />} information={texts.provided_data.duration_days} value="5 dias" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Users />} information={texts.provided_data.travelers} value="2 pessoas" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Banknote />} information={texts.provided_data.budget} value="R$ 3.000,00" tailwindTags="px-2 py-3"/>
        </div>
    )
}