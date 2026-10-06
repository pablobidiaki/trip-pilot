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
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-[optionSelector_300ms_ease-out]">
            <div onClick={(e) => e.stopPropagation()} className="relative w-full h-full bg-white p-5 overflow-y-auto
                    lg:w-auto lg:h-auto lg:max-w-7xl lg:max-h-[90vh] lg:rounded-xl xl:p-6
                ">

                <button onClick={onClose} className="absolute right-4 top-4 text-xl">
                    <X className="cursor-pointer transition-colors hover:text-red-500" />
                </button>

                <h1 className="mb-5 text-center text-2xl font-medium text-primary-color">{day}</h1>

                <div className="grid grid-cols-1 gap-5
                        xl:grid-cols-2
                    ">
                    {hours.map((hour, index) => (
                        <div key={index}>
                            <div className="flex gap-1 text-lg font-medium text-primary-color">
                                <p>{hour.hour} -</p>
                                <p>{hour.title}</p>
                            </div>
                            <p className="text-sm text-second-color"> {hour.description} </p>

                            {hour.tip && (
                                <p className="mt-2 w-fit rounded-2xl border border-purple-300 px-2 py-1 text-sm text-second-color">
                                    <span className="text-purple-500">
                                        {texts.tip}:
                                    </span>{" "}
                                    {hour.tip}
                                </p>
                            )}

                            <hr className="mb-1 mt-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}