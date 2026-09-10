import texts from "@/constants/texts"
import { TipsInterface } from "@/interfaces/itinerary.interface"
import TipsCard from "./TipsCard"
import { Van } from "lucide-react"

interface TipsProps {
    tips: TipsInterface[]
}

export default function Tips({ tips }: TipsProps) {
    return (
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div className="max-w-[60%] mx-auto bg-white shadow-2xl shadow-gray-300 rounded-2xl pb-2">
                <h1 className="text-4xl text-primary-color text-center pt-2 mb-8 font-medium">{texts.tips.title}</h1>
                <div className="grid grid-cols-2 gap-x-15">
                    {tips.map((tip, index) => (
                        <TipsCard key={index} title={tip.type} text={tip.text}/>
                    ))}
                </div>
            </div>
        </div>
    )
}