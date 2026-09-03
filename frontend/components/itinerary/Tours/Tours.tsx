"use client"

import { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import TourCard from "./TourCard";
import { ToursInterface } from "@/interfaces/itinerary.interface";

interface ToursProps {
    tours: ToursInterface[];
}

const ITEMS_PER_PAGE = 3;

export default function Tours({ tours }: ToursProps) {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(tours.length / ITEMS_PER_PAGE);

    const nextPage = () => {
        if (page < totalPages - 1) setPage((prev) => prev + 1);
    }

    const previousPage = () => {
        if (page > 0) setPage((prev) => prev - 1);
    }

    return (
        <div className="relative border rounded-2xl border-gray-300 min-w-1/3 max-w-1/3 mt-8 bg-white overflow-hidden pb-16">
            <CardTitle icon={<Camera />} title={texts.itinerary_titles.tours} />

            <div className="overflow-hidden w-full">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${page * 100}%)` }}>
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div key={pageIndex} className="w-full shrink-0 flex flex-col gap-2">
                            {tours.slice(pageIndex * ITEMS_PER_PAGE, pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE).map((tour, tourIndex) => (
                                <TourCard key={tourIndex}
                                    image={tour.imageURL}
                                    title={tour.name}
                                    description={tour.description}
                                    price={tour.price}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-3 w-full">
                <div className="flex gap-6 w-fit mx-auto items-center">
                    <button onClick={previousPage} disabled={page === 0} className="disabled:opacity-30 disabled:cursor-not-allowed">
                        <ChevronLeft size={30} className="p-1 bg-blue-100 rounded-full shrink-0 transition-all hover:bg-blue-300 hover:text-white hover:scale-110" />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button key={index} onClick={() => setPage(index)} className={`rounded-full transition-all duration-200 ${page === index ? "w-2.5 h-2.5 bg-blue-500" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`} />
                        ))}
                    </div>

                    <button onClick={nextPage} disabled={page >= totalPages - 1} className="disabled:opacity-30 disabled:cursor-not-allowed">
                        <ChevronRight size={30} className="p-1 bg-blue-100 rounded-full shrink-0 transition-all hover:bg-blue-300 hover:text-white hover:scale-110" />
                    </button>
                </div>
            </div>
        </div>
    );
}