import GeneralItineraryInfos from "./GeneralItineraryInfos/GeneralItineraryInfos";

export default function GeneralInfos(){
    return(
        <div className="grid grid-cols-[minmax(0,2fr)_400px] gap-4">
            <GeneralItineraryInfos />
        </div>
    )
}