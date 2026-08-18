import GeneralInfosInclude from "./GeneralItineraryInfos/GeneralInfosInclude";
import GeneralItineraryInfos from "./GeneralItineraryInfos/GeneralItineraryInfos";

export default function GeneralInfos(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <GeneralItineraryInfos />
            <GeneralInfosInclude />
        </div>
    )
}