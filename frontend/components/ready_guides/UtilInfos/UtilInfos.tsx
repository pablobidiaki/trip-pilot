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
        { icon: <Scroll />, title: texts.utilInfo.documentsTitle, text: texts.utilInfo.documentsText, json_key: "documents" },
        { icon: <Shield />, title: texts.utilInfo.vaccinesAndHealthTitle, text: texts.utilInfo.vaccinesAndHealthText, json_key: "vaccinesAndHealth" },
        { icon: <Backpack />, title: texts.utilInfo.baggageTitle, text: texts.utilInfo.baggageText, json_key: "baggage" },
        { icon: <CircleDollarSign />, title: texts.utilInfo.exchangeRateTitle, text: texts.utilInfo.exchangeRateText, json_key: "exchangeRate" },
        { icon: <Plug />, title: texts.utilInfo.powerOutletAndVoltageTitle, text: texts.utilInfo.powerOutletAndVoltageText, json_key: "powerOutletAndVoltage" },
        { icon: <Smartphone />, title: texts.utilInfo.internetTitle, text: texts.utilInfo.internetText, json_key: "internet" }
    ]

    const duringTravelInfos = [
        { icon: <BusFront />, title: texts.utilInfo.transportTitle, text: texts.utilInfo.transportText, json_key: "localTransport" },
        { icon: <Landmark />, title: texts.utilInfo.cultureTitle, text: texts.utilInfo.cultureText, json_key: "culture" },
        { icon: <Shield />, title: texts.utilInfo.securityTitle, text: texts.utilInfo.securityText, json_key: "security" }
    ]

    return (
        <div className="max-w-8/12 mx-auto">
            <InfoCard icon={<Info />}
                title={texts.utilInfo.utilInfosTitle}
                text={texts.utilInfo.utilInfosText}
                tailwindTags="bg-purple-50"
            />
            <UtilInfosTitle icon={<Plane />} title="Antes da viagem" />
            <div className="grid grid-cols-3 gap-5 mb-10">
                {beforeTravelInfos.map(info => (
                    <UtilInfoCard key={info.title}
                        icon={info.icon}
                        title={info.title}
                        text={info.text}
                        isOpen={selected === info.json_key}
                        guide={guide[0].usefulInformation[selected as keyof typeof guide[0]['usefulInformation']]}
                        onClick={() => setSelected(selected === info.json_key ? "" : info.json_key)}
                    />
                ))}
            </div>

            <UtilInfosTitle icon={<Landmark />} title="Durante a viagem" />
            <div className="grid grid-cols-3 gap-5">
                {duringTravelInfos.map(info => (
                    <UtilInfoCard key={info.title}
                        icon={info.icon}
                        title={info.title}
                        text={info.text}
                        isOpen={selected === info.json_key}
                        guide={guide[0].usefulInformation[selected as keyof typeof guide[0]['usefulInformation']]}
                        onClick={() => setSelected(selected === info.json_key ? "" : info.json_key)}
                    />
                ))}
            </div>
        </div>
    )
}