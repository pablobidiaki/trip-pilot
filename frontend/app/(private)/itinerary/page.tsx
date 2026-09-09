import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("e28f8481-6c4b-4c54-9dd5-16c45bbfde06")

    return (
        <ItineraryClient itinerary={itinerary} />
    )
}