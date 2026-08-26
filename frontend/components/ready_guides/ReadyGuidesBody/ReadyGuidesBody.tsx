import { Landmark } from "lucide-react";
import ButtonFilters from "../../ui/ButtonFilters/ButtonFilters";
import GuideCard from "../GuideCard/GuideCard";
import { getReadyGuides } from "@/services/readyGuides.service";

export default async function ReadyGuidesBody() {
    const readyGuides = await getReadyGuides()
    console.log(readyGuides)
    return (
        <div className="relative overflow-hidden bg-white -mt-5 rounded-t-4xl">
            <ButtonFilters />
            <div className="grid grid-cols-3 justify-items-center">
                {readyGuides.map((guide, index) => (
                    <GuideCard key={index}
                        image={guide.imageURL}
                        title={guide.title}
                        cities={guide.cities}
                        duration={guide.days}
                        type={guide.travelType}
                        description={guide.description}
                        link_guide={guide.id}
                        price={guide.price} 
                    />
                ))}
            </div>

        </div>
    )
}