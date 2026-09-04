import { TipicalFoodsInterface } from "@/interfaces/itinerary.interface"
import TipicalFoodsCard from "./TipicalFoodsCard"
import CardTitle from "../CardTitle/CardTitle"
import { Utensils } from "lucide-react"
import texts from "@/constants/texts"

interface TipicalFoodsProps {
    tipicalFoods: TipicalFoodsInterface[]
}

export default function TipicalFoods({ tipicalFoods }: TipicalFoodsProps) {
    return (
        <div className="bg-white border rounded-2xl max-w-1/3 min-w-1/3 border-gray-300 mt-8">
            <CardTitle icon={<Utensils />} title={texts.itinerary_titles.tipical_foods} />
            {tipicalFoods.map((food, index) => (
                <TipicalFoodsCard key={index}
                    imageURL={food.imageURL}
                    title={food.title}
                    description={food.description}
                    averagePrice={food.averagePrice}
                    category={food.category}
                />
            ))}
        </div>
    )
}