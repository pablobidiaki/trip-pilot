import { ReactNode } from "react"

interface ProvidedDataCardProps{
    icon: ReactNode
    title: string
    value: string
}

export default function ProvidedDataCard({icon, title, value}: ProvidedDataCardProps){
    return(
        <div className="mt-5 p-2 rounded-2xl bg-blue-100 flex flex-col items-center transition-all duration-200 hover:scale-105 cursor-default
            md:max-w-32 md:min-w-32 md:mx-auto md:mt-0
        ">  
            <span className="text-blue-700">{icon}</span>
            <p className="text-primary-color text-xl mb-2">{title}</p>
            <p className="text-second-color ">{value}</p>
        </div>
    )
}