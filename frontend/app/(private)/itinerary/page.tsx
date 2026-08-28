import Footer from "@/components/home/Footer/Footer";
import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import CostEstimate from "@/components/itinerary/CostEstimate/CostEstimate";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ItineraryDays from "@/components/itinerary/ItineraryDays/ItineraryDays";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";
import Requirements from "@/components/itinerary/Requirements/Requirements";
import Tips from "@/components/itinerary/Tips/Tips";
import Tours from "@/components/itinerary/Tours/Tours";
import Transport from "@/components/itinerary/Transport/Transport";
import texts from "@/constants/texts";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary(){
    const itinerary = await getItinerary("95f63135-8ef0-4863-ae7c-33035378e887")

    return(
        <div className="bg-background-color">
            <ItineraryBanner />
            <div className="relative">
                <div className="flex justify-center">
                    <ProvidedData itinerary={itinerary}/>
                    <Accommodation itinerary={itinerary}/>
                </div>
                <div className="flex justify-center">
                    <Tours itinerary={itinerary}/>
                    <CostEstimate itinerary={itinerary}/>
                    <Transport />
                </div>
                <div className="flex justify-center">
                    <Requirements />
                    <Tips />
                </div>
                <div className="flex justify-center">
                    <ItineraryDays />
                </div>
                <p className="w-fit mx-auto text-center mt-5 px-3 py-2 bg-yellow-100 text-primary-color font-medium rounded-2xl"> {texts.ai_warning}</p>
                <p className="text-center mt-2 text-second-color">{texts.good_travel}</p>
                <Footer />
            </div>
        </div>
    )
}