"use client"

import { useEffect, useState } from "react";
import PopularDestinationsCard from "./PopularDestinationsCard";
import { getDestinations } from "@/services/destination.service";
import { DestinationInterface } from "@/interfaces/destination.interface";

export default function PopularDestinationsCardContainer() {
    const [destinations, setDestinations] = useState<DestinationInterface[]>()

    useEffect(() => {
        const _getDestinations = async () => {
            const destinations = await getDestinations()
            setDestinations(destinations)
        }
        _getDestinations()
    }, [destinations])

    return (
        <div className="flex flex-col items-center gap-y-5
        md:grid md:grid-cols-2 md:gap-2
        xl:grid-cols-3
        2xl:flex 2xl:flex-row 2xl:justify-between
        ">
            {(destinations ?? []).slice(0, 5).map((destination, index) => (
                <PopularDestinationsCard key={index}
                    image={destination.imageURL}
                    title={destination.destination}
                    text={destination.description}
                    routeToDestination={`/destinations/${destination.id}`}
                />
            ))}
        </div>
    )
}