import ReviewBar from "@/components/ui/ReviewBar/ReviewBar"
import texts from "@/constants/texts"
import { MapPin, StarIcon } from "lucide-react"
import Image from "next/image"

interface AccomodationCardProps {
    image: string,
    days: string,
    name: string,
    review?: number,
    address: string,
    text: string,
    price: number
}

export default function AccomodationCard({ image, days, name, review, address, text, price }: AccomodationCardProps) {
    return (
        <div className="flex flex-col justify-between border border-gray-100 rounded-2xl mx-2 p-2 items-center mb-5
            md:flex-row md:gap-2
        ">
            <img src={image}
                alt={name}
                className="w-full max-h-50 min-h-50 rounded-xl
                    md:max-w-[35%]
                    2xl:max-w-[25%]
                "
            />
            <div className="w-full
                md:w-2/3
            ">
                <p className="text-second-color text-sm">{days}</p>
                <p className="text-primary-color font-medium text-xl">{name}</p>

                <ReviewBar rating={Number(review)} />

                <div className="flex items-center text-second-color my-2 gap-2">
                    <MapPin size={20} />
                    <p className="text-xs">{address}</p>
                </div>
                <p className="text-second-color text-sm">{text}</p>
            </div>
            <div className="bg-purple-100 px-3 py-1 rounded-2xl text-center text-second-color text-sm mt-2
                md:w-[22%]
            ">
                <p className="md:text-xs">{texts.startingAt}</p>
                <p className="text-primary-color font-medium text-xl
                    md:text-sm
                ">
                    {texts.real} {price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
                </p>
                <p className="md:text-xs">{texts.perPerson}</p>
            </div>
        </div>
    )
}