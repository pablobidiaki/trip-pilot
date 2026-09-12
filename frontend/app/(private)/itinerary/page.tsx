import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("5650039b-e73f-4997-98a8-a6d65b9ea7b7")

    return (
        <ItineraryClient itinerary={itinerary} />
    )
}