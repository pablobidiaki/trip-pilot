"use client"

import { useState } from "react";
import texts from "@/constants/texts";
import WhatToDoCard from "./WhatToDoCard";
import { Destination } from "@/interfaces/destination.interface";
import { ChefHat, Drama, Leaf, PartyPopper, ShieldQuestionMark, Store } from "lucide-react";

interface DestinationBodyProps {
    destination: Destination[]
}

export default function WhatToDo({ destination }: DestinationBodyProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    return (
        <div className="mx-4 mt-10">
            <div className="flex items-center gap-2 mb-5">
                <ShieldQuestionMark size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.what_to_do}</h1>
            </div>
            <div className=" grid grid-cols-5 gap-10">
                <WhatToDoCard icon={<Leaf size={40}/>}
                    title={texts.destination.nature}
                    texts={destination[0].whatToDo.nature}
                    isOpen={selectedCard === texts.destination.nature}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.nature
                                ? null
                                : texts.destination.nature
                        )}
                />

                <WhatToDoCard icon={<Drama size={40}/>}
                    title={texts.destination.culture}
                    texts={destination[0].whatToDo.culture}
                    isOpen={selectedCard === texts.destination.culture}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.culture
                                ? null
                                : texts.destination.culture
                        )}
                />

                <WhatToDoCard icon={<ChefHat size={40} />}
                    title={texts.destination.tipicalFoods}
                    texts={destination[0].whatToDo.tipicalFood}
                    isOpen={selectedCard === texts.destination.tipicalFoods}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.tipicalFoods
                                ? null
                                : texts.destination.tipicalFoods
                        )}
                />
                <WhatToDoCard icon={<Store size={40}/>}
                    title={texts.destination.famousStores}
                    texts={destination[0].whatToDo.famousStores}
                    isOpen={selectedCard === texts.destination.famousStores}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.famousStores
                                ? null
                                : texts.destination.famousStores
                        )}
                />
                <WhatToDoCard icon={<PartyPopper size={40}/>}
                    title={texts.destination.nightLife}
                    texts={destination[0].whatToDo.nightLife}
                    isOpen={selectedCard === texts.destination.nightLife}
                    onClick={() =>
                        setSelectedCard(
                            selectedCard === texts.destination.nightLife
                                ? null
                                : texts.destination.nightLife
                        )}
                />
            </div>
        </div>
    )
}