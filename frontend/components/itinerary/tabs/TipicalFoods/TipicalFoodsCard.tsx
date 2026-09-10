import texts from "@/constants/texts"

interface TipicalFoodsCardProps {
    imageURL: string
    name: string
    description: string
    category: string
    averagePrice: number
}

export default function TipicalFoodsCard({ imageURL, name, description, category, averagePrice }: TipicalFoodsCardProps) {
    return (
        <div className="group w-100 h-fit bg-white rounded-2xl shadow-2xl shadow-gray-200 transition-all hover:duration-200 hover:scale-105 cursor-default">
            <img src={imageURL}
                alt={`${name} image`}
                className="w-100 h-75 rounded-t-2xl object-cover"
            />
            <div className="px-3 py-2">
                <p className="text-2xl text-primary-color font-medium text-center mb-3">{name}</p>
                <p className="text-second-color font-light text-lg line-clamp-2 group-hover:line-clamp-none">
                    <span className="text-primary-color font-medium text-lg">{texts.tipicalFood.description}</span>
                    {description}
                </p>
                <p className="text-second-color font-light text-lg">
                    <span className="text-primary-color font-medium text-lg">{texts.tipicalFood.category}</span>
                    {category}
                </p>
                <p className="mt-auto text-primary-color font-medium text-lg py-2">{texts.tipicalFood.averagePrice}
                    <span className="bg-green-100 text-green-500 w-fit py-1 px-3 rounded-2xl">{texts.real} {averagePrice.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    </span>
                </p>
            </div>
        </div>
    )
}