import ButtonFilters from "../../ui/ButtonFilters/ButtonFilters";
import GuideCard from "../GuideCard/GuideCard";
import { getReadyGuides } from "@/services/readyGuides.service";

export default async function ReadyGuidesBody() {
    const readyGuides = await getReadyGuides()

    return (
        <div className="relative overflow-hidden bg-background-color -mt-5 rounded-t-4xl">
            <ButtonFilters />
            <div className="grid grid-cols-4 justify-items-center ">
                {readyGuides.map((guide, index) => (
                    <GuideCard key={index}
                        id={guide.id}
                        image={guide.imageURL}
                        title={guide.title}
                        cities={guide.cities}
                        duration={guide.days}
                        type={guide.travelType}
                        description={guide.description}
                        price={guide.price} 
                    />
                ))}
            </div>
        </div>
    )
}