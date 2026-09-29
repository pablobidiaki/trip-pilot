import texts from "@/constants/texts"
import { DestinationInterface } from "@/interfaces/destination.interface"
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import Link from "next/link"

interface RecommendationProps {
    type: string
    readyGuide?: ReadyGuideInterface
    destination?: DestinationInterface
    path?: string
}

export default function RecommendationCard({ type, readyGuide, destination, path }: RecommendationProps) {
    return (
        <Link href={`${path}/${readyGuide ? readyGuide?.id : destination?.id}`} className="bg-background-color flex flex-col rounded-2xl border border-gray-100 transition-all hover:duration-200 hover:scale-101">
            <p className="absolute mt-2 ml-2 object-cover z-50 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{type}</p>
            <img className="relative rounded-t-2xl min-h-55 max-h-55" src={readyGuide ? readyGuide?.imageURL : destination?.imageURL} />
            <h1 className="mx-2 text-primary text-2xl truncate">{readyGuide ? readyGuide?.title : destination?.destination}</h1>
            <p className="mx-2  text-second-color text-sm line-clamp-2">{readyGuide ? readyGuide?.description : destination?.description}</p>
            <p className="mx-2 text-primary-color mt-2 text-lg truncate">{readyGuide ?
                readyGuide.cities.map((city, index) => (
                    <span key={index} className="mr-3">{city}</span>
                )) : destination?.country}
            </p>
            <p className="mx-2 mt-2 text-green-500 text-xl font-medium">{texts.real} {readyGuide ? readyGuide?.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) : destination?.averageCost.total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
        </Link>
    )
}