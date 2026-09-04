"use client"

import Footer from "@/components/ui/Footer/Footer";
import Accommodation from "@/components/itinerary/grid/Accommodation/Accommodation";
import CostEstimate from "@/components/itinerary/grid/CostEstimate/CostEstimate";
import HowToGetThere from "@/components/itinerary/grid/HowToGetThere/HowToGetThere";
import ItineraryBanner from "@/components/itinerary/ItineraryBanner/ItineraryBanner";
import ItineraryDays from "@/components/itinerary/grid/ItineraryDays/ItineraryDays";
import ProvidedData from "@/components/itinerary/grid/ProvidedData/ProvidedData";
import Requirements from "@/components/itinerary/grid/Requirements/Requirements";
import TipicalFoods from "@/components/itinerary/grid/TipicalFoods/TipicalFoods";
import Tips from "@/components/itinerary/grid/Tips/Tips";
import Tours from "@/components/itinerary/grid/Tours/Tours";
import Transport from "@/components/itinerary/grid/Transport/Transport";
import Weather from "@/components/itinerary/grid/Weather/Weather";
import texts from "@/constants/texts";
import Toggle from "@/components/ui/Toggle/Toggle";
import Header from "@/components/ui/Header/Header";
import OptionSelector from "@/components/itinerary/OptionSelector/OptionSelector";
import { useState } from "react";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import MainContentTabs from "../tabs/MainContentTabs/MainContentTabs";

interface ItineraryClientProps {
    itinerary: ItineraryInterface[]
}

export default function ItineraryClient({ itinerary }: ItineraryClientProps) {
    const [isGrid, setIsGrid] = useState(false)
    const [optionSelected, setOptionSelected] = useState(texts.tabsOptions.provided_data)

    return (
        <div className="relative bg-background-color">
            <img src={"/imgs/itinerary/banner.png"}
                alt="Banner"
                className="w-full absolute z-0"
            />
            <div className="relative">
                <Header />
            </div>

            <div className="flex gap">
                <div className="mt-2">
                    <Toggle isGrid={isGrid} onChange={setIsGrid} />
                    {!isGrid && <OptionSelector optionSelected={optionSelected} onClick={setOptionSelected}/>}
                </div>
                {isGrid &&
                    <div className="mx-4">
                        <ItineraryBanner />
                        <div className="flex gap-5 relative">
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
                }
                {!isGrid && <MainContentTabs itinerary={itinerary} optionSelected={optionSelected} />}
            </div>

            {isGrid && <Footer />}
        </div>
    )
}