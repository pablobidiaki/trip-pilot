"use client"

import Footer from "@/components/ui/Footer/Footer";
import texts from "@/constants/texts";
import Toggle from "@/components/ui/Toggle/Toggle";
import Header from "@/components/ui/Header/Header";
import OptionSelector from "@/components/itinerary/tabs/OptionSelector/OptionSelector";
import MainContentTabs from "../tabs/MainContentTabs/MainContentTabs";
import { useState } from "react";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import MainContentGrid from "../grid/MainContentGrid/MainContentGrid";

interface ItineraryClientProps {
    itinerary: ItineraryInterface[]
}

export default function ItineraryClient({ itinerary }: ItineraryClientProps) {
    const [isGrid, setIsGrid] = useState(false)
    const [optionSelected, setOptionSelected] = useState(texts.tabsOptions.providedData)

    return (
        <div className="relative bg-background-color">
            {isGrid &&
                <img src={"/imgs/itinerary/banner.png"}
                    alt="Banner"
                    className="w-full absolute z-0"
                />
            }
            <div className="relative">
                <Header />
            </div>

            <div className="flex flex-col
                md:flex-row 
            ">
                <div className="w-full
                    md:w-fit md:mr-2
                    lg:mr-2
                ">
                    <div className="w-fit mx-auto
                        md:w-fit md:mx-0
                    ">
                        <Toggle isGrid={isGrid} onChange={setIsGrid} />
                    </div>
                    {!isGrid && (
                        <div className="mt-2 animate-[optionSelector_300ms_ease-out]">
                            <OptionSelector
                                optionSelected={optionSelected}
                                onClick={setOptionSelected}
                            />
                        </div>
                    )}
                </div>
                <div className="w-full">
                    {isGrid ?<MainContentGrid itinerary={itinerary} /> : <MainContentTabs itinerary={itinerary} optionSelected={optionSelected} />}
                </div>
            </div>

            {isGrid && <Footer />}
        </div>
    )
}