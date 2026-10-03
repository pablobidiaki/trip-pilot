"use client";

import texts from "@/constants/texts";

import {
    Binoculars,
    ChefHat,
    CircleDollarSign,
    Hotel,
    Info,
    Lightbulb,
    Calendar,
    SunSnow,
    TableOfContents,
    Ticket,
    Van
} from "lucide-react";

import { useState } from "react";

interface ItineraryNavigationProps {
    optionSelected: string;
    onClick: (value: string) => void;
}

const options = [
    { icon: <Info />, text: texts.tabsOptions.providedData },
    { icon: <Hotel />, text: texts.tabsOptions.accommodations },
    { icon: <Binoculars />, text: texts.tabsOptions.tours },
    { icon: <CircleDollarSign />, text: texts.tabsOptions.costEstimate },
    { icon: <SunSnow />, text: texts.tabsOptions.weather },
    { icon: <Van />, text: texts.tabsOptions.transportation },
    { icon: <TableOfContents />, text: texts.tabsOptions.requirements },
    { icon: <Lightbulb />, text: texts.tabsOptions.tips },
    { icon: <Ticket />, text: texts.tabsOptions.flights },
    { icon: <ChefHat />, text: texts.tabsOptions.tipicalFoods },
    { icon: <Calendar />, text: texts.tabsOptions.itinerary },
];

export default function ItineraryNavigation({
    optionSelected,
    onClick
}: ItineraryNavigationProps) {

    const [selected, setSelected] = useState(optionSelected);

    const handleOptionClicked = (option: string) => {
        onClick(option);
        setSelected(option);
    };

    return (
        <div className="relative mt-5 p-2 bg-white  w-40 min-w-40 scrollbar-hide
            max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:overflow-x-auto max-md:scrollbar-thumb-sidebar
            md:ml-2 md:rounded-2xl md:w-fit
            xl:border-gray-100 xl:rounded-2xl xl:border
        ">
            <div className="flex flex-col gap-1
                max-md:flex-row max-md:w-max
            ">
                {options.map((option) => {
                    const isSelected = selected === option.text;
                    return (
                        <div
                            key={option.text}
                            onClick={() => handleOptionClicked(option.text)}
                            className={`flex gap-2 items-center text-sm p-2 rounded-2xl cursor-pointer transition-all duration-200
                                max-md:shrink-0
                                ${isSelected ? "bg-blue-500 text-white" : "text-primary-color bg-gray-200 hover:bg-blue-300 hover:text-white hover:scale-105"} `}>
                            <span className="shrink-0">{option.icon}</span>
                            <p className="whitespace-nowrap">{option.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}