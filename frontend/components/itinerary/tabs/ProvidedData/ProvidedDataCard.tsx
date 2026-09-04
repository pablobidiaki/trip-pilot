import { ReactNode } from "react"

interface ProvidedDataCardProps{
    icon: ReactNode
    title: string
    value: string
}

export default function ProvidedDataCard({icon, title, value}: ProvidedDataCardProps){
    return(
        <div className="mt-5 p-2 rounded-2xl bg-gray-100 flex flex-col items-center min-w-30 max-w-30 transition-all duration-200 hover:scale-105 cursor-default">  
            <span className="">{icon}</span>
            <p className="text-primary-color text-xl mb-2">{title}</p>
            <p className="text-second-color ">{value}</p>
        </div>
    )
}