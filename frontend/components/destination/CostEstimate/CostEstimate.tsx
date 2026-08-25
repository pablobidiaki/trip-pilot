import InfoRow from "@/components/itinerary/InfoRow/InfoRow";
import texts from "@/constants/texts";
import { Destination } from "@/interfaces/destination.interface";
import { Bed, Binoculars, Car, DollarSign, Utensils } from "lucide-react";

interface CostEstimateProps {
    destination: Destination[]
}

export default function CostEstimate({ destination }: CostEstimateProps) {
    return (
        <div className="min-w-2/7 mt-10 mx-4">
            <div className="flex items-center gap-2 mb-5">
                <DollarSign size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.cost_estimated}</h1>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-gray-200 h-fit">
                <InfoRow icon={<Bed />} information={texts.cost_estimate.accommodation} value={destination[0].averageCost.accommodations} tailwindTags="px-2 py-3" />
                <InfoRow icon={<Utensils />} information={texts.cost_estimate.food} value={destination[0].averageCost.food} tailwindTags="px-2 py-3" />
                <InfoRow icon={<Binoculars />} information={texts.cost_estimate.tours} value={destination[0].averageCost.tours} tailwindTags="px-2 py-3" />
                <InfoRow icon={<Car />} information={texts.cost_estimate.transport} value={destination[0].averageCost.transport} tailwindTags="px-2 py-3" />
                <hr className="mx-1"/>
                <div className="flex justify-between mt-2 mx-2 items-center">
                    <p className="text-primary-color font-bold">Custo total estimado</p>
                    <p className="px-2 py-1 rounded-2xl bg-green-200 text-green-400">R$ {destination[0].averageCost.total}</p>
                </div>
            </div>
        </div>
    )
}