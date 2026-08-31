import texts from "@/constants/texts"

interface TipicalFoodsCardProps{
    imageURL: string
    title: string
    description: string
    averagePrice: number
    category: string
}

export default function TipicalFoodsCard({imageURL, title, description, averagePrice, category}: TipicalFoodsCardProps){
    return(
        <div className="flex rounded-2xl m-4 border border-gray-200">
            <img src={imageURL} className="rounded-l-2xl max-w-26" />
            <div className="mr-4 ml-2">
                <p className="text-primary-color font-medium">Nome: <span className="text-second-color">{title}</span></p>
                <p className="text-primary-color font-medium">Descrição: <span className="text-second-color">{description}</span></p>
                <p className="text-primary-color font-medium">Categoria: <span className="text-second-color">{category}</span></p>
                <p className="text-primary-color font-medium">Preço médio: <span className="text-second-color">{texts.real} {averagePrice}</span></p>
            </div>
        </div>
    )
}