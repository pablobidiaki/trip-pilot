import { ReactNode } from "react"

interface CardTitleProps{
    icon: ReactNode,
    title: string
}

export default function CardTitle({icon, title}: CardTitleProps){
    return(
        <div className="flex items-center gap-2 bg-blue-100 rounded-t-2xl py-1 px-2 font-medium text-xl text-primary-color">
            <span>{icon}</span>
            <h1 className="">{title}</h1>
        </div>
    )
}