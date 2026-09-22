import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { Clock, Heart, Landmark } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth"
import { getUserIdByEmail } from "@/services/user.service";
import FavoriteButton from "@/components/destination/DestinationBanner/FavoriteButton";

interface GuideCardProps {
    id: string,
    image: string,
    title: string,
    cities: string[],
    duration: number,
    type: string,
    description: string,
    price: number
}

export default async function GuideCard({ id, image, title, cities, duration, type, description, price }: GuideCardProps) {
    const session = await auth()
    const user = await getUserIdByEmail(session?.user?.email)

    return (
        <Link href={`/ready_guides/${id}`}>
            <div className="bg-white relative mb-2 mt-10 max-w-100 overflow-hidden rounded-2xl border border-gray-300 transition-all duration-200  hover:scale-101">
                <div className="absolute right-2 mt-1">
                    <FavoriteButton userId={user.user.id} readyGuideId={id}/>
                </div>

                <img
                    src={image}
                    alt={`${title} image`}
                    width={75}
                    height={75}
                    className="w-full max-h-[250] min-h-[250] object-cover"
                />

                <h1 className="text-primary-color font-medium text-2xl mx-2 mt-2 truncate">{title}</h1>
                <div className="flex">
                    {cities.map((city, index) => (
                        <h2 key={index} className="text-second-color mx-2 text-sm">{city}</h2>
                    ))}
                </div>

                <div className="flex gap-5 mx-2 my-2">
                    <InfoItem icon={<Clock />} text={`${duration.toString()} dias`} />
                    <InfoItem icon={<Landmark />} text={type} />
                </div>

                <p className="text-primary-color mx-2 text-sm line-clamp-2">{description}</p>
                <div className=" flex justify-between items-center mx-2 mb-2 mt-5">
                    <p className="p-2 bg-green-200 text-green-500 rounded-2xl">{texts.real} {price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    </p>
                    <button className="rounded-2xl cursor-pointer p-2 border border-[#6366F1] text-[#6366F1]" >{texts.itineraryExample.viewItinerary}</button>
                </div>
            </div>
        </Link>
    )
}