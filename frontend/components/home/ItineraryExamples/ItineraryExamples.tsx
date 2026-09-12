import texts from "@/constants/texts";
import Link from "next/link";
import ItineraryExamplesCardsContainer from "./ItineraryExamplesCardsContainer";

export default function ItineraryExamples(){
    return(
        <div className="mx-4 mt-15">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-primary-color font-medium text-3xl">{texts.itineraryExample.title}</h1>
                <p className="text-link-color underline font-medium">
                    <Link href={"/ready_guides"}>{texts.itineraryExample.viewAllItinerary}</Link>
                </p>
            </div>
            <ItineraryExamplesCardsContainer />
        </div>
    )
}