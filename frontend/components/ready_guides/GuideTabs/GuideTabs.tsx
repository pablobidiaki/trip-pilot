"use client"

import { useState } from "react";
import InfoItem from "@/components/ui/InfoItem/InfoItem";
import texts from "@/constants/texts";
import { Bed, CalendarDays, FileExclamationPoint, Info, Package } from "lucide-react";
import GeneralInfos from "../GeneralInfos/GeneralInfos";
import DayToDay from "../DayToDay/DayToDay";
import Include from "../Include/Include";
import Accommodation from "../Accommodation/Accommodation";
import UtilInfos from "../UtilInfos/UtilInfos";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface GuideTabsProps {
    guide: ReadyGuideInterface[]
}

export default function GuideTabs({ guide }: GuideTabsProps) {
    const [selected, setSelected] = useState(texts.readyGuides.generalInfos)

    const tabs = [
        { text: texts.readyGuides.generalInfos, icon: <Info /> },
        { text: texts.readyGuides.dayToDay, icon: <CalendarDays /> },
        { text: texts.readyGuides.include, icon: <Package /> },
        { text: texts.readyGuides.accommodation, icon: <Bed /> },
        { text: texts.readyGuides.utilInfos, icon: <FileExclamationPoint /> }
    ]

    return (
        <div>
            <div className="flex justify-evenly py-10 bg-background-color">
                {tabs.map(tab => (
                    <InfoItem key={tab.text}
                        text={tab.text}
                        icon={tab.icon}
                        tailwindTags="cursor-pointer"
                        selected={selected === tab.text}
                        onClick={() => setSelected(tab.text)}
                    />
                ))}
            </div>

            {selected === texts.readyGuides.generalInfos && <GeneralInfos guide={guide}/>}
            {selected === texts.readyGuides.dayToDay && <DayToDay guide={guide}/>}
            {selected === texts.readyGuides.include && <Include />}
            {selected === texts.readyGuides.accommodation && <Accommodation guide={guide}/>}
            {selected === texts.readyGuides.utilInfos && <UtilInfos guide={guide}/>}

        </div>

    )
}