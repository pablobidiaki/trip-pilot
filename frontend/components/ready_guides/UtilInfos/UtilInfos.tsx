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
        { icon: <Scroll />, title: texts.util_info.documents_title, text: texts.util_info.documents_text, json_key: "documents" },
        { icon: <Shield />, title: texts.util_info.vaccines_and_health_title, text: texts.util_info.vaccines_and_health_text, json_key: "vaccinesAndHealth" },
        { icon: <Backpack />, title: texts.util_info.baggage_title, text: texts.util_info.baggage_text, json_key: "baggage" },
        { icon: <CircleDollarSign />, title: texts.util_info.exchange_rate_title, text: texts.util_info.exchange_rate_text, json_key: "exchangeRate" },
        { icon: <Plug />, title: texts.util_info.power_outlet_and_voltage_title, text: texts.util_info.power_outlet_and_voltage_text, json_key: "powerOutletAndVoltage" },
        { icon: <Smartphone />, title: texts.util_info.internet_title, text: texts.util_info.internet_text, json_key: "internet" }
    ]

    const duringTravelInfos = [
        { icon: <BusFront />, title: texts.util_info.transport_title, text: texts.util_info.transport_text, json_key: "localTransport" },
        { icon: <Landmark />, title: texts.util_info.culture_title, text: texts.util_info.culture_text, json_key: "culture" },
        { icon: <Shield />, title: texts.util_info.security_title, text: texts.util_info.security_text, json_key: "security" }
    ]

    return (
        <div className="max-w-8/12 mx-auto">
            <InfoCard icon={<Info />}
                title={texts.util_info.util_infos_title}
                text={texts.util_info.util_infos_text}
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