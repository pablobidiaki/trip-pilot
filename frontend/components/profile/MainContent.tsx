"use client"

import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import InitialPage from "./InitialPage/InitialPage"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import texts from "@/constants/texts"

interface MainContentProps {
    session: any
    itineraries: ItineraryInterface[]
    savedDestinations: SavedDestinationInterface[]
    savedReadyGuides: SavedReadyGuideInterface[]
    optionSelected: string
}

export default function MainContent({ session, itineraries, savedDestinations , savedReadyGuides, optionSelected }: MainContentProps) {
    return(
        <div className="w-full mx-4 bg-white rounded-2xl">
            {optionSelected === texts.optionSelectorProfile.home && <InitialPage session={session} itineraries={itineraries} savedDestinations={savedDestinations} savedReadyGuides={savedReadyGuides}/>}
        </div>
    )
}
