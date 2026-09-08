import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import texts from "@/constants/texts"
import Accommodation from "../Accommodations/Accommodations"
import ProviedData from "../ProvidedData/ProviedData"
import Tours from "../Tours/Tours"
import CostEstimate from "../CostEstimate/CostEstimate"

interface MainContentTabsProps {
    itinerary: ItineraryInterface[]
    optionSelected: string
}

export default function MainContentTabs({ itinerary, optionSelected }: MainContentTabsProps) {
    return (
        <div className="mt-1 mx-4 w-full h-full">
            {optionSelected === texts.tabsOptions.provided_data && <ProviedData itinerary={itinerary}/>}
            {optionSelected === texts.tabsOptions.accommodations && <Accommodation itinerary={itinerary}/>}
            {optionSelected === texts.tabsOptions.tours && <Tours tours={itinerary[0].itinerary.tours}/>}
            {optionSelected === texts.tabsOptions.cost_estimate && <CostEstimate costs={itinerary[0].itinerary.costEstimate} budgetTotal={itinerary[0].budgetTotal} />}
        </div>
    )
}