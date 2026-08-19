"use client"

import { useState } from "react";
import Calendar from "./Calendar";
import DayItinerary from "./DayItinerary";

export default function DayToDay() {
    const [selected, setSelected] = useState("1")

    const days = [
        { day: "1", date: "Seg, 10 Jun", local: "Roma" },
        { day: "2", date: "Seg, 10 Jun", local: "Roma" },
        { day: "3", date: "Seg, 10 Jun", local: "Roma" },
        { day: "4", date: "Seg, 10 Jun", local: "Veneza" },
        { day: "5", date: "Seg, 10 Jun", local: "Veneza" },
        { day: "6", date: "Seg, 10 Jun", local: "Veneza" },
        { day: "7", date: "Seg, 10 Jun", local: "Veneza" },
        { day: "8", date: "Seg, 10 Jun", local: "Veneza" },
        { day: "9", date: "Seg, 10 Jun", local: "Florenca" },
        { day: "10", date: "Seg, 10 Jun", local: "Florenca" },
        { day: "11", date: "Seg, 10 Jun", local: "Florenca" }
    ]

    return (
        <div className="flex mx-4">
            <div>
                {days.map(day => (
                    <Calendar key={day.day}
                        day={day.day}
                        date={day.date}
                        local={day.local}
                        selected={selected === day.day}
                        onClick={() => setSelected(day.day)}
                    />
                ))}
            </div>

            <DayItinerary />
        </div>
    )
}