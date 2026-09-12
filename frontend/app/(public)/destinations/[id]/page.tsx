import DestinationBanner from "@/components/destination/DestinationBanner/DestinationBanner";
import DestinationBody from "@/components/destination/DestinationBody/DestinationBody";
import Footer from "@/components/ui/Footer/Footer";
import CTA from "@/components/ui/CTA/CTA";
import texts from "@/constants/texts";
import { getDestination } from "@/services/destination.service";
import { BrainCircuit } from "lucide-react";
import { notFound } from 'next/navigation'

interface DestinationProps {
    params: Promise<{ id: string }>
}

export default async function Destination({ params }: DestinationProps) {
    const { id } = await params;

    const destination = await getDestination(id);

    if (!destination || destination.length === 0)
        notFound();

    return (
        <div className="bg-background-color">
            <DestinationBanner destination={destination} />
            <DestinationBody destination={destination} />
            <CTA icon={<BrainCircuit size={80} />}
                title={texts.destination.alterTravel}
                text={`Deseja mudar algo? Crie agora o seu roteiro personalizado para ${destination[0].destination}`}
                buttonText={texts.readyToNextTravel.buttonText}
                isHomePage={false}
            />
            <Footer />
        </div>
    )
}