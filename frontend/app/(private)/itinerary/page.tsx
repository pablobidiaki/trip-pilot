import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

export default async function Itinerary() {
    const itinerary = await getItinerary("0c85f045-fca9-4f10-817f-a35c11461a0c")

    return (
        <ItineraryClient itinerary={itinerary} />
    )
}