"use client"

import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import InitialPage from "./InitialPage/InitialPage"

interface MainContentProps {
    session: any
    itineraries: ItineraryInterface[]
    savedDestinations: any
    savedReadyGuides: any
}

export default function MainContent({ session, itineraries, savedDestinations , savedReadyGuides }: MainContentProps) {
    return(
        <div className="w-full mx-4 bg-white rounded-2xl">
            <InitialPage session={session} itineraries={itineraries} savedDestinations={savedDestinations} savedReadyGuides={savedReadyGuides}/>
        </div>
    )
}
