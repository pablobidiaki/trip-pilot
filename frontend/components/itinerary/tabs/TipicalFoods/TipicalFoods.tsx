import { TipicalFoodsInterface } from "@/interfaces/itinerary.interface"
import TipicalFoodsCard from "./TipicalFoodsCard"

interface TipicalFoodsProps {
    tipicalFoods: TipicalFoodsInterface[]
}

export default function TipicalFoods({ tipicalFoods }: TipicalFoodsProps) {
    return (
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div className="flex items-stretch justify-evenly gap-5">
                {tipicalFoods.map((food, index) => (
                    <TipicalFoodsCard key={index}
                        imageURL={food.imageURL}
                        name={food.title}
                        description={food.description}
                        category={food.category}
                        averagePrice={food.averagePrice}
                    />
                ))}
            </div>
        </div>
    )
}