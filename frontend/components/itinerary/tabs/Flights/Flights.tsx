import texts from "@/constants/texts"
import { Tickets } from "@/interfaces/itinerary.interface"
import { Plane } from "lucide-react"
import FlightsTimeLine from "./FlightsTimeLine"

interface FlightsProps {
    tickets: Tickets[]
    countryDestinationFlag: string
    countryOriginFlag: string
    countryDestinationName: string
    countryOriginName: string
}

export default function Flights({ tickets, countryDestinationFlag, countryOriginFlag, countryDestinationName, countryOriginName }: FlightsProps) {
    return (
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div className="bg-white max-w-[75%] mx-auto rounded-2xl pb-5">
                <h1 className="text-primary-color text-2xl font-medium text-center pt-2">{texts.flights.title}</h1>
                <div className="flex justify-center gap-25 mt-5">
                    <div className="flex flex-col items-center">
                        <p className="text-primary-color">{texts.how_to_get_there.boarding}</p>
                        <img src={countryOriginFlag} className="max-w-30 shadow-2xl shadow-gray-300" />
                        <p className="text-second-color">{countryOriginName}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-primary-color">{texts.how_to_get_there.disembarkation}</p>
                        <img src={countryDestinationFlag} className="max-w-30 shadow-2xl shadow-gray-300" />
                        <p className="text-second-color">{countryDestinationName}</p>
                    </div>
                </div>
                <div className="flex justify-evenly gap-10 mt-5">
                    <div className="border border-gray-200 rounded-2xl shadow-2xl shadow-gray-300">
                        <p className="text-center text-2xl text-primary-color p-1">{texts.how_to_get_there.go}</p>
                        <hr/>
                        {tickets.map((ticket, index) => (
                            ticket.isGoing && <FlightsTimeLine key={index} index={index+1} boardingPoint={ticket.boardingPoint} disembarkationPoint={ticket.disembarkationPoint} flyTime={ticket.flyTime} />
                        ))}
                    </div>
                    <div className="border border-gray-200 rounded-2xl shadow-2xl shadow-gray-300">
                        <p className="text-center text-2xl text-primary-color p-1">{texts.how_to_get_there.return}</p>
                        <hr/>
                        {tickets.map((ticket, index) => (
                            !ticket.isGoing && <FlightsTimeLine key={index} index={index+1} boardingPoint={ticket.boardingPoint} disembarkationPoint={ticket.disembarkationPoint} flyTime={ticket.flyTime} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}