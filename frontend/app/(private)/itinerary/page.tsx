import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";

export default function Itinerary(){
    return(
        <div>
            <ItineraryBanner />
            <ProvidedData />
            <Accommodation />
            <br />
        </div>
    )
}