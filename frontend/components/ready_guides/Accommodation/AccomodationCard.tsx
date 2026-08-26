import texts from "@/constants/texts"
import { MapPin, StarIcon } from "lucide-react"
import Image from "next/image"

interface AccomodationCardProps{
    image: string, 
    days: string, 
    name: string, 
    review?: number, 
    address: string, 
    text: string, 
    price: number
}

export default function AccomodationCard({image, days, name, review, address, text, price}: AccomodationCardProps){
    return(
        <div className="flex justify-between border border-gray-200 rounded-2xl mx-4 p-2 items-center mb-5">
            <img src={image}
                   alt={name}
                   className="w-70 max-h-40 rounded-2xl"
            />
            <div className="w-2/3">
                <p className="text-second-color text-sm">{days}</p>
                <p className="text-primary-color font-medium text-xl">{name}</p>
                {/* TODO: create a component for this */}
                    <div className="flex gap-2 items-center my-3">
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <div className="flex gap-2 ml-2">
                            <p>{review}</p>
                        </div>
                    </div>
                <div className="flex items-center text-second-color my-2 gap-2">
                    <MapPin size={20}/>
                    <p>{address}</p>
                </div>
                <p className="text-second-color">{text}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-2xl text-center text-second-color text-sm">
                <p>{texts.starting_at}</p>
                <p className="text-primary-color font-medium text-xl">{texts.real} {price}</p>
                <p>{texts.per_person}</p>
            </div>
        </div>
    )
}