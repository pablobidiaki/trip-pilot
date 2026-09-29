"use client"

import { UserInterface } from "@/interfaces/user.interface";
import ButtonFilters from "../../ui/ButtonFilters/ButtonFilters";
import GuideCard from "../GuideCard/GuideCard";
import { getReadyGuides } from "@/services/readyGuides.service";
import { useEffect, useState } from "react";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface ReadyGuidesBodyProps {
    user: UserInterface
}

export default function ReadyGuidesBody({ user }: ReadyGuidesBodyProps) {
    const [selected, setSelected] = useState("Todos")
    const [readyGuides, setReadyGuides] = useState<ReadyGuideInterface[]>()

    useEffect(() => {
        const _getReadyGuides = async () => {
            const readyGuides = await getReadyGuides()
            setReadyGuides(readyGuides)
        }
        _getReadyGuides()
    }, [readyGuides])

    return (
        <div className="relative overflow-hidden bg-background-color -mt-5 rounded-t-4xl">
            <ButtonFilters selected={selected} setSelected={setSelected}/>
            <div className="grid grid-cols-4 justify-items-center">
                {readyGuides?.map((guide, index) => (
                    (selected === 'Todos' || selected === guide.travelType) &&
                    <GuideCard key={index}
                        id={guide.id}
                        image={guide.imageURL}
                        title={guide.title}
                        cities={guide.cities}
                        duration={guide.days}
                        type={guide.travelType}
                        description={guide.description}
                        price={guide.price}
                        user={user}
                    />
                ))}
            </div>
        </div>
    )
}