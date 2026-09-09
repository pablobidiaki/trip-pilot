import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("c5f78e5d-7ce1-467b-bbc2-c5625c6d7395")

    return (
        <ItineraryClient itinerary={itinerary} />
    )
}