import { ReactNode } from "react"

interface itemProps{
    icon: ReactNode,
    title: string,
    text: string
}

export default function WhyUseItem({icon, title, text}: itemProps){
    return(
        <div className="flex flex-col items-center gap-y-2 mt-5 
            lg:max-w-[19%]
            xl:flex-row xl: gap-2
        ">
            <div className="p-3 rounded-full bg-blue-200">
                <span className="text-blue-600">{icon}</span>
            </div>
            <div>
                <h1 className="text-primary-color text-xl text-center 
                    xl:text-start lg:text-lg
                ">
                    {title}
                </h1>
                <p className="text-second-color text-sm text-center 
                    xl:text-start lg:text-sm
                ">
                    {text}
                </p>
            </div>
        </div>
    )
}