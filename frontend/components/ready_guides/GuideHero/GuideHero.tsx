import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Calendar, CircleDollarSign, Clock, Heart, Landmark, Languages } from "lucide-react";
import Image from "next/image";
import GuideInfoCard from "../GuideInfoCard/GuideInfoCard";
import GradientButton from "@/components/ui/Buttons/GradientButton";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import texts from "@/constants/texts";

interface GuideHeroProps{
    guide: ReadyGuideInterface[]
}

export default function GuideHero({guide}: GuideHeroProps) {
    return (
        <div className="flex justify-center mt-10 gap-5 bg-white pb-5">
            <img src={guide[0].imageURL}
                alt="Main image"
                className="w-[40%] max-h-90 rounded-2xl"
            />
            <div>
                <div className="flex items-center gap-2">
                    <Heart className="text-red-500 fill-red-500" />
                    <p className="text-sm text-second-color">3.1k de pessoas salvaram esse roteiro.</p>
                </div>

                <h1 className="text-4xl font-medium mt-2">{guide[0].title}</h1>
                <div className="flex gap-2">
                    {guide[0].cities.map((city, index) =>(
                        <h2 key={index} className="text-primary-color mt-2">{city} </h2>
                    ))}
                </div>
                <p className="text-sm text-second-color my-2">{guide[0].description}</p>

                <div className="flex gap-5 mb-2">
                    <InfoItem icon={<Clock />} text={`${guide[0].days.toString()} dias`} />
                    <InfoItem icon={<Landmark />} text={guide[0].travelType} />
                </div>

                <div className="flex justify-between">
                    <GuideInfoCard icon={<Calendar />} title={texts.ready_guides.best_time} text={guide[0].bestTime} />
                    <GuideInfoCard icon={<Languages />} title={texts.ready_guides.language} text={guide[0].language} />
                    <GuideInfoCard icon={<CircleDollarSign />} title={texts.ready_guides.currency} text={guide[0].currenty} />
                </div>

                <div className="mt-16">
                    <GradientButton text={texts.ready_guides.save_guide} type="button" />
                </div>
            </div>
        </div>
    )
}