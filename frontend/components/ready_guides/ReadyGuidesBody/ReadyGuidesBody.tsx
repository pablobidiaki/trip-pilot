"use client"

import { UserInterface } from "@/interfaces/user.interface";
import ButtonFilters from "../../ui/ButtonFilters/ButtonFilters";
import GuideCard from "../GuideCard/GuideCard";
import { getReadyGuides } from "@/services/readyGuides.service";
import { useEffect, useState } from "react";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import SearchBar from "@/components/ui/SearchBar/Searchbar";
import texts from "@/constants/texts";
import removeAccents from "@/utils/removeAccents";

interface ReadyGuidesBodyProps {
    user?: UserInterface
}

export default function ReadyGuidesBody({ user }: ReadyGuidesBodyProps) {
    const [selected, setSelected] = useState("Todos")
    const [readyGuides, setReadyGuides] = useState<ReadyGuideInterface[]>()
    const [search, setSearch] = useState("")

    const filteredreadyGuides = readyGuides?.filter((guide) =>
        (
            removeAccents(guide.title.toLowerCase()).includes(search.toLowerCase()) ||
            guide.cities.some(city => removeAccents(city.toLowerCase()).includes(search.toLowerCase()))
        ) &&
        (selected === "Todos" || guide.travelType === selected)
    )

    useEffect(() => {
        const _getReadyGuides = async () => {
            const readyGuides = await getReadyGuides()
            setReadyGuides(readyGuides)
        }
        _getReadyGuides()
    }, [readyGuides])

    return (
        <div className="relative overflow-hidden bg-background-color -mt-5 rounded-t-4xl">
            <div className="flex items-center mt-10 justify-between mx-4">
                <ButtonFilters selected={selected} setSelected={setSelected} />
                <SearchBar placeholder={texts.readyGuides.searchBarPlaceholder} search={search} setSearch={setSearch} />
            </div>
            <div className="grid grid-cols-4 justify-items-center">
                {filteredreadyGuides?.length ? (
                    filteredreadyGuides?.map((guide, index) => (
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
                    ))
                ) : (
                    <div className="min-h-120 col-span-3 flex justify-center items-center py-20">
                        <p>Nenhum roteiro encontrado</p>
                    </div>
                )}
            </div>
        </div>
    )
}