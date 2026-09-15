import { TipicalFoodsInterface } from "@/interfaces/itinerary.interface"
import TipicalFoodsCard from "./TipicalFoodsCard"

interface TipicalFoodsProps {
    tipicalFoods: TipicalFoodsInterface[]
}

export default function TipicalFoods({ tipicalFoods }: TipicalFoodsProps) {
    return (
        <div className="relative animate-[optionSelector_300ms_ease-out] bg-white rounded-2xl">
            <h1 className="text-center py-4 text-primary-color text-5xl font-medium">Experiências Gastronômicas</h1>    
            <div className="flex items-stretch justify-evenly p-5 pb-10 ">
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