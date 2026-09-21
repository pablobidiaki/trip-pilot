"use client"

import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import InitialPage from "./InitialPage/InitialPage"

interface MainContentProps {
    session: any
    itineraries: ItineraryInterface[]
}

export default function MainContent({ session, itineraries }: MainContentProps) {
    return(
        <div className="w-full mx-4 bg-white rounded-2xl">
            <InitialPage  session={session} itineraries={itineraries}/>
        </div>
    )
}
