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

            <div className="flex gap">
                <div className="mt-2">
                    <Toggle isGrid={isGrid} onChange={setIsGrid} />
                    {!isGrid && (
                        <div className="mt-2 animate-[optionSelector_300ms_ease-out]">
                            <OptionSelector
                                optionSelected={optionSelected}
                                onClick={setOptionSelected}
                            />
                        </div>
                    )}
                </div>
                {isGrid &&
                    <MainContentGrid itinerary={itinerary}/>
                }
                {!isGrid && <MainContentTabs itinerary={itinerary} optionSelected={optionSelected} />}
            </div>

            {isGrid && <Footer />}
        </div>
    )
}