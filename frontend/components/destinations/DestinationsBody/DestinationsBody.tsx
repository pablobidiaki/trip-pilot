"use client"

import ButtonFilters from "@/components/ui/ButtonFilters/ButtonFilters"
import texts from "@/constants/texts"
import DestinationCard from "../DestinationsCard/DestinationsCard"
import WhyChoseTripPilot from "../WhyChoseTripPilot/WhyChoseTripPilot"
import { getDestinations } from "@/services/destination.service"
import { useEffect, useState } from "react"
import { DestinationInterface } from "@/interfaces/destination.interface"
import { UserInterface } from "@/interfaces/user.interface"
import SearchBar from "@/components/ui/SearchBar/Searchbar"
import removeAccents from "@/utils/removeAccents";

interface DestinationBodyProps{
    user: UserInterface
}

export default function DestinationBody({user}: DestinationBodyProps) {
    const [selected, setSelected] = useState("Todos")
    const [destinations, setDestinations] = useState<DestinationInterface[]>()
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        const _getDestinations = async () => {
            const destinations = await getDestinations()
            setDestinations(destinations)
        }
        _getDestinations()
    }, [destinations])

    return (
        <div className="relative h-full overflow-hidden bg-white -mt-5 rounded-t-4xl">
            <div className="flex items-center mt-10 justify-between mx-4">
                <ButtonFilters selected={selected} setSelected={setSelected} />
                <SearchBar placeholder={texts.readyGuides.searchBarPlaceholder} search={search} setSearch={setSearch} />
            </div>
            <h1 className="text-primary-color mt-10 mx-4 text-3xl font-medium">{texts.destinations.featuredDestinations}</h1>

            <div className="grid grid-cols-[4fr_1fr] gap-4">
                <div className="grid grid-cols-3 gap-4">
                    {destinations?.map((destination) => (
                        (removeAccents(destination.country.toLowerCase()).includes(search.toLowerCase()) || removeAccents(destination.destination.toLowerCase()).includes(search.toLowerCase())) &&
                        (selected === "Todos" || destination.travelType === selected) &&
                        <DestinationCard
                            key={destination.id}
                            id={destination.id}
                            image={destination.imageURL}
                            name={destination.destination}
                            description={destination.description}
                            travel_type={destination.travelType}
                            country={destination.country}
                            user={user}
                        />
                    ))}
                </div>

                <WhyChoseTripPilot />

            </div>
        </div>
    )
}