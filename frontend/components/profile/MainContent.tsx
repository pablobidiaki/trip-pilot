"use client"

import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import InitialPage from "./InitialPage/InitialPage"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import texts from "@/constants/texts"
import MyItineraries from "./MyItineraries/MyItineraries"
import SavedDestinations from "./SavedDestinations/SavedDestinations"
import SavedReadyGuides from "./SavedReadyGuides/SavedReadyGuides"

interface MainContentProps {
    session: any
    itineraries: ItineraryInterface[]
    savedDestinations: SavedDestinationInterface[]
    savedReadyGuides: SavedReadyGuideInterface[]
    optionSelected: string
    setOptionSelected: (text: string) => void
}

export default function MainContent({ session, itineraries, savedDestinations , savedReadyGuides, optionSelected, setOptionSelected }: MainContentProps) {
    return(
        <div className="w-full mx-4 bg-white rounded-2xl">
            {optionSelected === texts.optionSelectorProfile.home && <InitialPage session={session} itineraries={itineraries} savedDestinations={savedDestinations} savedReadyGuides={savedReadyGuides} setOptionSelected={setOptionSelected}/>}
            {optionSelected === texts.optionSelectorProfile.myItineraries && <MyItineraries itineraries={itineraries} />}
            {optionSelected === texts.optionSelectorProfile.destinationsSaved && <SavedDestinations destinations={savedDestinations}/>}
            {optionSelected === texts.optionSelectorProfile.guidesSaved && <SavedReadyGuides guides={savedReadyGuides}/>}
        </div>
    )
}
