import texts from "@/constants/texts";
import { Bed, Utensils, Binoculars, Car, ShoppingCart } from "lucide-react"
import InfoRow from "../InfoRow/InfoRow";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import formatCurrent from "@/utils/formatCurrent";

interface CostEstimateProps {
    itinerary: ItineraryInterface
}

export default function CostEstimate({ itinerary }: CostEstimateProps) {
    return (
        <div className="border rounded-2xl border-gray-100 bg-white
            xl:max-w-1/3 xl:mt-5
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2">{texts.itineraryTitles.costEstimate}</h1>

            <InfoRow icon={<Bed  size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg" />}
                information={texts.costEstimate.accommodation}
                value={`${texts.real} ${formatCurrent(itinerary.itinerary.costEstimate.accommodations)}`}
                tailwindTags="px-2 py-2 text-sm 2xl:text-lg"
            />

            <InfoRow icon={<Utensils size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.food}
                value={`${texts.real} ${formatCurrent(itinerary.itinerary.costEstimate.food)}`}
                tailwindTags="px-2 py-2 text-sm 2xl:text-lg"
            />

            <InfoRow icon={<Binoculars size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.tours}
                value={`${texts.real} ${formatCurrent(itinerary.itinerary.costEstimate.activities)}`}
                tailwindTags="px-2 py-2 text-sm 2xl:text-lg"
            />

            <InfoRow icon={<Car size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.transport}
                value={`${texts.real} ${formatCurrent(itinerary.itinerary.costEstimate.transport)}`}
                tailwindTags="px-2 py-2 text-sm 2xl:text-lg"
            />

            <InfoRow icon={<ShoppingCart size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.shopAndExtras}
                value={`${texts.real} ${formatCurrent(itinerary.itinerary.costEstimate.extra)}`}
                tailwindTags="px-2 py-2 text-sm 2xl:text-lg"
            />

            <hr className="border-t border-dashed border-gray-100" />
            <div className="text-green-600 mx-2 mt-2 flex justify-between items-center">
                <p className="font-medium">Total Estimado</p>
                <p className="bg-green-100 p-2 rounded-2xl">{texts.real} {formatCurrent(itinerary.itinerary.costEstimate.total)}</p>
            </div>
            <p className="m-4 mt-4 text-primary-color bg-orange-100 p-2 rounded-2xl">
                <span className="text-orange-500 font-medium">{texts.tip}: </span>
                {texts.costEstimate.youInformed} {texts.real} {formatCurrent(itinerary.budgetTotal)} {texts.costEstimate.itsPossibleAdjust}
            </p>
        </div>
    )
}