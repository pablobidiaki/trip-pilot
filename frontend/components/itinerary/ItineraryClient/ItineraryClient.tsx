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
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ItineraryPDF } from "@/components/pdf/ItineraryPDF";
import { Download, FileDown } from "lucide-react";

interface ItineraryClientProps {
    itinerary: ItineraryInterface
}

export default function ItineraryClient({ itinerary }: ItineraryClientProps) {
    const [isGrid, setIsGrid] = useState(false)
    const [optionSelected, setOptionSelected] = useState(texts.tabsOptions.providedData)

    return (
        <div className="relative bg-background-color">
            {isGrid &&
                <img src={"/imgs/itinerary/banner.png"}
                    alt="Banner"
                    className="w-full absolute z-0 hidden
                        lg:block
                    "
                />
            }
            <div className="relative">
                <Header backgroundLight={true} />
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

                    <div className="flex w-full">
                        <PDFDownloadLink className="p-2 w-full rounded-lg text-white ml-2 bg-blue-500 text-sm mt-5 flex items-center gap-2 justify-center" document={<ItineraryPDF itinerary={itinerary} />} fileName={`Roteiro-${itinerary.destination}.pdf`}>
                            <FileDown size={20} /> <p>Baixar roteiro</p>
                        </PDFDownloadLink>
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
                    {isGrid ? <MainContentGrid itinerary={itinerary} /> : <MainContentTabs itinerary={itinerary} optionSelected={optionSelected} />}
                </div>
            </div>

            {isGrid && <Footer />}
        </div>
    )
}