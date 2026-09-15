import ItineraryClient from "@/components/itinerary/ItineraryClient/ItineraryClient";
import { getItinerary } from "@/services/itinerary.service";

interface ItineraryPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function Itinerary({
    params
}: ItineraryPageProps) {

    const { id } = await params;

    const itinerary = await getItinerary(id);

    return (
        <ItineraryClient itinerary={itinerary} />
    );
}