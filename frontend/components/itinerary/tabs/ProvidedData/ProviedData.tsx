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
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div className="bg-white rounded-2xl max-w-[60%] mx-auto shadow-2xl shadow-gray-300">
                <h1 className="text-center text-4xl p-2 pt-2 text-primary-color ">{texts.providedData.yourTravelTo} <span className="capitalize">{itinerary[0].destination}</span></h1>

                <div className="flex w-fit mx-auto gap-4 mt-5 items-center capitalize">
                    <p className="text-second-color text-2xl">{itinerary[0].departure}</p>
                    <MoveRight size={40} className="text-second-color" />
                    <p className="text-second-color text-2xl">{itinerary[0].destination}</p>
                </div>
                <div className="flex justify-center gap-15 mt-5">
                    <img src={itinerary[0].countryOriginFlagURL} className="w-20 shadow-2xl shadow-gray-500" />
                    <img src={itinerary[0].countryDestinationFlagURL} className="w-20 shadow-2xl shadow-gray-500" />
                </div>
                <div className="flex w-fit mx-auto gap-4 items-center mt-5">
                    <p className="text-second-color">{formatDate(itinerary[0].startDate)}</p>
                    <p className="text-second-color text-xl">•</p>
                    <p className="text-second-color">{formatDate(itinerary[0].endDate)}</p>
                </div>
                <p className="text-center text-second-color">{itinerary[0].days} {texts.days}</p>
                <div className="flex justify-center gap-10 mt-10">
                    <ProvidedDataCard icon={<CalendarDays />}
                        title={texts.providedData.date}
                        value={formatDate(itinerary[0].startDate)}
                    />

                    <ProvidedDataCard icon={<Clock />}
                        title={texts.days}
                        value={itinerary[0].days.toString()}
                    />

                    <ProvidedDataCard icon={<Users />}
                        title={texts.providedData.travelersTab}
                        value={`${itinerary[0].travelers.toString()} ${texts.people}`}
                    />

                    <ProvidedDataCard icon={<CircleDollarSign />}
                        title={texts.providedData.budgetTab}
                        value={`${texts.real} ${itinerary[0].budgetTotal.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).toString()}`}
                    />
                </div>
                <p className="mx-auto text-center text-second-color text-xl mt-15">Seu roteiro está pronto! Explore as abas ao lado para conferir todos os detalhes.</p>
                <p className="mx-auto text-center text-second-color text-sm pb-5 italic">{texts.aiWarning}</p>
            </div>
        </div>
    )
}