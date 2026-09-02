import { Clock, CircleDollarSign } from "lucide-react" 
import texts from "@/constants/texts"
import Link from "next/link"
import InfoItem from "../../ui/InfoItem/InfoItem"

interface CardProps{
    image: string,
    title: string,
    text: string,
    days: number,
    trip_type: string,
    price: string,
    route_to_itinerary: string
}

export default function ItineraryExamplesCard({image, title, text, days, trip_type, price, route_to_itinerary}: CardProps){
    return(
        <div className="cursor-pointer border border-gray-300 rounded-2xl bg-white transition-all hover:duration-200 hover:scale-105">
            <img src={image}
                   alt={`${title} image`}
                   className="h-40 w-full mask-cover rounded-t-2xl mb-4"
            />

            <h1 className="text-primary-color text-2xl font-medium mx-4">{title}</h1>
            <p className="text-second-color text-sm mx-4 mb-2">{text}</p>
            
            <div  className="flex gap-4 mx-4 text-second-color text-sm">
                <InfoItem icon={<Clock size={20}/>} text={`${days} ${texts.itinerary_example.days}`}/>
                <InfoItem icon={<CircleDollarSign size={20}/>} text={trip_type}/>
            </div>

            <hr className="mx-4 my-2 border-gray-300" />

            <div className="flex justify-between  mx-4 mb-4">
                <p className="text-second-color">{texts.itinerary_example.starting_at} <span className="text-primary-color font-bold">{texts.real} {price}</span></p>
                <p className="text-link-color underline font-medium">
                    <Link href={route_to_itinerary}>{texts.itinerary_example.view_itinerary}</Link>
                </p>
            </div>
        </div>
    )
}