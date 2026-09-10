import { ReactNode } from "react";

interface TimeInfosProps{
    icon: ReactNode
    time: string
    description: string
}

export default function TimeInfos({icon, time, description}: TimeInfosProps){
    return(
        <div className="pb-2 mb-2 flex flex-col mx-5 items-center  bg-gray border bg-gray-100 border-gray-200 rounded-2xl transition-all hover:duration-200 hover:scale-105 cursor-default">
            <span className="w-fit mx-auto pt-2">{icon}</span>
            <p className="text-primary-color text-lg font-medium mt-2">{time}</p>
            <p className="text-second-color text-sm mx-2 text-center">{description}</p>
        </div>
    )
}