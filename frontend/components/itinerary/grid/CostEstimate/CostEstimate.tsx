import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { CircleDollarSign, Bed, Utensils, Binoculars, Car, ShoppingCart } from "lucide-react"
import InfoRow from "../InfoRow/InfoRow";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";

interface CostEstimateProps {
    itinerary: ItineraryInterface[]
}

export default function CostEstimate({ itinerary }: CostEstimateProps) {
    return (
        <div className="border rounded-2xl border-gray-300 min-w-1/3 mt-8 bg-white">
            <CardTitle icon={<CircleDollarSign />} title={texts.itineraryTitles.costEstimate} />
            <InfoRow icon={<Bed />}
                information={texts.costEstimate.accommodation}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.accommodations.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<Utensils />}
                information={texts.costEstimate.food}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.food.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<Binoculars />}
                information={texts.costEstimate.tours}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.activities.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-3"
            />

            <InfoRow icon={<Car />}
                information={texts.costEstimate.transport}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.transport.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-3"
            />
            
            <InfoRow icon={<ShoppingCart />}
                information={texts.costEstimate.shopAndExtras}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.extra.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-3"
            />

            <hr className="border-t border-dashed border-gray-300" />
            <div className="text-green-600 m-4 flex justify-between items-center">
                <p className="font-medium">Total Estimado</p>
                <p className="bg-green-100 p-2 rounded-2xl">{texts.real} {itinerary[0].itinerary.costEstimate.total.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
            </div>
            <p className="m-4 mt-8 text-primary-color bg-blue-100 p-2 rounded-2xl">
                <span className="text-blue-700 font-medium">{texts.tip}: </span>
                {texts.costEstimate.youInformed} {texts.real} {itinerary[0].budgetTotal.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })} {texts.costEstimate.itsPossibleAdjust}
            </p>
        </div>
    )
}