import { ReactNode } from "react"

interface DestinationInfosProps{
    icon: ReactNode
    title: string
    description: string
}

export default function DestinationInfos({icon, title, description}: DestinationInfosProps){
    return(
        <div className="flex flex-col items-center p-5 rounded-2xl text-center border bg-white border-gray-100">
            <span className="mx-auto mb-5">{icon}</span>
            <p className="text-primary-color text-xs">{title}</p>
            <p className="text-second-color text-xs">{description}</p>
        </div>
    )
}