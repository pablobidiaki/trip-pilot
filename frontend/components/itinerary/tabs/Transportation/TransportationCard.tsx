import texts from "@/constants/texts"
import { CheckCircle2 } from "lucide-react"
import { ReactNode } from "react"

interface TransportationCardProps {
    icon: ReactNode
    type: string
    averagePrice: number
    advantages: string[]
    typePayment: string
}

export default function TransportationCard({ icon, type, averagePrice, advantages, typePayment }: TransportationCardProps) {
    return (
        <div className="p-2 rounded-2xl bg-gray-50 flex flex-col items-center w-full mt-5">
            <span className="text-primary-color">{icon}</span>
            <h1 className="text-primary-color font-medium text-xl text-center">{type}</h1>
            <p className="text-second-color text-sm font-light">{typePayment}</p>
            <p className="text-green-500 mt-5 mb-8 text-xl py-2 px-4 bg-green-100 rounded-2xl ">{texts.real} {averagePrice.toLocaleString("pt-BR")}</p>
            {advantages.map((advantages, index) => (
                <div key={index} className="flex justify-center pb-2 gap-2 mt-5 items-center w-full border-b border-b-gray-200">
                    <CheckCircle2 className="text-green-500"/>
                    <p className="text-primary-color font-light">{advantages}</p>
                </div>
            ))}
        </div>
    )
}