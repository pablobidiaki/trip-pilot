"use client"

import WhiteButton from "../Buttons/WhiteButton"
import { ReactNode } from "react"
import { useRouter } from "next/navigation";

interface CTAProps {
    icon: ReactNode,
    title: string,
    text: string
    buttonText: string
    isHomePage: boolean
    destination?: string
}

export default function CTA({ icon, title, text, buttonText, isHomePage, destination }: CTAProps) {
    const router = useRouter()

    const handleButton = () => {
        isHomePage ?
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            }) : router.push("/#criar-roteiro")

            localStorage.setItem('destination', destination!)
    }

    return (
        <div className="rounded-xl bg-linear-to-r from-blue-600 to-violet-600 mx-2 mt-15 p-4 flex flex-col items-center
        md:flex-row md:justify-evenly  
        xl:justify-evenly xl:items-center
        ">
            <span className="text-white">{icon}</span>
            <div className="text-white text-center">
                <h1 className="text-4xl 
                    md:text-2xl
                    xl:text-5xl
                ">{title}</h1>
                <p className="text-gray-300 mb-3 text-sm
                    xl:text-lg
                ">{text}</p>
            </div>
            <div onClick={handleButton}>
                <WhiteButton text={buttonText} type="button" />
            </div>
        </div>
    )
}