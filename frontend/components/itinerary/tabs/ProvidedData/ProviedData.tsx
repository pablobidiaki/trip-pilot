import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { CalendarDays, CircleDollarSign, Clock, MoveRight, Users } from "lucide-react";
import ProvidedDataCard from "./ProvidedDataCard";
import texts from "@/constants/texts";

interface ProviedDataProps {
    itinerary: ItineraryInterface[]
}

export default function ProviedData({ itinerary }: ProviedDataProps) {

    function formatDate(date: string) {
        const [year, month, day] = date.split("-")
        return `${day}/${month}/${year}`
    }
    return (
        <div className="relative ">
            <div className="bg-white rounded-2xl max-w-[60%] mx-auto shadow-2xl shadow-gray-300">
                <h1 className="text-center text-4xl p-2 pt-5 text-primary-color">Sua viagem para: {itinerary[0].destination}</h1>

                <div className="flex w-fit mx-auto gap-4 mt-5 items-center">
                    <p className="text-second-color text-2xl">{itinerary[0].departure}</p>
                    <MoveRight size={40} className="text-second-color" />
                    <p className="text-second-color text-2xl">{itinerary[0].destination}</p>
                </div>
                <div className="flex w-fit mx-auto gap-4 items-center">
                    <p className="text-second-color">{formatDate(itinerary[0].startDate)}</p>
                    <p className="text-second-color text-xl">•</p>
                    <p className="text-second-color">{formatDate(itinerary[0].endDate)}</p>
                </div>
                <div className="flex justify-center gap-10 mt-15">
                    <ProvidedDataCard icon={<CalendarDays />} title={texts.provided_data.date} value={formatDate(itinerary[0].startDate)} />
                    <ProvidedDataCard icon={<Clock />} title={texts.provided_data.days} value={itinerary[0].days.toString()} />
                    <ProvidedDataCard icon={<Users />} title={texts.provided_data.travelers} value={`${itinerary[0].travelers.toString()} ${texts.people}`} />
                </div>
                
                <div className="flex justify-center mt-5">
                    <ProvidedDataCard icon={<CircleDollarSign />} title={texts.provided_data.budget_tab} value={`${texts.real} ${itinerary[0].budgetTotal.toString()}`} />
                </div>
                <p className="mx-auto text-center text-second-color text-xl mt-20">Seu roteiro está pronto! Explore as abas ao lado para conferir todos os detalhes.</p>
                <p className="mx-auto text-center text-second-color text-sm pb-5 italic">{texts.ai_warning}</p>
            </div>
        </div>
    )
}