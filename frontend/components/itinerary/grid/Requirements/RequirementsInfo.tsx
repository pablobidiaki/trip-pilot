import { ReactNode } from "react"

interface RequirementsInfoProps{
    icon: ReactNode,
    text: string
}

export default function RequirementsInfo({icon, text}: RequirementsInfoProps){
    return(
        <div className="flex gap-2 mb-3">
            <span>{icon}</span>
            <p className="text-sm text-primary-color font-medium">{text}</p>
        </div>
    )
}