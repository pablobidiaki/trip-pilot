import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import texts from "@/constants/texts"
import Accommodation from "../Accommodations/Accommodations"
import ProviedData from "../ProvidedData/ProviedData"
import Tours from "../Tours/Tours"
import CostEstimate from "../CostEstimate/CostEstimate"
import Weather from "../Weather/Weather"
import Transportation from "../Transportation/Transportation"
import Requirements from "../Requirements/Requirements"
import Tips from "../Tips/Tips"
import Flights from "../Flights/Flights"
import TipicalFoods from "../TipicalFoods/TipicalFoods"
import DayToDay from "../DayToDay/DayToDay"

interface MainContentTabsProps {
    itinerary: ItineraryInterface
    optionSelected: string
}

export default function MainContentTabs({ itinerary, optionSelected }: MainContentTabsProps) {
    return (
        <div className="mt-1 mx-2 h-full animate-[optionSelector_300ms_ease-out]">
            {optionSelected === texts.tabsOptions.providedData && <ProviedData itinerary={itinerary} />}
            {optionSelected === texts.tabsOptions.accommodations && <Accommodation itinerary={itinerary} />}
            {optionSelected === texts.tabsOptions.tours && <Tours tours={itinerary.itinerary.tours} />}
            {optionSelected === texts.tabsOptions.costEstimate && <CostEstimate costs={itinerary.itinerary.costEstimate} budgetTotal={itinerary.budgetTotal} />}
            {optionSelected === texts.tabsOptions.weather && <Weather weather={itinerary.itinerary.weather} />}
            {optionSelected === texts.tabsOptions.transportation && <Transportation transports={itinerary.itinerary.transportation} />}
            {optionSelected === texts.tabsOptions.requirements && <Requirements requirements={itinerary.itinerary.requirements} />}
            {optionSelected === texts.tabsOptions.tips && <Tips tips={itinerary.itinerary.tips} />}
            {optionSelected === texts.tabsOptions.flights && <Flights tickets={itinerary.itinerary.ticket}
                countryDestinationFlag={itinerary.countryDestinationFlagURL}
                countryOriginFlag={itinerary.countryOriginFlagURL}
                countryDestinationName={itinerary.countryDestination}
                countryOriginName={itinerary.countryOrigin}
            />}
            {optionSelected === texts.tabsOptions.tipicalFoods && <TipicalFoods tipicalFoods={itinerary.itinerary.tipicalFood} />}
            {optionSelected === texts.tabsOptions.itinerary && <DayToDay itinerary={itinerary.itinerary.dayToDay} />}
        </div>
    )
}