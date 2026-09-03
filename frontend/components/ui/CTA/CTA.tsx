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
}

export default function CTA({ icon, title, text, buttonText, isHomePage }: CTAProps) {
    const router = useRouter()

    const handleButton = () => {
        isHomePage ?
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            }) : router.push("/#criar-roteiro")
    }

    return (
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
            <div onClick={handleButton}>
                <WhiteButton text={buttonText} type="button" />
            </div>
        </div>
    )
}