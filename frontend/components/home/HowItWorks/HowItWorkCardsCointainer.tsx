import InfoCard from "../../ui/InfoCard/InfoCard"

import texts from "@/constants/texts";

import { NotebookPen, BrainCircuit, Plane } from "lucide-react";

export default function HowItWorksCardsCointainer(){
    return(
        <div className="flex justify-evenly">
            <InfoCard icon={<NotebookPen className="text-blue-600" />} 
                            iconBgColor="bg-blue-300"
                            title={texts.how_it_works.informe_your_travel_title} 
                            text={texts.how_it_works.informe_your_travel_text}
            />
            <InfoCard icon={<BrainCircuit className="text-purple-600"/>}
                            iconBgColor="bg-purple-300"
                            title={texts.how_it_works.ai_plan_title} 
                            text={texts.how_it_works.ai_plan_text}
            />
            <InfoCard icon={<Plane className="text-green-600"/>} 
                            iconBgColor="bg-green-300"
                            title={texts.how_it_works.enjoy_title} 
                            text={texts.how_it_works.enjoy_text}
            />
        </div>
    )
}