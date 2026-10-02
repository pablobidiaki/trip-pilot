import InfoItem from "@/components/ui/InfoItem/InfoItem";

import {
    Globe,
    Heart,
    Landmark,
    MountainSnow,
    Parasol,
    Trees,
    Wallet
} from "lucide-react";

interface ButtonFiltersProps {
    selected: string;
    setSelected: (value: string) => void;
}

export default function ButtonFilters({
    selected,
    setSelected
}: ButtonFiltersProps) {

    const filters = [
        { text: "Todos", icon: <Globe /> },
        { text: "Praia", icon: <Parasol /> },
        { text: "Aventura", icon: <MountainSnow /> },
        { text: "Cultura", icon: <Landmark /> },
        { text: "Natureza", icon: <Trees /> },
        { text: "Romântico", icon: <Heart /> },
        { text: "Econômico", icon: <Wallet /> },
    ];

    return (
        <div className="w-full min-w-0 overflow-x-auto scrollbar-hide mb-4
            md:overflow-visible 
            xl:mb-0
        ">
            <div className="flex w-max gap-3 
                md:w-full 
                md:justify-between
            ">
                {filters.map((filter) => (
                    <div key={filter.text} className="shrink-0
                        xl:mx-2
                    ">
                        <InfoItem
                            icon={filter.icon}
                            text={filter.text}
                            tailwindTags="hover:bg-[#9799ff] transition-all hover:text-white hover:duration-200 p-2 cursor-pointer rounded-lg
                                md:text-xs
                                lg:text-lg
                            "
                            selected={selected === filter.text}
                            onClick={() => setSelected(filter.text)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}