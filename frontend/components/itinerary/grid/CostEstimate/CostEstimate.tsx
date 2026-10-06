import texts from "@/constants/texts";
import { Bed, Utensils, Binoculars, Car, ShoppingCart } from "lucide-react"
import InfoRow from "../InfoRow/InfoRow";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";

interface CostEstimateProps {
    itinerary: ItineraryInterface[]
}

export default function CostEstimate({ itinerary }: CostEstimateProps) {
    return (
        <div className="border rounded-2xl border-gray-100 bg-white
            xl:max-w-1/3 xl:mt-8
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">2</span> {texts.itineraryTitles.costEstimate}</h1>

            <InfoRow icon={<Bed  size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg" />}
                information={texts.costEstimate.accommodation}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.accommodations.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-2 text-sm xl:text-lg"
            />

            <InfoRow icon={<Utensils size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.food}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.food.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-2 text-sm xl:text-lg"
            />

            <InfoRow icon={<Binoculars size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.tours}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.activities.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-2 text-sm xl:text-lg"
            />

            <InfoRow icon={<Car size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.transport}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.transport.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-2 text-sm xl:text-lg"
            />

            <InfoRow icon={<ShoppingCart size={35} className="text-orange-500 p-2 bg-orange-100 rounded-lg"/>}
                information={texts.costEstimate.shopAndExtras}
                value={`${texts.real} ${itinerary[0].itinerary.costEstimate.extra.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}
                tailwindTags="px-2 py-2 text-sm xl:text-lg"
            />

            <hr className="border-t border-dashed border-gray-100" />
            <div className="text-green-600 mx-2 mt-2 flex justify-between items-center">
                <p className="font-medium">Total Estimado</p>
                <p className="bg-green-100 p-2 rounded-2xl">{texts.real} {itinerary[0].itinerary.costEstimate.total.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
            </div>
            <p className="m-4 mt-4 text-primary-color bg-orange-100 p-2 rounded-2xl">
                <span className="text-orange-500 font-medium">{texts.tip}: </span>
                {texts.costEstimate.youInformed} {texts.real} {itinerary[0].budgetTotal.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })} {texts.costEstimate.itsPossibleAdjust}
            </p>
        </div>
    )
}