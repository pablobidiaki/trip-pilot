import { ChevronRight } from "lucide-react"
import { ReactNode } from "react"

interface UtilInfoCardProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function UtilInfoCard({icon, title, text}: UtilInfoCardProps){
    return(
    <div className="cursor-pointer flex justify-between items-center border border-gray-200 rounded-2xl bg-purple-50 mt-5 p-2 transition-all duration-200 hover:scale-102 hover:bg-purple-100">
            <span className="text-purple-color p-2 bg-purple-100 rounded-full m-1">{icon}</span>
            <div className="max-w-2/3">
                <h1 className="text-primary-color font-medium text-xl ">{title}</h1>
                <p className="text-second-color text-sm font-light">{text}</p>
            </div>
            <ChevronRight />
        </div>
    )
}