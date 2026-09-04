"use client";

import texts from "@/constants/texts";
import { useState } from "react";

interface ItineraryNavigationProps{
    optionSelected: string,
    onClick: (value: string) => void
}

const options = [
    texts.tabsOptions.provided_data,
    texts.tabsOptions.accommodations,
    texts.tabsOptions.tours,
    texts.tabsOptions.cost_estimate,
    texts.tabsOptions.weather,
    texts.tabsOptions.transportation,
    texts.tabsOptions.requirements,
    texts.tabsOptions.tips,
    texts.tabsOptions.flights,
    texts.tabsOptions.tipical_foods,
    texts.tabsOptions.itinerary,
];

export default function ItineraryNavigation({optionSelected, onClick}: ItineraryNavigationProps) {

    const [selected, setSelected] = useState(optionSelected);

    const handleOptionClicked = (option: string) => {
        onClick(option)
        setSelected(option)
    }

    return (
        <div className="relative ml-4 mt-5 bg-white border border-gray-200 rounded-2xl max-w-40 min-w-40 p-2">
            {options.map((option) => {
                const isSelected = selected === option;

                return (
                    <p key={option} onClick={() => handleOptionClicked(option)} className={`text-sm p-2 rounded-2xl mb-2 cursor-pointer transition-all duration-200 ${isSelected ? "bg-blue-500 text-white" : "text-primary-color bg-gray-200 hover:bg-blue-300 hover:text-white hover:scale-105"}`}>
                        {option}
                    </p>
                );
            })}
        </div>
    );
}