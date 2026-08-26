import DestinationBanner from "@/components/destination/DestinationBanner/DestinationBanner";
import DestinationBody from "@/components/destination/DestinationBody/DestinationBody";
import Footer from "@/components/home/Footer/Footer";
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
            <CTA icon={<BrainCircuit size={80} />} title={texts.destination.alter_travel} text={`Deseja mudar algo? Crie agora o seu roteiro personalizado para ${destination[0].destination}`} buttonText={texts.ready_to_next_travel.button_text} />
            <Footer />
        </div>
    )
}