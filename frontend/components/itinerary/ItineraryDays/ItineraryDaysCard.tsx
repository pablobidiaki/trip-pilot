"use client"

import { useState } from "react"
import texts from "@/constants/texts"
import ModalHours from "./ModalHours"
import { Hours } from "@/interfaces/itinerary.interface"

interface ItineraryDaysCardProps{
    day: string
    title: string,
    image: string,
    morning: string,
    afternoon: string,
    evening: string,
    cost_estimate: number
    hours: Hours[]
}

export default function ItineraryDaysCard({day, title, image, morning, afternoon, evening, cost_estimate, hours}: ItineraryDaysCardProps){
    const [isModalOpen, setIsModalOpen] = useState(false)
    return(
        <div className="border border-gray-300 rounded-2xl overflow-hidden flex flex-col">
            <p className="bg-blue-100 text-center rounded-t-2xl p-1 text-primary-color font-medium">{day}</p>
            <img src={image} alt="Imagem tour" className="max-h-40 w-full" />
            <p className="p-2 text-primary-color font-medium text-xl">{title}</p>
            <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.morning}<span className="text-second-color">{morning}</span></p>
            <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.afternoon}<span className="text-second-color">{afternoon}</span></p>
            <p className="text-sm px-2 py-1 text-primary-color font-medium">{texts.itinerary.evening}<span className="text-second-color">{evening}</span></p>
            <button onClick={() => setIsModalOpen(true)} className="mx-2 py-2 border border-gray-200 rounded-2xl mt-3 mb-5 bg-blue-200 cursor-pointer transition-all hover:duration-300 hover:scale-105 hover:bg-blue-400 hover:text-white">{texts.itinerary.view_hours}</button>
            <div className="flex justify-between items-center p-2 ">
                <p className="text-primary-color">{texts.itinerary.cust} </p>
                <p className="text-green-500 bg-green-200 p-2 rounded-2xl">{texts.real} {cost_estimate}</p>
            </div>

            <ModalHours isOpen={isModalOpen} day={day} hours={hours} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}