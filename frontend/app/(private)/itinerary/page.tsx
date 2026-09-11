import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("04cffde1-1ad0-4f0f-90f4-562705159761")

    return (
        <ItineraryClient itinerary={itinerary} iti={typeof itinerary[0].itinerary === "string" ? JSON.parse(itinerary[0].itinerary) : itinerary[0].itinerary} />
    )
}