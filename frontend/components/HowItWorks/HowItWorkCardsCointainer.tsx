import HowItWorksCard from "./HowItWorksCard"

import texts from "@/constants/texts";

import { NotebookPen, BrainCircuit, Plane } from "lucide-react";

export default function HowItWorksCardsCointainer(){
    return(
        <div className="flex justify-evenly">
            <HowItWorksCard icon={<NotebookPen />} 
                            iconBgColor="bg-blue-300"
                            iconColor="text-blue-600"
                            title={texts.how_it_works.informe_your_travel_title} 
                            text={texts.how_it_works.informe_your_travel_text}
            />
            <HowItWorksCard icon={<BrainCircuit/>}
                            iconBgColor="bg-purple-300"
                            iconColor="text-purple-600"
                            title={texts.how_it_works.ai_plan_title} 
                            text={texts.how_it_works.ai_plan_text}
            />
            <HowItWorksCard icon={<Plane />} 
                            iconBgColor="bg-green-300"
                            iconColor="text-green-600"
                            title={texts.how_it_works.enjoy_title} 
                            text={texts.how_it_works.enjoy_text}
            />
        </div>
    )
}