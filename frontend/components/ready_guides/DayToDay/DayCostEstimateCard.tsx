import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { ReactNode } from "react";

interface DayCostEstimateCardProps{
    icon: ReactNode,
    text: string,
    price: string
}

export default function DayCostEstimateCard({icon, text, price}: DayCostEstimateCardProps){
    return(
        <div className=" flex items-center justify-between">
            <InfoItem icon={icon} text={text}/>
            <p>{price}</p>
        </div>
    )
}