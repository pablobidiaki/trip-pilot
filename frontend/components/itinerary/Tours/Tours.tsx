"use client"

import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react"
import TourCard from "./TourCard";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { useState } from "react";

interface ToursProps {
    itinerary: ItineraryInterface[]
}

const ITEMS_PER_PAGE = 3

export default function Tours({ itinerary }: ToursProps) {
    const [page, setPage] = useState(0);

    const visibleItems = itinerary[0].itinerary.tours.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )

    const nextPage = () => {
        if ((page + 1) * ITEMS_PER_PAGE < itinerary[0].itinerary.tours.length) setPage((prev) => prev + 1);
    }

    const previousPage = () => {
        if (page > 0) setPage((prev) => prev - 1)
    }

    return (
        <div className="relative mx-4 border rounded-2xl border-gray-300 min-w-1/4 max-w-1/4 mt-8 bg-white">
            <CardTitle icon={<Camera />} title={texts.itinerary_titles.tours} />

            {visibleItems.map((tour, index) => (
                <TourCard key={index}
                    image={tour.imageURL}
                    title={tour.name}
                    description={tour.description}
                    price={tour.price}
                />
            ))}

            <div className="absolute bottom-1 left-1/3">
                <div className="flex gap-25">
                    <ChevronLeft size={30} onClick={previousPage} className="cursor-pointer p-1 bg-blue-100 rounded-full shrink-0 hover:duration-200 hover:bg-blue-300 hover:text-white hover:scale-110"/>
                    <ChevronRight size={30} onClick={nextPage} className="cursor-pointer p-1 bg-blue-100 rounded-full shrink-0 hover:duration-200 hover:bg-blue-300 hover:text-white hover:scale-110"/>
                </div>
            </div>
        </div>
    )
}