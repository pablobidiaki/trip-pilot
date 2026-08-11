"use client";

import { ReactNode, useState } from "react"
import { BrainCircuit } from "lucide-react";

interface DropdownProps{
    icon: ReactNode,
    title: string
    options: string[]
}

export default function Dropdown({icon, title, options}: DropdownProps){
    const [selectedAi, setSelectedAi] = useState("gemini")

    return(
        <div className="border-2 rounded-2xl border-gray-300 flex items-center p-1">
            <span className="text-main-primary-color m-2">{icon}</span>
            <div className="w-full">
                <p className="ml-1">{title}</p>
                <select value={selectedAi} onChange={(e) => setSelectedAi(e.target.value)} className="text-second-color w-full border-0 outline-none focus:border-0 focus:outline-none">
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}