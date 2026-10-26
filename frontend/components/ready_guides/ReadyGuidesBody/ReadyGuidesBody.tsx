"use client"

import { UserInterface } from "@/interfaces/user.interface";
import GuideCard from "../GuideCard/GuideCard";
import { getReadyGuides } from "@/services/readyGuides.service";
import { useEffect, useMemo, useState } from "react";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import SearchBar from "@/components/ui/SearchBar/Searchbar";
import texts from "@/constants/texts";
import removeAccents from "@/utils/removeAccents";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import { Earth, Plane } from "lucide-react";
import { ContinentsFilter, TripTypeFilter } from "@/constants/enum";

interface ReadyGuidesBodyProps {
    user?: UserInterface
}

export default function ReadyGuidesBody({ user }: ReadyGuidesBodyProps) {
    const [travelType, setTravelType] = useState("Todos")
    const [readyGuides, setReadyGuides] = useState<ReadyGuideInterface[]>([])
    const [search, setSearch] = useState("")
    const [continentSelected, setContinentSelected] = useState("Todos")

    useEffect(() => {
        const fetchReadyGuides = async () => {
            try {
                const readyGuides = await getReadyGuides()
                setReadyGuides(readyGuides ?? [])
            } catch (error) {
                console.error("Erro ao buscar guias:", error);
            }
        }
        fetchReadyGuides()
    }, [])

    const filteredreadyGuides = useMemo(() => {
        const normalizedSearch = removeAccents(search.toLowerCase().trim());

        return readyGuides.filter((guide) => {
            const matchesSearch = (removeAccents(guide.title.toLowerCase()).includes(normalizedSearch.toLowerCase()) || guide.cities.some(city => removeAccents(city.toLowerCase()).includes(normalizedSearch.toLowerCase())))
            const matchesType = travelType === "Todos" || guide.travelType === travelType;
            const matchesContinent = continentSelected === "Todos" || guide.continent === continentSelected;

            return matchesSearch && matchesType && matchesContinent;
        });
    }, [readyGuides, search, travelType, continentSelected]);

    return (
        <div className={`relative overflow-hidden bg-background-color -mt-15 rounded-t-4xl px-4 ${filteredreadyGuides?.length == 0 ? 'pb-20' : 'pb-0'}`}>
            <h1 className="mt-4 text-3xl font-medium text-primary-color"> {texts.readyGuides.featuredReadyGuides} </h1>

            <div className="flex flex-col-reverse xl:grid xl:grid-cols-[4fr_1fr]">
                <div className="grid grid-cols-1 gap-4
                    md:grid-cols-2
                    lg:grid-cols-3 lg:gap-2
                    2xl:grid-cols-4 2xl:gap-4
                ">
                    {filteredreadyGuides?.length ? (
                        filteredreadyGuides?.map((guide, index) => (
                            <GuideCard key={index}
                                id={guide.id}
                                image={guide.imageURL}
                                title={guide.title}
                                cities={guide.cities}
                                duration={guide.days}
                                type={guide.travelType}
                                continent={guide.continent}
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
                <div className="mt-4 gap-2 flex flex-col lg:ml-2">
                    <SearchBar placeholder={texts.readyGuides.searchBarPlaceholder}
                        search={search}
                        setSearch={setSearch}
                    />
                    <div className="flex flex-col gap-y-2
                        md:flex-row md:gap-2
                        lg:flex-col
                    ">
                        <Dropdown icon={<Plane />}
                            title={texts.form.type}
                            options={TripTypeFilter}
                            bottom={true}
                            tailwindTags="bg-white rounded-2xl md:w-full"
                            value={travelType!}
                            onChange={setTravelType}

                        />

                        <Dropdown icon={<Earth />}
                            title={texts.form.continent}
                            options={ContinentsFilter}
                            bottom={true}
                            tailwindTags="bg-white rounded-2xl md:w-full"
                            value={continentSelected}
                            onChange={setContinentSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}