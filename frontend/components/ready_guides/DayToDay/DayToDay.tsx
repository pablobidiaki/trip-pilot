"use client"

import { useState } from "react";
import Calendar from "./Calendar";
import DayItinerary from "./DayItinerary";
import DayTips from "./DayTips";
import DayCostEstimate from "./DayCostEstimate";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface DayToDayProps{
    guide: ReadyGuideInterface[]
}

export default function DayToDayProps({guide}: DayToDayProps) {
    const [selected, setSelected] = useState("1")

    return (
        <div className="flex">
            <div className="flex justify-center">
                <div>
                    {guide[0].itinerary.map(day => (
                        <Calendar key={day.day}
                            day={day.day.toString()}
                            date={day.abbreviatedDate}
                            local={day.city}
                            selected={selected === day.day.toString()}
                            onClick={() => setSelected(day.day.toString())}
                        />
                    ))}
                </div>

                <DayItinerary guide={guide} daySelected={selected}/>
                
                <div className="max-w-2/12">
                    <DayTips guide={guide} daySelected={selected}/>
                    <DayCostEstimate guide={guide} daySelected={selected}/>
                </div>
            </div>
        </div>
    )
}