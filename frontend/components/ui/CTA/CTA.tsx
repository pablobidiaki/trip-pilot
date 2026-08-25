import WhiteButton from "../Buttons/WhiteButton"
import texts from "@/constants/texts"
import { Toolbox } from "lucide-react"
import { ReactNode } from "react"

interface CTAProps{
    icon: ReactNode,
    title: string,
    text: string
    buttonText: string
}

export default function CTA({icon, title, text, buttonText}: CTAProps){
    return(
        <div className="rounded-xl
                        bg-linear-to-r
                        from-blue-600
                        to-violet-600
                        mx-4
                        mt-15
                        p-4
                        flex
                        justify-evenly
                        items-center">
            <span className="text-white">{icon}</span>
            <div className="text-white">
                <h1 className="text-5xl">{title}</h1>
                <p className="text-gray-200">{text}</p>
            </div>
            <div>
                <WhiteButton text={buttonText} type="button"/>
            </div>
        </div>
    )
}