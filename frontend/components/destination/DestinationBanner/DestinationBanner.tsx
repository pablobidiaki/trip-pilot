import Header from "@/components/home/Header/Header";
import WhiteButton from "@/components/ui/Buttons/WhiteButton";
import texts from "@/constants/texts";
import { Destination } from "@/interfaces/destination.interface";
import { Heart, MoveLeft } from "lucide-react";
import Link from "next/link";

interface DestinationBannerProps{
    destination: Destination[]
}

export default function DestinationBanner({destination}: DestinationBannerProps){
    return (
        <div className="relative overflow-hidden pb-15">
            <img src={"https://i.imgur.com/g3o8WGt.jpeg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"
            />
            <div className="relative z-10 bg-white/20">
                <Header />
            </div>
            <div className="relative z-10 mt-5 mx-4 text-white">
                <Link href={'/destinations'} className="flex gap-2 items-center mb-5">
                    <MoveLeft />
                    <p>{texts.destination.return}</p>
                </Link>
                <h1 className="text-6xl max-w-2/5 font-medium">{destination[0].destination}</h1>
                <h2 className="mt-1 text-2xl font-thin max-w-xl">{destination[0].description}</h2>
            </div>

            <div className="absolute z-10 text-white right-4 top-20 ">
                <Heart className="cursor-pointer transition-colors hover:fill-red-500 hover:text-red-500"/>
            </div>
        </div>
    )
}