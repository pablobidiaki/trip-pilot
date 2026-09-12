
import texts from "@/constants/texts";
import Link from "next/link";

export default function ItineraryBanner() {
    return (
        <div className="relative mt-2">
            <h1 className="text-primary-color text-4xl font-medium">{texts.itineraryTitles.mainTitle}</h1>
            <p className="text-second-color mt-2">{texts.allReady}</p>
            <p className="text-second-color text-sm font-light mt-5">{texts.itinerary.pexelsCredits}
                <Link href={"https://www.pexels.com/pt-br/"} target="_blank" className="text-link-color"> Pexels.</Link>
            </p>
        </div>
    )
}   