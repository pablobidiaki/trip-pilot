import { ReactNode } from "react"

interface InfoCardProps{
    icon: ReactNode,
    title: string,
    text: string,
    tailwindTags?: string
}

export default function InfoCard({icon, title, text, tailwindTags}: InfoCardProps){
    return(
        <div className={`flex items-center gap-2 border border-gray-200 rounded-2xl p-1 ${tailwindTags}`}>
            <span className="rounded-full bg-purple-100 text-purple-color m-2 p-2">{icon}</span>
            <div className="p-1">
                <h1 className="text-xl font-medium text-primary-color">{title}</h1>
                <p className="text-md text-second-color">{text}</p>
            </div>
        </div>
    )
}