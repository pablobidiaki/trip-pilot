import { ReactNode } from "react"

interface GuideInfoCardProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function GuideInfoCard({icon, title, text}: GuideInfoCardProps){
    return(
        <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-2xl">
            <span>{icon}</span>
            <div>
                <p className="text-second-color">{title}</p>
                <p className="text-primary-color font-medium">{text}</p>
            </div>
        </div>
    )
}