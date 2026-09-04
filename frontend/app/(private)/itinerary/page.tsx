import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("8037aada-2f51-4899-aeb2-8be00a20aa69")

    return (
        <ItineraryClient itinerary={itinerary} />
    )
}