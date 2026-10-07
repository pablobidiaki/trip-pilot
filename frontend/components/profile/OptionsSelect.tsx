"use client"

import texts from "@/constants/texts";
import { Cog, Home, LogOut, Map, MountainSnow, Signpost, Tent } from "lucide-react"
import Link from "next/link";
import ExitConfirm from "../ui/ExitConfirm/ExitConfirm";
import { useState } from "react";

interface optionSelectProps {
    optionSelected: string
    setOptionSelected: (text: string) => void
}

export default function OptionsSelect({ optionSelected, setOptionSelected }: optionSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const options = [
        { icon: <Home />, text: texts.optionSelectorProfile.home },
        { icon: <MountainSnow />, text: texts.optionSelectorProfile.myItineraries },
        { icon: <Tent />, text: texts.optionSelectorProfile.destinationsSaved },
        { icon: <Signpost />, text: texts.optionSelectorProfile.guidesSaved },
        { icon: <Map />, text: texts.optionSelectorProfile.myMap },
        { icon: <Cog />, text: texts.optionSelectorProfile.configurations },
        { icon: <LogOut />, text: texts.optionSelectorProfile.exit },
    ]

    const handdleOption = (option: string) => {
        if (option == texts.optionSelectorProfile.exit) setIsOpen(true)
        else setOptionSelected(option)
    }

    return (
        <div className="flex-col gap-5 w-fit h-fit bg-white rounded-r-2xl hidden
            md:flex
        ">
            <Link href="/">
                <img src="/imgs/icons/trip_pilot.png" alt="Logo" className="w-16 h-16 mx-auto my-2" />
            </Link>
            {options.map((option, index) => (
                <div key={index}
                    className={`py-2 pl-2 pr-4 cursor-pointer flex gap-2 rounded-r-2xl items-center ${optionSelected === option.text ? 'bg-gray-300' : ''} ${option.text === "Sair" ? 'text-red-500' : 'text-primary-color'} hover:bg-gray-200`}
                    onClick={() => handdleOption(option.text)}
                >
                    <span className="hidden
                        lg:block
                    ">{option.icon}</span>
                    <p className="text-xs whitespace-nowrap
                        lg:text-lg
                    ">{option.text}</p>
                </div>
            ))}

            {isOpen && <ExitConfirm isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </div>
    )
}