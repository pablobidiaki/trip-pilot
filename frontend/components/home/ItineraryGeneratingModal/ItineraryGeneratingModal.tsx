"use client"

import texts from "@/constants/texts"
import { Circle, X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ItineraryGeneratingModalProps {
    isOpen: boolean
}

export default function ItineraryGeneratingModal({ isOpen }: ItineraryGeneratingModalProps) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" >
            <div className="relative w-120 rounded-xl bg-white p-2">
                <Image src={"/imgs/icons/trip_pilot.png"}
                    alt="TripPilot icon"
                    width={85}
                    height={85}
                    className="mx-auto"
                />
                <h1 className="text-primary-color text-2xl text-center mt-3">Seu roteiro está sendo criado!</h1>
                <p className="max-w-[55%] mt-5 text-second-color text-center mx-auto">Nossa IA está planejando sua viagem e buscando as melhores opções para você.</p>

                <div className="flex items-center justify-center gap-1 my-5">
                    <Circle size={10}
                        className="fill-gray-500 text-gray-500 animate-bounce"
                    />

                    <Circle size={10}
                        className="fill-gray-500 text-gray-500 animate-bounce [animation-delay:150ms]"
                    />

                    <Circle size={10}
                        className="fill-gray-500 text-gray-500 animate-bounce [animation-delay:300ms]"
                    />
                </div>
            </div>
        </div>
    )
}
