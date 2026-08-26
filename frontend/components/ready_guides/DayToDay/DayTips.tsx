import texts from "@/constants/texts";
import {  Lightbulb } from "lucide-react";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface DayTipsProps {
    guide: ReadyGuideInterface[],
    daySelected: string
}

export default function DayTips({ guide, daySelected }: DayTipsProps) {
    console.log
    return (
        <div className="bg-purple-100 py-2 px-3 mt-3 rounded-2xl">
            <div className="flex items-center gap-3 font-bold mt-2">
                <Lightbulb className="text-purple-500" />
                <h1>{texts.ready_guides.tips_today}</h1>
            </div>

            {guide[0].itinerary.map(resumeDay => (
                resumeDay.day.toString() == daySelected &&
                resumeDay.dayTips.map((tip, index) => (
                    <p key={index} className="mt-3 text-sm text-second-color">{index + 1}. {tip}</p>
                ))
            ))}
        </div>
    )
}