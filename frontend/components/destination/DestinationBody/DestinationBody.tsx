import { Destination } from "@/interfaces/destination.interface";
import Attractions from "../Attractions/Attractions";
import DestinationInfos from "../DestinationInfos/DestinationInfos";
import { Calendar1, CalendarDays, Cloud, DollarSign, Languages, Plane } from "lucide-react";
import WhatToDo from "../WhatToDo/WhatToDo";

interface DestinationBodyProps {
    destination: Destination[]
}

export default function DestinationBody({ destination }: DestinationBodyProps) {
    return (
        <div>
            <div className="my-10 mx-4 grid grid-cols-6 gap-20 ">
                <DestinationInfos  icon={<Calendar1 size={35} className=""/>} title={"Melhor época"} description={destination[0].bestTime}/>
                <DestinationInfos  icon={<Cloud size={35} className=""/>} title={"Clima"} description={destination[0].weather}/>
                <DestinationInfos  icon={<Plane size={35} className=""/>} title={"Tipo de viagem"} description={destination[0].travelType}/>
                <DestinationInfos  icon={<CalendarDays size={35} className=""/>} title={"Dias recomendados"} description={destination[0].dayReccomended.toString()}/>
                <DestinationInfos  icon={<DollarSign size={35} className=""/>} title={"Moeda"} description={destination[0].currenty}/>
                <DestinationInfos  icon={<Languages size={35} className=""/>} title={"Idioma"} description={destination[0].language}/>
            </div>
            <Attractions destination={destination}/>
            <WhatToDo destination={destination} />
        </div>
    )
}