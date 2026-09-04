import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import texts from "@/constants/texts"
import Accommodation from "../Accommodations/Accommodations"

interface MainContentTabsProps {
    itinerary: ItineraryInterface[]
    optionSelected: string
}

export default function MainContentTabs({ itinerary, optionSelected }: MainContentTabsProps) {
    return (
        <div className=" mx-4 w-full h-full">
            {optionSelected === texts.tabsOptions.accommodations && <Accommodation itinerary={itinerary}/>}
        </div>
    )
}