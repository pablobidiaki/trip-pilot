import { DestinationInterface } from "@/interfaces/destination.interface";
import Attractions from "../Attractions/Attractions";
import DestinationInfos from "../DestinationInfos/DestinationInfos";
import { Calendar1, CalendarDays, Cloud, DollarSign, Languages, Plane } from "lucide-react";
import WhatToDo from "../WhatToDo/WhatToDo";
import UtilInformations from "../UtilInformations/UtilInformations";
import CostEstimate from "../CostEstimate/CostEstimate";
import texts from "@/constants/texts";

interface DestinationBodyProps {
    destination: DestinationInterface
}

export default function DestinationBody({ destination }: DestinationBodyProps) {
    return (
        <div>
            <div className="my-10 mx-2 grid grid-cols-2 gap-2
                md:grid-cols-3
                xl:grid-cols-6
            ">
                <DestinationInfos  icon={<Calendar1 size={35} className=""/>} title={texts.destination.bestTime} description={destination.bestTime}/>
                <DestinationInfos  icon={<Cloud size={35} className=""/>} title={texts.destination.weather} description={destination.weather}/>
                <DestinationInfos  icon={<Plane size={35} className=""/>} title={texts.destination.travelType} description={destination.travelType}/>
                <DestinationInfos  icon={<CalendarDays size={35} className=""/>} title={texts.destination.recommendedDays} description={`${destination.dayReccomended.toString()} ${texts.days}`}/>
                <DestinationInfos  icon={<DollarSign size={35} className=""/>} title={texts.destination.currency} description={destination.currenty}/>
                <DestinationInfos  icon={<Languages size={35} className=""/>} title={texts.destination.language} description={destination.language}/>
            </div>
            <Attractions destination={destination}/>
            <WhatToDo destination={destination} />
            <div className="flex flex-col justify-between
                xl:flex-row
            ">
                <UtilInformations destination={destination}/>
                <CostEstimate destination={destination} />
            </div> 
        </div>
    )
}