import texts from "@/constants/texts";
import Link from "next/link";
import PopularDestinationsCardContainer from "./PopularDestinationCardsContainer";

export default function PopularDestinations(){
    return(
        <div className="mx-4 mt-10">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-primary-color font-medium text-3xl">{texts.popularDestination.popularDestinationTitle}</h1>
                <p className="text-link-color underline font-medium">
                    <Link href={"/destinations"}>{texts.popularDestination.viewAllDestinations}</Link>
                </p>
            </div>
            <PopularDestinationsCardContainer />
        </div>
    )
}