import Footer from "@/components/ui/Footer/Footer";
import Accommodation from "@/components/itinerary/Accommodation/Accommodation";
import CostEstimate from "@/components/itinerary/CostEstimate/CostEstimate";
import HowToGetThere from "@/components/itinerary/HowToGetThere/HowToGetThere";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ItineraryDays from "@/components/itinerary/ItineraryDays/ItineraryDays";
import ProvidedData from "@/components/itinerary/ProvidedData/ProvidedData";
import Requirements from "@/components/itinerary/Requirements/Requirements";
import TipicalFoods from "@/components/itinerary/TipicalFoods/TipicalFoods";
import Tips from "@/components/itinerary/Tips/Tips";
import Tours from "@/components/itinerary/Tours/Tours";
import Transport from "@/components/itinerary/Transport/Transport";
import Weather from "@/components/itinerary/Weather/Weather";
import texts from "@/constants/texts";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("ab006a37-78cc-4ba1-8aef-613ec492a943")

    return (
        <div className="bg-background-color">
            <ItineraryBanner />
            <div className="relative mx-auto max-w-[85%]">
                <div className="flex gap-5">
                    <ProvidedData itinerary={itinerary} />
                    <Accommodation accommodations={itinerary[0].itinerary.accommodations} />
                </div>
                <div className="flex justify-center gap-5">
                    <Tours tours={itinerary[0].itinerary.tours} />
                    <CostEstimate itinerary={itinerary} />
                    <div className="flex flex-col justify-between max-w-1/3">
                        <Weather weather={itinerary[0].itinerary.weather} />
                        <Transport transports={itinerary[0].itinerary.transportation} />
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <Requirements requirements={itinerary[0].itinerary.requirements} />
                    <Tips tips={itinerary[0].itinerary.tips} />
                </div>
                <div className="flex justify-center gap-5">
                    <HowToGetThere tickets={itinerary[0].itinerary.ticket}
                        originCountry={itinerary[0].countryOrigin}
                        originFlag={itinerary[0].countryOriginFlagURL}
                        destinationCountry={itinerary[0].countryDestination}
                        destinationFlag={itinerary[0].countryDestinationFlagURL}
                    />
                    <TipicalFoods tipicalFoods={itinerary[0].itinerary.tipicalFood} />
                </div>

                <ItineraryDays itineraryDays={itinerary[0].itinerary.dayToDay} />

                <p className="w-fit mx-auto text-center mt-5 px-3 py-2 bg-yellow-100 text-primary-color font-medium rounded-2xl"> {texts.ai_warning}</p>
                <p className="text-center mt-2 text-second-color">{texts.good_travel}</p>
            </div>
            <Footer />
        </div>
    )
}