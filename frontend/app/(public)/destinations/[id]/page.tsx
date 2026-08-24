import DestinationBanner from "@/components/destination/DestinationBanner/DestinationBanner";
import DestinationBody from "@/components/destination/DestinationBody/DestinationBody";
import { getDestination } from "@/services/destination.service";

interface DestinationProps {
    params: Promise<{id: string}>
}

export default async function Destination({ params }: DestinationProps) {
    const { id } = await params;

    const destination = await getDestination(id);

    return (
        <div>
            <DestinationBanner destination={destination}/>
            <DestinationBody destination={destination}/>
        </div>
    )
}