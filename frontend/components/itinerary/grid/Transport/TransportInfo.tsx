import { ReactNode } from "react"

interface TransportInfoProps{
    icon: ReactNode,
    title: string,
    first_info: string,
    second_info?: string
}

export default function TransportInfo({icon, title, first_info, second_info}: TransportInfoProps){
    return(
        <div className="flex gap-2 p-4">
            {icon}
            <div>
                <p className="text-primary-color font-medium">{title}</p>
                <p className="text-second-color">{first_info}</p>
                {second_info && <p className="text-second-color">{second_info}</p>}
            </div>
        </div>
    )
}