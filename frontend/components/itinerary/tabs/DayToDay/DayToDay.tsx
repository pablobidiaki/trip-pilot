"use client"

import { DayToDayInterface } from "@/interfaces/itinerary.interface";
import DaySelector from "./DaySelector";
import { useState } from "react";
import DayInformations from "./DayInformations";

interface DayToDayProps {
    itinerary: DayToDayInterface[]
}

export default function DayToDay({ itinerary }: DayToDayProps) {
    const [selected, setSelected] = useState(0)
    return (
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div className="flex justify-center gap-10 ">
                {itinerary.map((day, index) => (
                    <DaySelector
                        key={index}
                        index={index}
                        day={day.day}
                        selected={selected}
                        onClick={() => setSelected(index)}
                    />
                ))}
            </div>

            <div className="mt-2">
                {itinerary[selected] && <DayInformations itinerary={itinerary[selected]} />}
            </div>
        </div>
    )
}