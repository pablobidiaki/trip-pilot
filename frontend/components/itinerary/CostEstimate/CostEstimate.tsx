import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { CircleDollarSign, Bed, Utensils, Binoculars, Car, ShoppingCart } from "lucide-react"
import InfoRow from "../InfoRow/InfoRow";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";

interface CostEstimateProps{
    itinerary: ItineraryInterface[]
}

export default function CostEstimate({itinerary}: CostEstimateProps){
    return(
        <div className="mx-4 border rounded-2xl border-gray-300 max-w-1/4 mt-8 bg-white">
            <CardTitle icon={<CircleDollarSign />} title={texts.itinerary_titles.cost_estimate}/>
            <InfoRow icon={<Bed />} information={texts.cost_estimate.accommodation} value={`${texts.real} ${itinerary[0].itinerary.costEstimate.accommodations}`} tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Utensils />} information={texts.cost_estimate.food} value={`${texts.real} ${itinerary[0].itinerary.costEstimate.food}`} tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Binoculars />} information={texts.cost_estimate.tours} value={`${texts.real} ${itinerary[0].itinerary.costEstimate.activities}`} tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Car />} information={texts.cost_estimate.transport} value={`${texts.real} ${itinerary[0].itinerary.costEstimate.transport}`} tailwindTags="px-2 py-3"/>
            <InfoRow icon={<ShoppingCart />} information={texts.cost_estimate.shop_and_extras} value={`${texts.real} ${itinerary[0].itinerary.costEstimate.extra}`} tailwindTags="px-2 py-3"/>
            <hr className="border-t border-dashed border-gray-300" />
            <div className="text-green-600 m-4 flex justify-between items-center">
                <p className="font-medium">Total Estimado</p>
                <p className="bg-green-100 p-2 rounded-2xl">{texts.real} {itinerary[0].itinerary.costEstimate.total}</p>
            </div>
            <p className="m-4 mt-8 text-primary-color bg-blue-100 p-2 rounded-2xl">
                <span className="text-blue-700 font-medium">{texts.tip}: </span>
                {texts.cost_estimate.you_informed} {texts.real} {itinerary[0].budgetTotal} {texts.cost_estimate.its_possible_adjust}
            </p>
        </div>
    )
}