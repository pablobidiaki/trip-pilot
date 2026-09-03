"use client"

import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react"
import TourCard from "./TourCard";
import { ToursInterface } from "@/interfaces/itinerary.interface";
import { useState } from "react";

interface ToursProps {
    tours: ToursInterface[]
}

const ITEMS_PER_PAGE = 3

export default function Tours({ tours }: ToursProps) {
    const [page, setPage] = useState(0);

    const visibleItems = tours.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )

    const nextPage = () => {
        if ((page + 1) * ITEMS_PER_PAGE < tours.length) setPage((prev) => prev + 1);
    }

    const previousPage = () => {
        if (page > 0) setPage((prev) => prev - 1)
    }

    return (
        <div className="relative border rounded-2xl border-gray-300 min-w-1/3 max-w-1/3 mt-8 bg-white">
            <CardTitle icon={<Camera />} title={texts.itinerary_titles.tours} />

            {visibleItems.map((tour, index) => (
                <TourCard key={index}
                    image={tour.imageURL}
                    title={tour.name}
                    description={tour.description}
                    price={tour.price}
                />
            ))}

            <div className="absolute bottom-1 w-full">
                <div className="flex gap-6 w-fit mx-auto">
                    <ChevronLeft size={30} onClick={previousPage} className="cursor-pointer p-1 bg-blue-100 rounded-full shrink-0 hover:duration-200 hover:bg-blue-300 hover:text-white hover:scale-110" />

                    <div className="flex items-center gap-2">
                        {Array.from({ length: Math.ceil(tours.length / ITEMS_PER_PAGE) }).map((_, index) => (
                            <button key={index}
                                onClick={() => setPage(index)}
                                className={`rounded-full transition-all duration-200 ${page === index ? "w-2.5 h-2.5 bg-blue-500" : "w-2 h-2 bg-gray-300"}`}
                            />
                        ))}
                    </div>

                    <ChevronRight size={30} onClick={nextPage} className="cursor-pointer p-1 bg-blue-100 rounded-full shrink-0 hover:duration-200 hover:bg-blue-300 hover:text-white hover:scale-110" />
                </div>
            </div>
        </div>
    )
}