import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { Car, CircleEllipsis, Handbag, Ticket, Utensils } from "lucide-react";

export default function DayCostEstimate(){
    return(
        <div className="border border-gray-200 rounded-2xl mt-5 py-2 px-3 bg-white">
            <div className="flex gap-3 items-center font-bold mb-2">
                <Handbag className="text-purple-500"/>
                <p>{texts.ready_guides.cost_estimate}</p>
            </div>
            <div className=" flex items-center justify-between">
                <InfoItem icon={<Utensils size={20}/>} text={texts.ready_guides.alimentation}/>
                <p>R$125 - R$ 135</p>
            </div>
            <div className=" flex items-center justify-between">
                <InfoItem icon={<Ticket size={20}/>} text={texts.ready_guides.ticket}/>
                <p>R$25 - R$ 35</p>
            </div>
            <div className=" flex items-center justify-between">
                <InfoItem icon={<Car size={20}/>} text={texts.ready_guides.transport}/>
                <p>R$25 - R$ 35</p>
            </div>
            <div className=" flex items-center justify-between">
                <InfoItem icon={<CircleEllipsis size={20}/>} text={texts.ready_guides.other}/>
                <p>R$25 - R$ 35</p>
            </div>
            <div className=" flex items-center justify-between mt-2">
                <p className="font-medium">{texts.ready_guides.total}</p>
                <p>R$ 35</p>
            </div>
        </div>
    )
}