"use client"

import { useState } from "react";
import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Building2, Globe, Heart, Landmark, MountainSnow, Parasol, Wallet } from "lucide-react";

export default function ButtonFilters() {
    const [selected, setSelected] = useState("Todos");

    const filters = [
        { text: "Todos", icon: <Globe /> },
        { text: "Praia", icon: <Parasol /> },
        { text: "Aventura", icon: <MountainSnow /> },
        { text: "Cultural", icon: <Landmark /> },
        { text: "Urbano", icon: <Building2 /> },
        { text: "Romântico", icon: <Heart /> },
        { text: "Econômico", icon: <Wallet /> },
    ];

    return (
        <div className="flex justify-evenly mt-10">
            {filters.map((filter) => (
                <InfoItem
                    key={filter.text}
                    icon={filter.icon}
                    text={filter.text}
                    selected={selected === filter.text}
                    onClick={() => setSelected(filter.text)}
                />
            ))}
        </div>
    );
}