import TripPilotFormMotion from "./TripPilotFormMotion";
import TripPilotGeneratingScene from "./TripPilotGeneratingScene";
import TripPilotItineraryScene from "./TripPilotItineraryScene";

export default function HowItWorksCardsCointainer(){
    return(
        <div className="flex flex-col items-center gap-2 mt-5 mx-4
            2xl:flex-row 2xl:justify-evenly 2xl:gap-0
        ">
            <TripPilotFormMotion />
            <TripPilotGeneratingScene />
            <TripPilotItineraryScene />
        </div>
    )
}