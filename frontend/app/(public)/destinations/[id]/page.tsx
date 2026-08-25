import DestinationBanner from "@/components/destination/DestinationBanner/DestinationBanner";
import DestinationBody from "@/components/destination/DestinationBody/DestinationBody";
import Footer from "@/components/home/Footer/Footer";
import { getDestination } from "@/services/destination.service";

interface DestinationProps {
    params: Promise<{id: string}>
}

export default async function Destination({ params }: DestinationProps) {
    const { id } = await params;

    const destination = await getDestination(id);

    return (
        <div className="bg-background-color">
            <DestinationBanner destination={destination}/>
            <DestinationBody destination={destination}/>
            <Footer />
        </div>
    )
}