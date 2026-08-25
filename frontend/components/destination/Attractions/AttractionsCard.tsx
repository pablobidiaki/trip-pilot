import texts from "@/constants/texts"
import Image from "next/image"

interface AttractionsCardProps {
    image: string
    name: string
    description: string
    cost_estimate: number
}

export default function AttractionsCard({ image, name, description, cost_estimate }: AttractionsCardProps) {
    return (
        <div className="border border-gray-200 rounded-2xl bg-white">
            <img src={image}
                alt={name}
                className="w-full h-42 rounded-t-2xl"
            />
            <p className="text-2xl font-medium text-primary-color m-2">{name}</p>
            <p className="text-sm mx-2 text-second-color">{description}</p>
            <p className="m-2 text-primary-color">{texts.starting_at} <span className="rounded-2xl text-green-500 px-2 py-0.5 bg-green-200">{texts.real} {cost_estimate}</span></p>
        </div>
    )
}