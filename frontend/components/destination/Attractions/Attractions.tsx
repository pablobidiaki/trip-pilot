import texts from "@/constants/texts";
import { DestinationInterface } from "@/interfaces/destination.interface";
import { Landmark } from "lucide-react";
import AttractionsCard from "./AttractionsCard";

interface AttractionsProps {
    destination: DestinationInterface[]
}

export default function Attractions({ destination }: AttractionsProps) {
    return (
        <div className="mx-2">
            <div className="flex items-center gap-2 my-5">
                <Landmark size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.mainAttractions}</h1>
            </div>
            <div className="grid grid-cols-1 gap-5
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-6 xl:gap-2
            ">
                 {destination[0].attractions.map((destination_item, index) => (
                    <AttractionsCard key={index}
                                     image={destination_item.image}
                                     name={destination_item.name}
                                     description={destination_item.shortDescription}
                                     cost_estimate={destination_item.estimateCost}
                    />
                ))}
            </div>
        </div>
    )
}