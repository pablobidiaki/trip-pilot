import { auth } from "@/auth"

import Header from "@/components/ui/Header/Header"

import texts from "@/constants/texts"

import { DestinationInterface } from "@/interfaces/destination.interface"
import { getUserIdByEmail } from "@/services/user.service"

import { MoveLeft } from "lucide-react"
import Link from "next/link"
import FavoriteButton from "./FavoriteButton"

interface DestinationBannerProps {
    destination: DestinationInterface[]
}

export default async function DestinationBanner({destination}: DestinationBannerProps) {
    const session = await auth()
    const user = await getUserIdByEmail(session?.user?.email)
    
    return (
        <div className="relative overflow-hidden pb-15">
            <img src={destination[0].bannerURL} alt="Banner" className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"/>

            <div className="relative z-10 bg-white/20">
                <Header />
            </div>

            <div className="relative z-10 mt-5 mx-4 text-white">
                <div className="transition-all duration-300 hover:scale-[0.99]">
                    <Link href="/destinations" className="flex gap-2 items-center mb-5">
                        <MoveLeft />
                        <p>{texts.destination.return}</p>
                    </Link>
                </div>

                <h1 className="text-6xl max-w-2/5 font-medium">{destination[0].destination}</h1>
                <h2 className="mt-1 text-2xl font-thin max-w-xl">{destination[0].description}</h2>

            </div>

            <div className="absolute z-10 text-white right-4 top-20">
                <FavoriteButton userId={user.user.id} destinationId={destination[0].id}/>
            </div>
        </div>
    )
}