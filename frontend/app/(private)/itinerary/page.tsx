import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import CostEstimate from "@/components/itinerary/CostEstimate/CostEstimate";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";
import Tours from "@/components/itinerary/Tours/Tours";

export default function Itinerary(){
    return(
        <div>
            <ItineraryBanner />
            <div className="flex justify-center">
                <ProvidedData />
                <Accommodation />
            </div>
            <div className="flex justify-center">
                <Tours />
                <CostEstimate />
                <Tours />
            </div>
            <br />
        </div>
    )
}