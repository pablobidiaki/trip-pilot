import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { Lightbulb } from "lucide-react";
import { TipsInterface } from "@/interfaces/itinerary.interface";

interface TipsProps{
    tips: TipsInterface[]
}

export default function Tips({tips}: TipsProps){
    console.log(tips)
    return(
        <div className="bg-white border rounded-2xl border-gray-300 max-w-1/2 mt-8">
            <CardTitle icon={<Lightbulb />} title={texts.itinerary_titles.tips} />
            <ul className="list-disc marker:text-primary-color py-2 pl-8 max-w-[95%] text-second-color">
                {tips.map((tip, index) => (
                    <li key={index} className="mb-3">{tip.text}</li>
                ))}
            </ul>
        </div>
    )
}