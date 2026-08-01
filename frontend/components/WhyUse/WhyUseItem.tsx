import { ReactNode } from "react"

interface itemProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function WhyUseItem({icon, title, text}: itemProps){
    return(
        <div className="flex items-center gap-2 mt-5">
            <div className="p-3 rounded-full bg-blue-200">
                <span className="text-blue-700">{icon}</span>
            </div>
            <div>
                <h1 className="text-primary-color text-xl">{title}</h1>
                <p className="text-second-color text-sm">{text}</p>
            </div>
        </div>
    )
}