import { ReactNode } from "react";

interface InfoRowProps{
    icon: ReactNode,
    information: string,
    value: string,
    tailwindTags?: string
}

export default function InfoRow({icon, information, value, tailwindTags = ""}: InfoRowProps){
    return(
        <div className={`flex justify-between ${tailwindTags}`}>
            <div className="flex gap-2">
                <span className="text-blue-600">{icon}</span>
                <p className="font-medium text-primary-color">{information}</p>
            </div>
            <p className="text-second-color">{value}</p>
        </div>
    )
}