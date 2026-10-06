import texts from "@/constants/texts";
import { TipsInterface } from "@/interfaces/itinerary.interface";

interface TipsProps {
    tips: TipsInterface[]
}

export default function Tips({ tips }: TipsProps) {
    return (
        <div className="bg-white border rounded-2xl border-gray-100
            xl:max-w-1/2
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">6</span> {texts.itineraryTitles.tips}</h1>

            <ul className="list-disc marker:text-primary-color py-2 pl-8 max-w-[95%] text-second-color">
                {tips.map((tip, index) => (
                    <li key={index} className="mb-3">{tip.text}</li>
                ))}
            </ul>
        </div>
    )
}