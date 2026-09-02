import { ReactNode } from "react";

interface CardProps{
    icon: ReactNode,
    iconBgColor: string,
    title: string,
    text: string
}

export default function InfoCard({icon, iconBgColor, title, text }: CardProps){
    return(
        <div className={`bg-white flex flex-col items-center justify-center border border-gray-300 p-2 rounded-2xl mt-5`}>
            <div className={`p-3 rounded-full ${iconBgColor}`}>
                <span>{icon}</span>
            </div>
            <h1 className="text-primary-color font-medium text-2xl mt-1">{title}</h1>
            <p className="text-second-color text-sm text-center max-w-62">{text}</p>
        </div>
    )
}