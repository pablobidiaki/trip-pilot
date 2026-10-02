import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Calendar, CircleDollarSign, Clock, Heart, Landmark, Languages } from "lucide-react";
import GuideInfoCard from "../GuideInfoCard/GuideInfoCard";
import GradientButton from "@/components/ui/Buttons/GradientButton";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import texts from "@/constants/texts";

interface GuideHeroProps {
    guide: ReadyGuideInterface[]
}

export default function GuideHero({ guide }: GuideHeroProps) {
    return (
        <div className="flex flex-col justify-center bg-white
            lg:mt-10 lg:pb-5 lg:gap-2 lg:flex-row lg:ml-2
        ">
            <img src={guide[0].imageURL}
                alt="Main image"
                className="w-full max-h-90 mb-1
                    lg:w-[40%] lg:mb-0 lg:rounded-2xl
            "/>
            <div className="flex flex-col
                2xl:max-w-[28%]
            ">
                {/* <div className="flex items-center gap-2">
                    <Heart className="text-red-500 fill-red-500" />
                    <p className="text-sm text-second-color">3.1k de pessoas salvaram esse roteiro.</p>
                </div> */}

                <h1 className="text-2xl font-medium mx-2
                    
                ">
                    {guide[0].title}
                </h1>
                <div className="flex gap-2 mx-2">
                    {guide[0].cities.map((city, index) => (
                        <h2 key={index} className="text-primary-color">{city} </h2>
                    ))}
                </div>
                <p className="text-xs text-second-color my-2 mx-2
                    lg:text-sm
                ">
                    {guide[0].description}
                </p>

                <div className="flex gap-5 mb-2 mx-2">
                    <InfoItem icon={<Clock />} text={`${guide[0].days.toString()} dias`} />
                    <InfoItem icon={<Landmark />} text={guide[0].travelType} />
                </div>

                <div className="grid grid-cols-1 gap-2 mx-2
                    md:flex md:justify-between 
                ">
                    <GuideInfoCard icon={<Calendar />} title={texts.readyGuides.bestTime} text={guide[0].bestTime} />
                    <GuideInfoCard icon={<Languages />} title={texts.readyGuides.language} text={guide[0].language} />
                    <GuideInfoCard icon={<CircleDollarSign />} title={texts.readyGuides.currency} text={guide[0].currenty} />
                </div>

                <div className="mt-5 mx-2
                    xl:mt-auto
                ">
                    <GradientButton text={texts.readyGuides.saveGuide} type="button" />
                </div>
            </div>
        </div>
    )
}