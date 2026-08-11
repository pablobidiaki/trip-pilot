import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import CostEstimate from "@/components/itinerary/CostEstimate/CostEstimate";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ItineraryDays from "@/components/itinerary/ItineraryDays/ItineraryDays";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";
import Requirements from "@/components/itinerary/Requirements/Requirements";
import Tips from "@/components/itinerary/Tips/Tips";
import Tours from "@/components/itinerary/Tours/Tours";
import Transport from "@/components/itinerary/Transport/Transport";

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
                <Transport />
            </div>
            <div className="flex justify-center">
                <Requirements />
                <Tips />
            </div>
            <div className="flex justify-center">
                <ItineraryDays />
            </div>
            <br />
        </div>
    )
}