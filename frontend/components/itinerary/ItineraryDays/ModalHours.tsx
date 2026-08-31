"use client"

import texts from "@/constants/texts"
import { Hours } from "@/interfaces/itinerary.interface"
import { X } from "lucide-react"
import { useEffect } from "react"

interface ModalProps {
    isOpen: boolean
    day: string
    hours: Hours[]
    onClose: () => void
}

export default function ModalHours({ isOpen, day, hours, onClose }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose} >
            <div className="relative w-125 rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute right-4 top-4 text-xl">
                    <X className="cursor-pointer transition-all hover:duration-150 hover:text-red-500 " />
                </button>
            <h1 className="text-2xl font-medium text-primary-color mb-3">{day}</h1>
            {hours.map((hour, index) => (
                <div key={index}>
                    <div className="flex gap-1 text-primary-color text-lg font-medium">
                        <p>{hour.hour} -</p>
                        <p> {hour.title}</p>
                    </div>
                    <p className="text-second-color text-base">{hour.description}</p>
                    {hour.tip && <p className="text-second-color text-sm p-2 border border-purple-300 rounded-2xl mt-1"><span className="text-purple-500">{texts.tip}:</span> {hour.tip}</p>}
                    <hr className="mt-3 mb-1"/>
                </div>
            ))}
            </div>

        </div>
    )
}
