import { ReactNode } from "react"

interface itemProps{
    icon: ReactNode,
    text: string
}

export default function InfoItem({icon, text}: itemProps){
    return(
        <div className="flex items-center gap-1">
            <span>{icon}</span>
            <p>{text}</p>
        </div>
    )
}