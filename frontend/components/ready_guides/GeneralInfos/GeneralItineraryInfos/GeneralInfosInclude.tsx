import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { CircleCheck } from "lucide-react";

export default function GeneralInfosInclude(){
    return(
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 mx-4 h-full">
            <h1 className="text-primary font-medium text-3xl mb-2">{texts.readyGuides.whatIsInclude}</h1>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.accommodationsSelected}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.breakfast}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.tours}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.transportEnterCities}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.travelInsurance}/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.support}/>
        </div>
    )
}