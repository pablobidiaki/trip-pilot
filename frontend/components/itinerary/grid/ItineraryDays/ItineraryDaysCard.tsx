"use client"

import { useState } from "react"
import texts from "@/constants/texts"
import ModalHours from "./ModalHours"
import { Hours } from "@/interfaces/itinerary.interface"

interface ItineraryDaysCardProps {
    day: string
    title: string,
    image: string,
    morning: string,
    afternoon: string,
    evening: string,
    cost_estimate: number
    hours: Hours[]
}

export default function ItineraryDaysCard({ day, title, image, morning, afternoon, evening, cost_estimate, hours }: ItineraryDaysCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="flex border border-gray-100 rounded-2xl bg-background-color 
            md:max-w-[75%] md:min-w-[75%] md:mx-auto
        ">
            <div onClick={() => setIsModalOpen(true)} className="flex flex-col overflow-hidden rounded-2xl cursor-pointer transition-transform hover:scale-101
                md:w-full
            ">
                <img src={image} alt="Imagem tour" className="max-h-40 w-full
                    md:max-h-50
                "/>
                <p className="mx-2 text-second-color italic text-sm">{day}</p>
                <p className="mx-2 text-primary-color font-medium text-xl mb-2">{title}</p>
                <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.morning}<span className="text-second-color">{morning}</span></p>
                <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.afternoon}<span className="text-second-color">{afternoon}</span></p>
                <p className="text-sm px-2 py-1 text-primary-color font-medium mb-2">{texts.itinerary.evening}<span className="text-second-color">{evening}</span></p>
                <div className="flex gap-2 items-center p-2 mt-auto">
                    <p className="text-primary-color">{texts.itinerary.cust} </p>
                    <p className="text-green-500">{texts.real} {cost_estimate.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    </p>
                </div>
            </div>

            <ModalHours isOpen={isModalOpen} day={day} hours={hours} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}