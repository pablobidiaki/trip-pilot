import Footer from "@/components/home/Footer/Footer";
import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import CostEstimate from "@/components/itinerary/CostEstimate/CostEstimate";
import HowToGetThere from "@/components/itinerary/HowToGetThere/HowToGetThere";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ItineraryDays from "@/components/itinerary/ItineraryDays/ItineraryDays";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";
import Requirements from "@/components/itinerary/Requirements/Requirements";
import Tips from "@/components/itinerary/Tips/Tips";
import Tours from "@/components/itinerary/Tours/Tours";
import Transport from "@/components/itinerary/Transport/Transport";
import Weather from "@/components/itinerary/Weather/Weather";
import texts from "@/constants/texts";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary(){
    const itinerary = await getItinerary("dd38483a-5ecc-4386-a7ed-969b4fd1f62a")

    return(
        <div className="bg-background-color">
            <ItineraryBanner />
            <div className="relative">
                <div className="flex justify-center">
                    <ProvidedData itinerary={itinerary}/>
                    <Accommodation accommodations={itinerary[0].itinerary.accommodations}/>
                </div>
                <div className="flex justify-center">
                    <Tours tours={itinerary[0].itinerary.tours}/>
                    <CostEstimate itinerary={itinerary}/>
                    <div className="max-w-1/4">
                        <Weather weather={itinerary[0].itinerary.weather}/>
                        <Transport transports={itinerary[0].itinerary.transportation}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Requirements requirements={itinerary[0].itinerary.requirements}/>
                    <Tips tips={itinerary[0].itinerary.tips}/>
                </div>
                <div className="flex justify-center">
                    <HowToGetThere tickets={itinerary[0].itinerary.ticket}/>
                </div>
                <div className="flex justify-center">
                    <ItineraryDays itineraryDays={itinerary[0].itinerary.dayToDay}/>
                </div>
                <p className="w-fit mx-auto text-center mt-5 px-3 py-2 bg-yellow-100 text-primary-color font-medium rounded-2xl"> {texts.ai_warning}</p>
                <p className="text-center mt-2 text-second-color">{texts.good_travel}</p>
                <Footer />
            </div>
        </div>
    )
}