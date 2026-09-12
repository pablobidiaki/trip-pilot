import InfoCard from "../../ui/InfoCard/InfoCard"

import texts from "@/constants/texts";

import { NotebookPen, BrainCircuit, Plane } from "lucide-react";

export default function HowItWorksCardsCointainer(){
    return(
        <div className="flex justify-evenly">
            <InfoCard icon={<NotebookPen className="text-blue-600" />} 
                            iconBgColor="bg-blue-300"
                            title={texts.howItWorks.informeYourTravelTitle} 
                            text={texts.howItWorks.informeYourTravelText}
            />
            <InfoCard icon={<BrainCircuit className="text-purple-600"/>}
                            iconBgColor="bg-purple-300"
                            title={texts.howItWorks.aiPlanTitle} 
                            text={texts.howItWorks.aiPlanText}
            />
            <InfoCard icon={<Plane className="text-green-600"/>} 
                            iconBgColor="bg-green-300"
                            title={texts.howItWorks.enjoyTitle} 
                            text={texts.howItWorks.enjoyText}
            />
        </div>
    )
}