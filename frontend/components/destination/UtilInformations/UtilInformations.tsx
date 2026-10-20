"use client"

import { useState } from "react";
import ExpandableCard from "@/components/ui/ExpandableCard/ExpandableCard";
import { DestinationInterface } from "@/interfaces/destination.interface";
import { BusFront, CircleDollarSign, Drama, File, HeartPulse, Luggage, Plug, ShieldAlert, ShieldUser, Wifi } from "lucide-react";
import texts from "@/constants/texts";

interface UtilInformationsProps {
    destination: DestinationInterface
}

export default function UtilInformations({ destination }: UtilInformationsProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null)
    return (
        <div className="mx-4 mt-10 min-w-2/3">
            <div className="flex items-center gap-2 mb-5">
                <ShieldAlert size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.utilInfos}</h1>
            </div>

            <div className=" grid grid-cols-1 gap-3
                md:grid-cols-3
            ">
                <ExpandableCard icon={<File />}
                    title={texts.destination.documents}
                    texts={destination.usefulInformation.documents}
                    isOpen={selectedCard === texts.destination.documents}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.documents
                                ? null
                                : texts.destination.documents
                        )}
                />

                <ExpandableCard icon={<HeartPulse />}
                    title={texts.destination.vaccinesAndHealth}
                    texts={destination.usefulInformation.vaccinesAndHealth}
                    isOpen={selectedCard === texts.destination.vaccinesAndHealth}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.vaccinesAndHealth
                                ? null
                                : texts.destination.vaccinesAndHealth
                        )}
                />

                <ExpandableCard icon={<Luggage />}
                    title={texts.destination.baggage}
                    texts={destination.usefulInformation.baggage}
                    isOpen={selectedCard === texts.destination.baggage}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.baggage
                                ? null
                                : texts.destination.baggage
                        )}
                />

                <ExpandableCard icon={<CircleDollarSign />}
                    title={texts.destination.exchangeRate}
                    texts={destination.usefulInformation.exchangeRate}
                    isOpen={selectedCard === texts.destination.exchangeRate}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.exchangeRate
                                ? null
                                : texts.destination.exchangeRate
                        )}
                />

                <ExpandableCard icon={<Plug />}
                    title={texts.destination.powerOutletAndVoltage}
                    texts={destination.usefulInformation.powerOutletAndVoltage}
                    isOpen={selectedCard === texts.destination.powerOutletAndVoltage}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.powerOutletAndVoltage
                                ? null
                                : texts.destination.powerOutletAndVoltage
                        )}
                />

                <ExpandableCard icon={<Wifi />}
                    title={texts.destination.internet}
                    texts={destination.usefulInformation.internet}
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
                    texts={destination.usefulInformation.security}
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
                    texts={destination.usefulInformation.culture}
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
                    texts={destination.usefulInformation.localTransport}
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