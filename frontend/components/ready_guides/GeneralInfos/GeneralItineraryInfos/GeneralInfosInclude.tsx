import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { CircleCheck } from "lucide-react";

export default function GeneralInfosInclude(){
    return(
        <div className=" bg-white p-6 rounded-2xl border border-gray-100 mx-2 h-fit
            md:w-fit md:mx-auto 
            lg:col-span-4 lg:w-full
            2xl:col-span-3
        ">
            <h1 className="text-primary font-medium text-3xl mb-2
                lg:text-2xl
            ">{texts.readyGuides.whatIsInclude}</h1>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.accommodationsSelected} tailwindTags="text-sm lg:text-xs xl:text-sm"/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.breakfast} tailwindTags="text-sm lg:text-xs xl:text-sm"/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.tours} tailwindTags="text-sm lg:text-xs xl:text-sm"/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.transportEnterCities} tailwindTags="text-sm lg:text-xs xl:text-sm"/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.travelInsurance} tailwindTags="text-sm lg:text-xs xl:text-sm"/>
            <InfoItem icon={<CircleCheck className="text-green-400"/>} text={texts.readyGuides.support} tailwindTags="text-sm lg:text-xs xl:text-sm"/>
        </div>
    )
}