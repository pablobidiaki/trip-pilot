import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { CircleCheck } from "lucide-react";

export default function GeneralInfosInclude(){
    return(
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 mx-4 h-full">
            <h1 className="text-primary font-medium text-3xl mb-2">{texts.ready_guides.what_is_include}</h1>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.ready_guides.accommodations_selected}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.ready_guides.breakfast}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.ready_guides.tours}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.ready_guides.transport_enter_cities}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.ready_guides.travel_insurance}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.ready_guides.support}/>
        </div>
    )
}