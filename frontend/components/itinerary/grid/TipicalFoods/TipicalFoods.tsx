import { TipicalFoodsInterface } from "@/interfaces/itinerary.interface"
import TipicalFoodsCard from "./TipicalFoodsCard"
import texts from "@/constants/texts"

interface TipicalFoodsProps {
    tipicalFoods: TipicalFoodsInterface[]
}

export default function TipicalFoods({ tipicalFoods }: TipicalFoodsProps) {
    return (
        <div className="bg-white border rounded-2xl  max-w-2/5 min-w-2/5 border-gray-100 mt-8">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">4</span> {texts.itineraryTitles.tipicalFoods}</h1>
            <div className="">
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
        </div>
    )
}