import { DestinationInterface } from "@/interfaces/destination.interface";
import Attractions from "../Attractions/Attractions";
import DestinationInfos from "../DestinationInfos/DestinationInfos";
import { Calendar1, CalendarDays, Cloud, DollarSign, Languages, Plane } from "lucide-react";
import WhatToDo from "../WhatToDo/WhatToDo";
import UtilInformations from "../UtilInformations/UtilInformations";
import CostEstimate from "../CostEstimate/CostEstimate";
import texts from "@/constants/texts";

interface DestinationBodyProps {
    destination: DestinationInterface[]
}

export default function DestinationBody({ destination }: DestinationBodyProps) {
    return (
        <div>
            <div className="my-10 mx-4 grid grid-cols-6 gap-20 ">
                <DestinationInfos  icon={<Calendar1 size={35} className=""/>} title={texts.destination.best_time} description={destination[0].bestTime}/>
                <DestinationInfos  icon={<Cloud size={35} className=""/>} title={texts.destination.weather} description={destination[0].weather}/>
                <DestinationInfos  icon={<Plane size={35} className=""/>} title={texts.destination.travel_type} description={destination[0].travelType}/>
                <DestinationInfos  icon={<CalendarDays size={35} className=""/>} title={texts.destination.recommended_days} description={`${destination[0].dayReccomended.toString()} ${texts.days}`}/>
                <DestinationInfos  icon={<DollarSign size={35} className=""/>} title={texts.destination.currency} description={destination[0].currenty}/>
                <DestinationInfos  icon={<Languages size={35} className=""/>} title={texts.destination.language} description={destination[0].language}/>
            </div>
            <Attractions destination={destination}/>
            <WhatToDo destination={destination} />
            <div className="flex justify-between">
                <UtilInformations destination={destination}/>
                <CostEstimate destination={destination} />
            </div>
        </div>
    )
}