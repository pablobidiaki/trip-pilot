import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";

export default function Itinerary(){
    return(
        <div>
            <ItineraryBanner />
            <div className="flex justify-center">
                <ProvidedData />
                <Accommodation />
            </div>
            <br />
        </div>
    )
}