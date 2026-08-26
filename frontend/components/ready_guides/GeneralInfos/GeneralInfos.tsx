import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import GeneralInfosInclude from "./GeneralItineraryInfos/GeneralInfosInclude";
import GeneralItineraryInfos from "./GeneralItineraryInfos/GeneralItineraryInfos";

interface GeneralInfosProps{
    guide: ReadyGuideInterface[]
}

export default function GeneralInfos({guide}: GeneralInfosProps){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <GeneralItineraryInfos guide={guide}/>
            <GeneralInfosInclude />
        </div>
    )
}