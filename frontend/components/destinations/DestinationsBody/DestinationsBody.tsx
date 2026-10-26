"use client";

import texts from "@/constants/texts";
import DestinationCard from "../DestinationsCard/DestinationsCard";
import { getDestinations } from "@/services/destination.service";
import { useEffect, useMemo, useState } from "react";
import { DestinationInterface } from "@/interfaces/destination.interface";
import { UserInterface } from "@/interfaces/user.interface";
import SearchBar from "@/components/ui/SearchBar/Searchbar";
import removeAccents from "@/utils/removeAccents";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import { Earth, Plane } from "lucide-react";
import { ContinentsFilter, TripTypeFilter } from "@/constants/enum";

interface DestinationBodyProps {
    user?: UserInterface;
}

export default function DestinationBody({ user }: DestinationBodyProps) {
    const [travelType, setTravelType] = useState("Todos");
    const [destinations, setDestinations] = useState<DestinationInterface[]>([]);
    const [search, setSearch] = useState("");
    const [continentSelected, setContinentSelected] = useState("Todos");

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const data = await getDestinations();
                setDestinations(data ?? []);
            } catch (error) {
                console.error("Erro ao buscar destinos:", error);
            }
        };

        fetchDestinations();
    }, []);

    useEffect(() => {
        if (localStorage.getItem("continentSelected")) setContinentSelected(localStorage.getItem("continentSelected")!)
    }, []);

    useEffect(() => {
        return () => {
            localStorage.removeItem("continentSelected");
        };
    }, []);

    const filteredDestinations = useMemo(() => {
        const normalizedSearch = removeAccents(search.toLowerCase().trim());

        return destinations.filter((destination) => {
            const matchesSearch = removeAccents(destination.country.toLowerCase()).includes(normalizedSearch) || removeAccents(destination.destination.toLowerCase()).includes(normalizedSearch);
            const matchesType = travelType === "Todos" || destination.travelType === travelType;
            const matchesContinent = continentSelected === "Todos" || destination.continent === continentSelected;

            return matchesSearch && matchesType && matchesContinent;
        });
    }, [destinations, search, travelType, continentSelected]);

    return (
        <div className={`relative -mt-15 h-full overflow-hidden rounded-t-4xl bg-background-color ${filteredDestinations?.length == 0 ? 'pb-20' : 'pb-0'}`}>
            <h1 className="mx-4 mt-4 text-3xl font-medium text-primary-color"> {texts.destinations.featuredDestinations} </h1>

            <div className="flex flex-col-reverse xl:grid xl:grid-cols-[4fr_1fr]">
                <div className="grid grid-cols-1 gap-4 
                    md:grid-cols-2 
                    xl:grid-cols-3 xl:gap-0
                ">
                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                id={destination.id}
                                image={destination.imageURL}
                                name={destination.destination}
                                description={destination.description}
                                travel_type={destination.travelType}
                                continent={destination.continent}
                                country={destination.country}
                                user={user}
                            />
                        ))
                    ) : (
                        <div className="col-span-full flex min-h-120 items-center justify-center py-20">
                            <p>Nenhum roteiro encontrado</p>
                        </div>
                    )}
                </div>
                <div className="mr-4 mt-4 gap-2 flex flex-col">
                    <SearchBar placeholder={texts.readyGuides.searchBarPlaceholder}
                        search={search}
                        setSearch={setSearch}
                    />
                    <div className="flex flex-col gap-y-2
                        md:flex-row md:gap-2
                        lg:flex-col">
                        <Dropdown icon={<Plane />}
                            title={texts.form.type}
                            options={TripTypeFilter}
                            bottom={true}
                            value={travelType!}
                            tailwindTags="bg-white rounded-2xl md:w-full"
                            onChange={setTravelType}

                        />

                        <Dropdown icon={<Earth />}
                            title={texts.form.continent}
                            options={ContinentsFilter}
                            bottom={true}
                            value={continentSelected}
                            tailwindTags="bg-white rounded-2xl md:w-full"
                            onChange={setContinentSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}