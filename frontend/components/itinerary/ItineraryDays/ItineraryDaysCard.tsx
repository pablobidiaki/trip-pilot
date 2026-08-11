import texts from "@/constants/texts"
import Image from "next/image"

interface ItineraryDaysCardProps{
    day: string
    title: string,
    image: string,
    morning: string,
    afternoon: string,
    evening: string,
    cost_estimate: number
}

export default function ItineraryDaysCard({day, title, image, morning, afternoon, evening, cost_estimate}: ItineraryDaysCardProps){
    return(
        <div className="border border-gray-300 rounded-2xl overflow-hidden flex flex-col max-w-">
            <p className="bg-blue-100 text-center rounded-t-2xl p-1 text-primary-color font-medium">{day}</p>
            <Image src={image} alt="Imagem tour" height={50} width={50} className="max-h-40 w-full" />
            <p className="p-2 text-primary-color font-medium text-xl">{title}</p>
            <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.morning}<span className="text-second-color">{morning}</span></p>
            <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.afternoon}<span className="text-second-color">{afternoon}</span></p>
            <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.evening}<span className="text-second-color">{evening}</span></p>
            <div className="flex justify-between items-center p-2">
                <p className="">{texts.itinerary.cust} </p>
                <p className="text-green-500 bg-green-200 p-2 rounded-2xl">R$ {cost_estimate}</p>
            </div>
        </div>
    )
}