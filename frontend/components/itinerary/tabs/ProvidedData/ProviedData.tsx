import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { CalendarDays, CircleDollarSign, Clock, MoveRight, Users } from "lucide-react";
import ProvidedDataCard from "./ProvidedDataCard";
import texts from "@/constants/texts";
import formatDate from "@/utils/formatDate";

interface ProviedDataProps {
    itinerary: ItineraryInterface[]
}

export default function ProviedData({ itinerary }: ProviedDataProps) {
    return (
        <div className="relative mt-5 animate-[optionSelector_300ms_ease-out]
            md:mt-0      
            xl:mx-auto
            2xl:w-full
        ">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300
                md:w-full
                xl:max-w-[80%] xl:mx-auto
                2xl:max-w-[55%]
            ">
                <h1 className="text-center text-xl p-2 pt-2 text-primary-color 
                    md:text-2xl
                    xl:text-4xl
                ">{texts.providedData.yourTravelTo} <span className="capitalize">{itinerary[0].destination}</span></h1>

                <div className="flex w-fit mx-auto gap-4 mt-5 items-center capitalize">
                    <p className="text-second-color text-lg
                        xl:text-2xl
                    ">{itinerary[0].departure}</p>
                    <MoveRight size={30} className="text-second-color" />
                    <p className="text-second-color text-lg
                        xl:text-2xl
                    ">{itinerary[0].destination}</p>
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
                <div className="grid grid-cols-2 items-center mx-2 gap-10 justify-center mt-10
                    lg:flex lg:justify-center
                ">
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
                <p className="mx-auto text-center text-second-color text-lg mt-15 px-2
                    xl:text-xl
                ">{texts.itinerary.proviededDataText}</p>
                <p className="mx-auto text-center text-second-color text-xs pb-5 italic px-2
                    xl:text-sm
                ">{texts.aiWarning}</p>
            </div>
        </div>
    )
}