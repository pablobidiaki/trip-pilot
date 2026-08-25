import texts from "@/constants/texts";
import WhatToDoCard from "./WhatToDoCard";
import { Destination } from "@/interfaces/destination.interface";
import { ShieldQuestionMark } from "lucide-react";

interface DestinationBodyProps {
    destination: Destination[]
}

export default function WhatToDo({ destination }: DestinationBodyProps){
    return(
        <div className="mx-4 mt-10">
            <div className="flex items-center gap-2 mb-5">
                <ShieldQuestionMark size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.what_to_do}</h1>
            </div>
            <div className=" grid grid-cols-5 gap-10">
                <WhatToDoCard title={texts.destination.nature} texts={destination[0].whatToDo.nature}/>
                <WhatToDoCard title={texts.destination.culture} texts={destination[0].whatToDo.culture}/>
                <WhatToDoCard title={texts.destination.tipicalFoods} texts={destination[0].whatToDo.tipicalFood}/>
                <WhatToDoCard title={texts.destination.famousStores} texts={destination[0].whatToDo.famousStores}/>
                <WhatToDoCard title={texts.destination.nightLife} texts={destination[0].whatToDo.nightLife}/>
            </div>
        </div>
    )
}