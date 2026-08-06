import { ReactNode } from "react";

interface InfoRowProps{
    icon: ReactNode,
    information: string,
    value: string
}

export default function InfoRow({icon, information, value}: InfoRowProps){
    return(
        <div className="flex justify-between px-2 py-3">
            <div className="flex gap-2">
                <span className="text-blue-600">{icon}</span>
                <p className="font-medium text-primary-color">{information}</p>
            </div>
            <p className="text-second-color">{value}</p>
        </div>
    )
}