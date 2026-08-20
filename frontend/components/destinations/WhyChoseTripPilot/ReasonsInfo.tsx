import { ReactNode } from "react"

interface ReasonsInfoProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function ReasonsInfo({icon, title, text}:ReasonsInfoProps){
    return(
        <div className="flex gap-2 items-center my-5 mx-2">
            <span className="text-purple-color p-2 rounded-full bg-purple-100">{icon}</span>
            <div>
                <h1 className="text-primary-color font-medium">{title}</h1>
                <p className="text-xs text-second-color font-light">{text}</p>
            </div>
        </div>
    )
}