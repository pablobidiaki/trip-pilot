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
    itinerary: ItineraryInterface
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
                <Accommodation accommodations={itinerary.itinerary.accommodations} />
                <CostEstimate itinerary={itinerary} />
            </div>

            <div className="flex flex-col justify-center gap-5 
                xl:flex-row xl:mx-2
            ">
                <Tours tours={itinerary.itinerary.tours} />
                <TipicalFoods tipicalFoods={itinerary.itinerary.tipicalFood} />
            </div>

            <div className="flex flex-col justify-center gap-5
                xl:flex-row
            ">
                <Requirements requirements={itinerary.itinerary.requirements} />
                <Tips tips={itinerary.itinerary.tips} />
            </div>

            <div className="flex flex-col justify-center gap-5 w-full
                xl:flex-row
            ">
                <HowToGetThere tickets={itinerary.itinerary.ticket}
                    originCountry={itinerary.countryOrigin}
                    originFlag={itinerary.countryOriginFlagURL}
                    destinationCountry={itinerary.countryDestination}
                    destinationFlag={itinerary.countryDestinationFlagURL}
                />
                <div className="flex flex-col justify-between
                    xl:w-[35%]
                ">
                    <Weather weather={itinerary.itinerary.weather} />
                    <Transport transports={itinerary.itinerary.transportation} />
                </div>
            </div>

            <ItineraryDays itineraryDays={itinerary.itinerary.dayToDay} />

            <p className="w-fit mx-auto text-center mt-5 px-3 py-2 bg-yellow-100 text-primary-color font-medium rounded-2xl"> {texts.aiWarning}</p>
            <p className="text-center mt-2 text-secondary-color">{texts.goodTravel}</p>
        </div>
    )
}