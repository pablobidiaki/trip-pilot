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

export default async function DestinationBanner({ destination }: DestinationBannerProps) {
    let user
    const session = await auth()
    if (session) user = await getUserIdByEmail(session?.accessToken!, session?.user?.email)

    return (
        <div className="relative overflow-hidden pb-15 w-full">
            <img src={destination[0].bannerURL} alt="Banner" className="absolute inset-0 h-full w-full object-cover z-0 brightness-50" />

            <div className="relative z-50 bg-white/20">
                <Header />
            </div>

            <div className="relative z-10 mt-5 mx-4 text-white">
                <div className="transition-all duration-300 hover:scale-[0.99]">
                    <Link href="/destinations" className="flex gap-2 items-center mb-5">
                        <MoveLeft className=""/>
                        <p className="text-sm">{texts.destination.return}</p>
                    </Link>
                </div>

                <h1 className="text-xl font-medium
                    md:text-2xl
                    lg:text-4xl lg:max-w-[50%]
                ">{destination[0].destination}</h1>
                <h2 className="mt-1 text-xs font-thin text-gray-300
                    md:text-sm md:max-w-[50%]
                    lg:text-xl lg:max-w-xl
                ">{destination[0].description}</h2>

            </div>

            {user &&
                <div className="absolute z-10 text-white right-4 top-18">
                    <FavoriteButton userId={user?.user?.id} destinationId={destination[0].id} />
                </div>
            }
        </div>
    )
}