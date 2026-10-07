"use client"

import { Backpack, BusFront, CircleDollarSign, Info, Landmark, Plane, Plug, Scroll, Shield, Smartphone } from "lucide-react";
import InfoCard from "../InfoCard/InfoCard";
import UtilInfosTitle from "./UtilInfosTitle";
import UtilInfoCard from "./UtilInfoCard";
import texts from "@/constants/texts";
import { useState } from "react";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface UtilInfosProps{
    guide: ReadyGuideInterface[]
}

export default function UtilInfos({guide}: UtilInfosProps) {
    const [selected, setSelected] = useState("")

    const beforeTravelInfos = [
        { icon: <Scroll />, title: texts.utilInfo.documentsTitle, text: texts.utilInfo.documentsText, jsonKey: "documents" },
        { icon: <Shield />, title: texts.utilInfo.vaccinesAndHealthTitle, text: texts.utilInfo.vaccinesAndHealthText, jsonKey: "vaccinesAndHealth" },
        { icon: <Backpack />, title: texts.utilInfo.baggageTitle, text: texts.utilInfo.baggageText, jsonKey: "baggage" },
        { icon: <CircleDollarSign />, title: texts.utilInfo.exchangeRateTitle, text: texts.utilInfo.exchangeRateText, jsonKey: "exchangeRate" },
        { icon: <Plug />, title: texts.utilInfo.powerOutletAndVoltageTitle, text: texts.utilInfo.powerOutletAndVoltageText, jsonKey: "powerOutletAndVoltage" },
        { icon: <Smartphone />, title: texts.utilInfo.internetTitle, text: texts.utilInfo.internetText, jsonKey: "internet" }
    ]

    const duringTravelInfos = [
        { icon: <BusFront />, title: texts.utilInfo.transportTitle, text: texts.utilInfo.transportText, jsonKey: "localTransport" },
        { icon: <Landmark />, title: texts.utilInfo.cultureTitle, text: texts.utilInfo.cultureText, jsonKey: "culture" },
        { icon: <Shield />, title: texts.utilInfo.securityTitle, text: texts.utilInfo.securityText, jsonKey: "security" }
    ]

    return (
        <div className="
            lg:max-w-10/12 lg:mx-auto
            xl:max-w-11/12
            2xl:max-w-8/12
        ">
            <InfoCard icon={<Info />}
                title={texts.utilInfo.utilInfosTitle}
                text={texts.utilInfo.utilInfosText}
                tailwindTags="bg-purple-50"
            />
            <UtilInfosTitle icon={<Plane />} title="Antes da viagem" />
            <div className="grid grid-cols-1 gap-5 mb-10
                md:grid-cols-2
                xl:grid-cols-3
            ">
                {beforeTravelInfos.map(info => (
                    <UtilInfoCard key={info.title}
                        icon={info.icon}
                        title={info.title}
                        text={info.text}
                        isOpen={selected === info.jsonKey}
                        selected={selected}
                        guide={guide[0]}
                        onClick={() => setSelected(selected === info.jsonKey ? "" : info.jsonKey)}
                    />
                ))}
            </div>

            <UtilInfosTitle icon={<Landmark />} title="Durante a viagem" />
            <div className="grid grid-cols-1 gap-5
                md:grid-cols-2 
                xl:grid-cols-3
            ">
                {duringTravelInfos.map(info => (
                    <UtilInfoCard key={info.title}
                        icon={info.icon}
                        title={info.title}
                        text={info.text}
                        isOpen={selected === info.jsonKey}
                        selected={selected}
                        guide={guide[0]}
                        onClick={() => setSelected(selected === info.jsonKey ? "" : info.jsonKey)}
                    />
                ))}
            </div>
        </div>
    )
}