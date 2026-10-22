import TripPilotFormMotion from "./TripPilotFormMotion";
import TripPilotGeneratingScene from "./TripPilotGeneratingScene";
import TripPilotItineraryScene from "./TripPilotItineraryScene";

export default function HowItWorksCardsCointainer(){
    return(
        <div className="flex flex-col items-center
            lg:flex lg:flex-row lg:justify-between lg:mx-2
            2xl:justify-evenly 2xl:mt-5
        ">
            <TripPilotFormMotion />
            <TripPilotGeneratingScene />
            <TripPilotItineraryScene />
        </div>
    )
}