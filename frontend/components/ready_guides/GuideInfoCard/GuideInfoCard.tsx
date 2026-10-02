import { ReactNode } from "react"

interface GuideInfoCardProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function GuideInfoCard({icon, title, text}: GuideInfoCardProps){
    return(
        <div className="flex flex-col items-center gap-1 bg-gray-100 p-2 rounded-2xl
            md:flex-row md:gap-5
        ">
            <span>{icon}</span>
            <div>
                <p className="text-second-color text-center
                    md:text-start
                ">{title}</p>
                <p className="text-primary-color font-medium text-center
                    md:text-start
                ">{text}</p>
            </div>
        </div>
    )
}