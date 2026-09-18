"use client"

import { useSession } from "next-auth/react"
import GradientButton from "../../ui/Buttons/GradientButton"
import Link from "next/link"
import texts from "@/constants/texts"
import { Bookmark, Briefcase, Plane } from "lucide-react"
import InitialPageInfoCard from "./InitialPageInfoCard"


export default function InitialPage(){
    const cardInfos = [
        {
            icon: <Briefcase className="text-purple-500" />,
            title: "Roteiros criados",
            value: 12,
            bgColor: "bg-purple-100"
        },
        {
            icon: <Bookmark className="text-green-500" />,
            title: "Itens salvos",
            value: 28,
            bgColor: "bg-green-100"
        },
        {
            icon: <Plane className="text-blue-500" />,
            title: "Países visitados",
            value: 5,
            bgColor: "bg-blue-100"
        }
    ]

    const { data: session } = useSession()
    return(
        <div className="">
            <div className="flex justify-between items-center">
                <div className="mx-5 gap-2">
                    <p className="text-primary-color text-3xl font-medium">{texts.profile.hello} {session?.user?.name}</p>
                    <p className="text-second-color text-sm font-light">{texts.profile.readyForNextAdventure}</p>
                </div>
                <Link className="my-5 mx-5" href="/">
                    <GradientButton text={texts.profile.createScript} type="button" />
                </Link>
            </div>
            <div className="flex items-stretch gap-5 p-5">
                {cardInfos.map((info, index) => (
                    <InitialPageInfoCard key={index} icon={info.icon} title={info.title} value={info.value} bgColor={info.bgColor} />
                ))}
            </div>
        </div>
    )
}