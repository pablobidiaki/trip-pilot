import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import { Car, CircleEllipsis, Handbag, Ticket, Utensils } from "lucide-react";
import DayCostEstimateCard from "./DayCostEstimateCard";

interface DayCostEstimateProps {
    guide: ReadyGuideInterface[],
    daySelected: string
}

export default function DayCostEstimate({ guide, daySelected }: DayCostEstimateProps) {
    return (
        guide[0].itinerary.map((resumeDay) => (
            resumeDay.day.toString() == daySelected &&
            <div className="border border-gray-200 rounded-2xl mt-5 py-2 px-3 bg-white">
                <div className="flex gap-3 items-center font-bold mb-2">
                    <Handbag className="text-purple-500" />
                    <p>{texts.ready_guides.cost_estimate}</p>
                </div>
                <DayCostEstimateCard
                    icon={<Utensils size={20} />}
                    text={texts.ready_guides.alimentation}
                    price={resumeDay.costDayEstimate.food}
                />
                <DayCostEstimateCard
                    icon={<Ticket size={20} />}
                    text={texts.ready_guides.ticket}
                    price={resumeDay.costDayEstimate.tickets}
                />
                <DayCostEstimateCard
                    icon={<Car size={20} />}
                    text={texts.ready_guides.transport}
                    price={resumeDay.costDayEstimate.transport}
                />
                <DayCostEstimateCard
                    icon={<CircleEllipsis size={20} />}
                    text={texts.ready_guides.other}
                    price={resumeDay.costDayEstimate.others}
                />
                <div className=" flex items-center justify-between mt-2">
                    <p className="font-medium">{texts.ready_guides.total}</p>
                    <p>{resumeDay.costDayEstimate.total}</p>
                </div>
            </div>
        ))
    )
}