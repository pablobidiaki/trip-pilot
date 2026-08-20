import texts from "@/constants/texts";
import { BrainCircuit, Handshake, Info, Map } from "lucide-react";
import ReasonsInfo from "./ReasonsInfo";

export default function WhyChoseTripPilot(){
    const reasons = [
        {icon: <BrainCircuit />, title:texts.destinations.plan_with_ai, text: texts.destinations.personality_itineraries},
        {icon: <Map />, title:texts.destinations.destination_for_all_styles, text: texts.destinations.destinations},
        {icon: <Info />, title:texts.destinations.complete_infos, text: texts.destinations.tips},
        {icon: <Handshake />, title:texts.destinations.everything_in_one_place, text: texts.destinations.plan}
    ]
    return(
        <div className="h-fit bg-purple-50 mx-4 rounded-2xl mt-4">
            <h1 className="text-center mt-2 text-primary-color text-xl font-medium">{texts.destinations.why_chose_trip_pilot}</h1>

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