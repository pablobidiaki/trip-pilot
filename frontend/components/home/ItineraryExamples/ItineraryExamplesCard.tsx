import { Clock, CircleDollarSign } from "lucide-react"
import texts from "@/constants/texts"
import Link from "next/link"
import InfoItem from "../../ui/InfoItem/InfoItem"

interface CardProps {
    image: string,
    title: string,
    text: string,
    days: number,
    trip_type: string,
    price: number,
    route_to_itinerary: string
}

export default function ItineraryExamplesCard({ image, title, text, days, trip_type, price, route_to_itinerary }: CardProps) {
    return (
        <div  className="cursor-pointer w-full border border-gray-100 rounded-2xl bg-white transition-all hover:duration-200 hover:scale-101
            2xl:w-[24%] 2xl:max-w-[24%] 
        ">
            <Link href={route_to_itinerary}>
                <img src={image}
                    alt={`${title} image`}
                    className="h-40 mask-cover rounded-t-2xl mb-4 w-full
                    md:h-60
                "/>

                <h1 className="text-primary-color text-2xl font-medium mx-4 truncate">{title}</h1>
                <p className="text-second-color text-sm mx-4 mb-2 line-clamp-2">{text}</p>

                <div className="flex gap-4 mx-4 text-second-color text-sm">
                    <InfoItem icon={<Clock size={20} />} text={`${days} ${texts.days}`} />
                    <InfoItem icon={<CircleDollarSign size={20} />} text={trip_type} />
                </div>

                <hr className="mx-4 my-2 border-gray-100" />

                <div className="flex justify-between mx-4 mb-4">
                    <p className="text-second-color">{texts.startingAt}
                        <span className="text-primary-color font-bold">{texts.real} {price.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                        </span>
                    </p>
                    <p className="text-link-color underline font-medium">{texts.itineraryExample.viewItinerary}</p>
                </div>
            </Link>
        </div>
    )
}