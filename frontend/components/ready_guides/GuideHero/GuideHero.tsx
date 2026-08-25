import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Calendar, ChartNoAxesColumnDecreasing, CircleDollarSign, Clock, Heart, Landmark } from "lucide-react";
import Image from "next/image";
import GuideInfoCard from "../GuideInfoCard/GuideInfoCard";
import GradientButton from "@/components/ui/Buttons/GradientButton";

export default function GuideHero() {
    return (
        <div className="flex justify-center mt-10 gap-5 bg-white pb-5">
            <Image src="/imgs/ready_guides/italy.jpg"
                alt="Main image"
                width={1181}
                height={881}
                className="w-[40%] max-h-82 rounded-2xl"
            />
            <div>
                <div className="flex items-center gap-2">
                    <Heart className="text-red-500 fill-red-500" />
                    <p className="text-sm text-second-color">3.1k de pessoas salvaram esse roteiro.</p>
                </div>
                
                <h1 className="text-4xl font-medium mt-2">Italia classica</h1>
                <h2 className="text-primary-color mt-2">Roma, Florença e Veneza</h2>
                <p className="text-sm text-second-color my-2">Arte, historia, gastronomia e paisagens inesqueciveis em um roteiro que captura o melhor da italia.</p>

                <div className="flex gap-5 mb-2">
                    <InfoItem icon={<Clock />} text="8 dias" />
                    <InfoItem icon={<Landmark />} text="Cultural" />
                </div>

                <div className="flex justify-between">
                    <GuideInfoCard icon={<Calendar />} title="Melhor época" text="Abr a Jun - Set a Out"/>
                    <GuideInfoCard icon={<ChartNoAxesColumnDecreasing />} title="Nível de viagem" text="Facil"/>
                    <GuideInfoCard icon={<CircleDollarSign />} title="Moeda" text="Euro (EUR)"/>
                </div>

                <div className="mt-5">
                    <GradientButton text="Salvar roteiro " type="button"/>
                </div>
            </div>
        </div>
    )
}