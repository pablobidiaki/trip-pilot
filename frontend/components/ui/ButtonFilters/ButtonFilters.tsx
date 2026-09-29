import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Globe, Heart, Landmark, MountainSnow, Parasol, Trees, Wallet } from "lucide-react";

interface ButtonFiltersProps{
    selected: string
    setSelected: (value: string) => void
}

export default function ButtonFilters({selected, setSelected}: ButtonFiltersProps) {
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
        <div className="flex gap-25">
            {filters.map((filter) => (
                <InfoItem
                    key={filter.text}
                    icon={filter.icon}
                    text={filter.text}
                    tailwindTags="hover:bg-[#9799ff] transition-all hover:text-white hover:duration-200 p-2 cursor-pointer"
                    selected={selected === filter.text}
                    onClick={() => setSelected(filter.text)}
                />
            ))}
        </div>
    );
}