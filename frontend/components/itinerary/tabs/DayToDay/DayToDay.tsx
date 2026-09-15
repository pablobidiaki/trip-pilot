"use client"

import { DayToDayInterface } from "@/interfaces/itinerary.interface";
import DaySelector from "./DaySelector";
import { useRef, useState } from "react";
import DayInformations from "./DayInformations";

interface DayToDayProps {
    itinerary: DayToDayInterface[]
}

export default function DayToDay({ itinerary }: DayToDayProps) {
    const [selected, setSelected] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [imageLoading, setImageLoading] = useState(true)

    const sliderRef = useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return

        setIsDragging(true)

        setStartX(
            e.pageX - sliderRef.current.offsetLeft
        )

        setScrollLeft(
            sliderRef.current.scrollLeft
        )
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !sliderRef.current) return

        e.preventDefault()

        const x = e.pageX - sliderRef.current.offsetLeft

        const walk = x - startX

        sliderRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const daySelected = (index: number) => {
        setSelected(index)
        setImageLoading(true)
    }

    return (
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div ref={sliderRef}
                className={`bg-white p-2 rounded-2xl flex max-w-full gap-10 overflow-x-auto px-2 select-none scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab" }`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {itinerary.map((day, index) => (
                    <DaySelector
                        key={index}
                        index={index}
                        day={day.day}
                        selected={selected}
                        onClick={() => daySelected(index)}
                    />
                ))}
            </div>

            <div className="mt-2">
                {itinerary[selected] && (
                    <DayInformations
                        itinerary={itinerary[selected]}
                        imageLoading={imageLoading}
                        setImageLoading={() => setImageLoading(false)}
                    />
                )}
            </div>
        </div>
    )
}