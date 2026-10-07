"use client"

import texts from "@/constants/texts";
import { Cog, Home, LogOut, Map, Menu, MountainSnow, Signpost, Tent, X } from "lucide-react"
import Link from "next/link";
import ExitConfirm from "../ui/ExitConfirm/ExitConfirm";
import { useEffect, useState } from "react";

interface optionSelectProps {
    optionSelected: string
    setOptionSelected: (text: string) => void
}

export default function OptionsSelectMobile({ optionSelected, setOptionSelected }: optionSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

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
        setMenuOpen(false)
        if (option === texts.optionSelectorProfile.exit) setIsOpen(true)
        else setOptionSelected(option)
    }

    useEffect(() => {
        if (!menuOpen) return
        const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
        document.addEventListener("keydown", onKeyDown)
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = ""
        }
    }, [menuOpen])

    return (
        <div className="md:hidden">
            <div className="flex justify-between mx-2">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                    <img src="/imgs/icons/trip_pilot.png" alt="Logo" className="w-8 h-8 my-2 ml-2" />
                </Link>
                <button onClick={() => setMenuOpen(true)} className="z-30 text-primary-color active:scale-95 transition">
                    <Menu />
                </button>
            </div>

            <div onClick={() => setMenuOpen(false)} className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

            <div className={`fixed top-0 right-0 z-50 h-full w-64 max-w-[80vw] bg-white rounded-l-2xl shadow-2xl flex flex-col gap-2 overflow-y-auto transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full invisible'}`}>
                <div className="pl-3">
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Fechar menu"
                        className="p-2 rounded-lg text-primary-color hover:bg-gray-200"
                    >
                        <X />
                    </button>
                </div>

                {options.map((option, index) => (
                    <div key={index} onClick={() => handdleOption(option.text)} className={`py-3 pl-4 pr-4 ml-3 cursor-pointer flex gap-3 rounded-l-2xl items-center hover:bg-gray-200 ${optionSelected === option.text ? 'bg-gray-300' : ''} ${option.text === texts.optionSelectorProfile.exit ? 'text-red-500' : 'text-primary-color'}`}>
                        {option.icon}
                        <p className="text-base whitespace-nowrap">{option.text}</p>
                    </div>
                ))}
            </div>

            {isOpen && <ExitConfirm isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </div>
    )
}