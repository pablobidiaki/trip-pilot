"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import texts from "@/constants/texts";
import TourCard from "./TourCard";
import { ToursInterface } from "@/interfaces/itinerary.interface";

interface ToursProps {
    tours: ToursInterface[];
}

export default function Tours({ tours }: ToursProps) {

    return (
        <div className="relative border rounded-2xl border-gray-100 mt-5 bg-white overflow-hidden
            xl:max-w-3/5 xl:min-w-3/5
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">3</span> {texts.itineraryTitles.tours}</h1>
            <p className="text-center text-primary italic mt-2">{texts.tours.tourText}</p>
            <div className="overflow-hidden w-full">
                <div className="grid grid-cols-1
                    xl:grid-cols-3
                ">
                    {tours.map((tour, tourIndex) => (
                        <TourCard key={tourIndex}
                            image={tour.imageURL}
                            title={tour.name}
                            description={tour.description}
                            price={tour.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}