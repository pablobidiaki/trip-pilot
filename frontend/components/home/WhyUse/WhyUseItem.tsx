import { ReactNode } from "react"

interface itemProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function WhyUseItem({icon, title, text}: itemProps){
    return(
        <div className="flex flex-col items-center gap-2 mt-5 lg:flex-row ">
            <div className="p-3 rounded-full bg-blue-200">
                <span className="text-blue-600">{icon}</span>
            </div>
            <div>
                <h1 className="text-primary-color text-xl text-center md:text-start">{title}</h1>
                <p className="text-second-color text-sm text-center md:text-start">{text}</p>
            </div>
        </div>
    )
}