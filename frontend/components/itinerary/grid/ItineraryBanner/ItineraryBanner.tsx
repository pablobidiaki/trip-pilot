
import { ItineraryPDF } from "@/components/pdf/ItineraryPDF";
import texts from "@/constants/texts";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FileDown } from "lucide-react";
import Link from "next/link";

interface ItineraryBannerProps{
    itinerary: ItineraryInterface
}

export default function ItineraryBanner({itinerary}: ItineraryBannerProps) {
    return (
        <div className="relative">
            <h1 className="text-primary-color text-4xl font-medium">{texts.itineraryTitles.mainTitle}</h1>
            <p className="text-secondary-color mt-2">{texts.allReady}</p>
            <p className="text-secondary-color text-sm font-light mt-5">{texts.itinerary.pexelsCredits}
                <Link href={"https://www.pexels.com/pt-br/"} target="_blank" className="text-link-color"> Pexels.</Link>
            </p>
            <PDFDownloadLink className="p-2 w-fit rounded-lg text-white bg-blue-500 text-sm mt-5 flex items-center gap-2" document={<ItineraryPDF itinerary={itinerary} />} fileName={`Roteiro-${itinerary.destination}.pdf`}>
                <FileDown size={20} /> <p>Baixar roteiro em PDF</p>
            </PDFDownloadLink>
        </div>
    )
}   