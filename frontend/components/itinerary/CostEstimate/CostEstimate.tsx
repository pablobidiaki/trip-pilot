import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { CircleDollarSign, Bed, Utensils, Binoculars, Car, ShoppingCart } from "lucide-react"
import InfoRow from "../InfoRow/InfoRow";

export default function CostEstimate(){
    return(
        <div className="mx-4 border rounded-2xl border-gray-300 max-w-1/4 mt-8 bg-white">
            <CardTitle icon={<CircleDollarSign />} title={texts.itinerary_titles.cost_estimate}/>
            <InfoRow icon={<Bed />} information={texts.cost_estimate.accommodation} value="R$ 1,920.00" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Utensils />} information={texts.cost_estimate.food} value="R$ 800,00" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Binoculars />} information={texts.cost_estimate.tours} value="R$ 700,00" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<Car />} information={texts.cost_estimate.transport} value="R$ 400,00" tailwindTags="px-2 py-3"/>
            <InfoRow icon={<ShoppingCart />} information={texts.cost_estimate.shop_and_extras} value="R$ 200,00" tailwindTags="px-2 py-3"/>
            <hr className="border-t border-dashed border-gray-300" />
            <div className="text-green-600 m-4 flex justify-between items-center">
                <p className="font-medium">Total Estimado</p>
                <p className="bg-green-100 p-2 rounded-2xl">R$ 4.020,00</p>
            </div>
            <p className="m-4 mt-8 text-primary-color bg-blue-100 p-2 rounded-2xl">
                <span className="text-blue-700 font-medium">{texts.tip}: </span>
                {texts.cost_estimate.you_informed} R$ 3.000,00 {texts.cost_estimate.its_possible_adjust}
            </p>
        </div>
    )
}