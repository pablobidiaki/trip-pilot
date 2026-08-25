import { ReactNode } from "react"

interface WhatToDoCardProps {
    icon: ReactNode
    title: string
    texts: string[]
    isOpen: boolean
    onClick: () => void
}

export default function WhatToDoCard({ icon, title, texts, isOpen, onClick }: WhatToDoCardProps) {
    return (
        <div className="relative  transition-all duration-300 hover:scale-105">
            <div onClick={onClick}
                 className="bg-white rounded-2xl border border-gray-200 py-10 cursor-pointer">
                <div className="flex flex-col items-center">
                    <span>{icon}</span>
                    <h1 className="text-primary-color font-medium text-xl mb-2 text-center">{title}</h1>
                </div>
            </div>

            {isOpen && (
                <div className="absolute left-0 top-full z-20 w-full mt-2 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                    {texts.map((text, index) => (
                        <p key={index} className="text-second-color font-light text-sm">- {text} </p>
                    ))}
                </div>
            )}
        </div>
    )
}