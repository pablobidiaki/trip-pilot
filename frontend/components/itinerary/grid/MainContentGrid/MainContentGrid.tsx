import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import ItineraryBanner from "../ItineraryBanner/ItineraryBanner"
import ProvidedData from "../ProvidedData/ProvidedData"
import Accommodation from "../Accommodation/Accommodation"
import Tours from "../Tours/Tours"
import CostEstimate from "../CostEstimate/CostEstimate"
import Weather from "../Weather/Weather"
import Transport from "../Transport/Transport"
import Requirements from "../Requirements/Requirements"
import Tips from "../Tips/Tips"
import HowToGetThere from "../HowToGetThere/HowToGetThere"
import TipicalFoods from "../TipicalFoods/TipicalFoods"
import ItineraryDays from "../ItineraryDays/ItineraryDays"
import texts from "@/constants/texts"

interface MainContentGridProps{
    itinerary: ItineraryInterface[]
}

export default function MainContentGrid({itinerary}: MainContentGridProps){
    return (
        <div className="mx-2 mt-2 animate-[optionSelector_300ms_ease-out]">
            <ItineraryBanner />
            <div className="relative">
                <ProvidedData itinerary={itinerary} />
            </div>
            <div className="flex flex-col gap-5 relative
                xl:flex-row
            ">
                <Accommodation accommodations={itinerary[0].itinerary.accommodations} />
                <CostEstimate itinerary={itinerary} />
            </div>

            <div className="flex flex-col justify-center gap-5 
                xl:flex-row xl:mx-2
            ">
                <Tours tours={itinerary[0].itinerary.tours} />
                <TipicalFoods tipicalFoods={itinerary[0].itinerary.tipicalFood} />
            </div>

            <div className="flex flex-col justify-center gap-5
                xl:flex-row
            ">
                <Requirements requirements={itinerary[0].itinerary.requirements} />
                <Tips tips={itinerary[0].itinerary.tips} />
            </div>

            <div className="flex flex-col justify-center gap-5 w-full
                xl:flex-row
            ">
                <HowToGetThere tickets={itinerary[0].itinerary.ticket}
                    originCountry={itinerary[0].countryOrigin}
                    originFlag={itinerary[0].countryOriginFlagURL}
                    destinationCountry={itinerary[0].countryDestination}
                    destinationFlag={itinerary[0].countryDestinationFlagURL}
                />
                <div className="flex flex-col justify-between
                    xl:w-[35%]
                ">
                    <Weather weather={itinerary[0].itinerary.weather} />
                    <Transport transports={itinerary[0].itinerary.transportation} />
                </div>
            </div>

            <ItineraryDays itineraryDays={itinerary[0].itinerary.dayToDay} />

            <p className="w-fit mx-auto text-center mt-5 px-3 py-2 bg-yellow-100 text-primary-color font-medium rounded-2xl"> {texts.aiWarning}</p>
            <p className="text-center mt-2 text-second-color">{texts.goodTravel}</p>
        </div>
    )
}