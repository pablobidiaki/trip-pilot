"use client"

import { useState } from "react";
import ExpandableCard from "@/components/ui/ExpandableCard/ExpandableCard";
import { Destination } from "@/interfaces/destination.interface";
import { BusFront, CircleDollarSign, Drama, File, HeartPulse, Luggage, Plug, ShieldAlert, ShieldUser, Wifi } from "lucide-react";
import texts from "@/constants/texts";

interface UtilInformationsProps {
    destination: Destination[]
}

export default function UtilInformations({ destination }: UtilInformationsProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null)
    return (
        <div className="mx-4 mt-10 min-w-2/3">
            <div className="flex items-center gap-2 mb-5">
                <ShieldAlert size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.util_infos}</h1>
            </div>

            <div className=" grid grid-cols-3 gap-3">
                <ExpandableCard icon={<File />}
                    title={texts.destination.documents}
                    texts={destination[0].usefulInformation.documents}
                    isOpen={selectedCard === texts.destination.documents}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.documents
                                ? null
                                : texts.destination.documents
                        )}
                />

                <ExpandableCard icon={<HeartPulse />}
                    title={texts.destination.vaccines_and_health}
                    texts={destination[0].usefulInformation.vaccinesAndHealth}
                    isOpen={selectedCard === texts.destination.vaccines_and_health}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.vaccines_and_health
                                ? null
                                : texts.destination.vaccines_and_health
                        )}
                />

                <ExpandableCard icon={<Luggage />}
                    title={texts.destination.bagagem}
                    texts={destination[0].usefulInformation.bagagem}
                    isOpen={selectedCard === texts.destination.bagagem}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.bagagem
                                ? null
                                : texts.destination.bagagem
                        )}
                />

                <ExpandableCard icon={<CircleDollarSign />}
                    title={texts.destination.exchange_rate}
                    texts={destination[0].usefulInformation.exchangeRate}
                    isOpen={selectedCard === texts.destination.exchange_rate}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.exchange_rate
                                ? null
                                : texts.destination.exchange_rate
                        )}
                />

                <ExpandableCard icon={<Plug />}
                    title={texts.destination.power_outlet_and_voltage}
                    texts={destination[0].usefulInformation.powerOutletAndVoltage}
                    isOpen={selectedCard === texts.destination.power_outlet_and_voltage}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.power_outlet_and_voltage
                                ? null
                                : texts.destination.power_outlet_and_voltage
                        )}
                />

                <ExpandableCard icon={<Wifi />}
                    title={texts.destination.internet}
                    texts={destination[0].usefulInformation.internet}
                    isOpen={selectedCard === texts.destination.internet}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.internet
                                ? null
                                : texts.destination.internet
                        )}
                />

                <ExpandableCard icon={<ShieldUser />}
                    title={texts.destination.security}
                    texts={destination[0].usefulInformation.security}
                    isOpen={selectedCard === texts.destination.security}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.security
                                ? null
                                : texts.destination.security
                        )}
                />

                <ExpandableCard icon={<Drama />}
                    title={texts.destination.culture}
                    texts={destination[0].usefulInformation.culture}
                    isOpen={selectedCard === texts.destination.culture}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.culture
                                ? null
                                : texts.destination.culture
                        )}
                />

                <ExpandableCard icon={<BusFront />}
                    title={texts.destination.transport}
                    texts={destination[0].usefulInformation.localTransport}
                    isOpen={selectedCard === texts.destination.transport}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.transport
                                ? null
                                : texts.destination.transport
                        )}
                />
            </div>
        </div>
    )
}