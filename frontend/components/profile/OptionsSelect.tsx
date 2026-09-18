"use client"

import { Cog, Home, LogOut, MountainSnow, Signpost, Tent } from "lucide-react"
import Link from "next/link";
import { useState } from "react";

export default function OptionsSelect() {
    const options = [
        { icon: <Home />, text: "Página Inicial" },
        { icon: <MountainSnow />, text: "Meus Roteiros" },
        { icon: <Tent />, text: "Destinos Salvos" },
        { icon: <Signpost />, text: "Guias salvos" },
        { icon: <Cog />, text: "Configurações" },
        { icon: <LogOut />, text: "Sair" },
    ]

    const [selectedOption, setSelectedOption] = useState("Página Inicial");

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex flex-col gap-5 w-fit bg-white rounded-r-2xl">
            <Link href="/">
                <img src="/imgs/icons/trip_pilot.png" alt="Logo" className="w-16 h-16 mx-auto my-2" />
            </Link>
            {options.map((option, index) => (
                <div key={index}
                    className={`py-2 pl-2 pr-4 cursor-pointer flex gap-2 rounded-r-2xl items-center ${selectedOption === option.text ? 'bg-gray-300' : ''} ${option.text === "Sair"  ? 'text-red-500' : 'text-primary-color'} hover:bg-gray-200`}
                    onClick={() => handleOptionClick(option.text)}
                >
                    <span>{option.icon}</span>
                    <p className={`text-lg whitespace-nowrap`}>{option.text}</p>
                </div>
            ))}
        </div>
    )
}