import { ReactNode } from "react"

interface UtilInfosTitleProps{
    icon: ReactNode,
    title: string
}

export default function UtilInfosTitle({icon, title}: UtilInfosTitleProps) {
    return (
        <div className="flex gap-4 mt-5 items-center">
            <span className="text-purple-color"> {icon}</span> 
            <h1 className="text-primary-color font-medium text-2xl">{title}</h1>
        </div>
    )
}