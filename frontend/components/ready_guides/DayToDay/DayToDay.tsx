"use client"

import { useState } from "react";
import Calendar from "./Calendar";
import DayItinerary from "./DayItinerary";
import DayTips from "./DayTips";
import DayCostEstimate from "./DayCostEstimate";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface DayToDayProps {
    guide: ReadyGuideInterface[]
}

export default function DayToDayProps({ guide }: DayToDayProps) {
    const [selected, setSelected] = useState("1")

    return (
        <div className="flex">
            <div className="flex gap-2
                xl:
            ">
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

                <div className="flex flex-col
                    xl:flex-row
                ">
                    <DayItinerary guide={guide} daySelected={selected} />

                    <div className="md:grid md:grid-cols-2 md:gap-2
                        lg:gap-5
                        xl:max-w-4/12 xl:flex xl:flex-col
                    ">
                        <DayCostEstimate guide={guide} daySelected={selected} />
                        <DayTips guide={guide} daySelected={selected} />
                    </div>
                </div>
            </div>
        </div>
    )
}