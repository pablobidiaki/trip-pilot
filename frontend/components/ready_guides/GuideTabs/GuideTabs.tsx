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
    const [selected, setSelected] = useState(texts.ready_guides.general_infos)

    const tabs = [
        { text: texts.ready_guides.general_infos, icon: <Info /> },
        { text: texts.ready_guides.day_to_day, icon: <CalendarDays /> },
        { text: texts.ready_guides.include, icon: <Package /> },
        { text: texts.ready_guides.accommodation, icon: <Bed /> },
        { text: texts.ready_guides.util_infos, icon: <FileExclamationPoint /> }
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

            {selected === texts.ready_guides.general_infos && <GeneralInfos guide={guide}/>}
            {selected === texts.ready_guides.day_to_day && <DayToDay guide={guide}/>}
            {selected === texts.ready_guides.include && <Include />}
            {selected === texts.ready_guides.accommodation && <Accommodation guide={guide}/>}
            {selected === texts.ready_guides.util_infos && <UtilInfos guide={guide}/>}

        </div>

    )
}