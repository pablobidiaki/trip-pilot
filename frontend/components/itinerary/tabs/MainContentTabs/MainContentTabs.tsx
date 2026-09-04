import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import texts from "@/constants/texts"
import Accommodation from "../Accommodations/Accommodations"
import ProviedData from "../ProvidedData/ProviedData"

interface MainContentTabsProps {
    itinerary: ItineraryInterface[]
    optionSelected: string
}

export default function MainContentTabs({ itinerary, optionSelected }: MainContentTabsProps) {
    return (
        <div className="mt-1 mx-4 w-full h-full">
            {optionSelected === texts.tabsOptions.provided_data && <ProviedData itinerary={itinerary}/>}
            {optionSelected === texts.tabsOptions.accommodations && <Accommodation itinerary={itinerary}/>}
        </div>
    )
}