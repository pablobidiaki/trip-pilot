import { ReactNode } from "react";

interface CardProps{
    icon: ReactNode,
    iconBgColor: string,
    iconColor:string,
    title: string,
    text: string
}

export default function HowItWorksCard({icon, iconBgColor, iconColor, title, text }: CardProps){
    return(
        <div className={`flex flex-col items-center justify-center border border-gray-300 p-2 rounded-2xl mt-5`}>
            <div className={`p-3 rounded-full ${iconBgColor}`}>
                <span className={` ${iconColor}`}>{icon}</span>
            </div>
            <h1 className="text-primary-color font-medium text-2xl mt-1">{title}</h1>
            <p className="text-second-color text-sm text-center max-w-62">{text}</p>
        </div>
    )
}