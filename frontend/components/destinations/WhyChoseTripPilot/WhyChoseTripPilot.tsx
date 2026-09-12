import texts from "@/constants/texts";
import { BrainCircuit, Handshake, Info, Map } from "lucide-react";
import ReasonsInfo from "./ReasonsInfo";

export default function WhyChoseTripPilot(){
    const reasons = [
        {icon: <BrainCircuit />, title:texts.destinations.planWithAi, text: texts.destinations.personalityItineraries},
        {icon: <Map />, title:texts.destinations.destinationForAllStyles, text: texts.destinations.destinations},
        {icon: <Info />, title:texts.destinations.completeInfos, text: texts.destinations.tips},
        {icon: <Handshake />, title:texts.destinations.everythingInOnePlace, text: texts.destinations.plan}
    ]
    return(
        <div className="h-fit bg-purple-50 mx-4 rounded-2xl mt-4">
            <h1 className="text-center mt-2 text-primary-color text-xl font-medium">{texts.destinations.whyChoseTripPilot}</h1>

            {reasons.map(reason => (
                <ReasonsInfo key={reason.title}
                             icon={reason.icon}
                             title={reason.title}
                             text={reason.text}
                />
            ))}
        </div>
    )
}