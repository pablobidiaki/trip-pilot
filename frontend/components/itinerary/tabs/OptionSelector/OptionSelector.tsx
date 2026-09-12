"use client";

import texts from "@/constants/texts";
import { Binoculars, ChefHat, CircleDollarSign, Hotel, Info, Lightbulb, Calendar, SunSnow, TableOfContents, Ticket, Van } from "lucide-react";
import { useState } from "react";

interface ItineraryNavigationProps{
    optionSelected: string,
    onClick: (value: string) => void
}

const options = [
    {icon: <Info />, text: texts.tabsOptions.providedData},
    {icon: <Hotel />, text:texts.tabsOptions.accommodations},
    {icon: <Binoculars />, text:texts.tabsOptions.tours},
    {icon: <CircleDollarSign />, text:texts.tabsOptions.costEstimate},
    {icon: <SunSnow />, text:texts.tabsOptions.weather},
    {icon: <Van />, text:texts.tabsOptions.transportation},
    {icon: <TableOfContents />, text:texts.tabsOptions.requirements},
    {icon: <Lightbulb />, text:texts.tabsOptions.tips},
    {icon: <Ticket />, text:texts.tabsOptions.flights},
    {icon: <ChefHat />, text:texts.tabsOptions.tipicalFoods},
    {icon: <Calendar />, text:texts.tabsOptions.itinerary}, 
]

export default function ItineraryNavigation({optionSelected, onClick}: ItineraryNavigationProps) {

    const [selected, setSelected] = useState(optionSelected);

    const handleOptionClicked = (option: string) => {
        onClick(option)
        setSelected(option)
    }

    return (
        <div className="relative ml-4 mt-5 bg-white border border-gray-200 rounded-2xl max-w-40 min-w-40 p-2">
            {options.map((option) => {
                const isSelected = selected === option.text;

                return (
                    <div key={option.text} onClick={() => handleOptionClicked(option.text)} className={`flex gap-2 items-center text-sm p-2 rounded-2xl mb-2 cursor-pointer transition-all duration-200 ${isSelected ? "bg-blue-500 text-white" : "text-primary-color bg-gray-200 hover:bg-blue-300 hover:text-white hover:scale-105"}`}>
                        <span>{option.icon}</span>
                        <p> {option.text}</p>
                    </div>
                );
            })}
        </div>
    );
}