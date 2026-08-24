import texts from "@/constants/texts";
import { Destination } from "@/interfaces/destination.interface";
import { Landmark } from "lucide-react";
import AttractionsCard from "./AttractionsCard";

interface AttractionsProps {
    destination: Destination[]
}

export default function Attractions({ destination }: AttractionsProps) {
    return (
        <div className="mx-4">
            <div className="flex items-center gap-2 my-5">
                <Landmark size={35} className="text-primary-color font-medium" />
                <h1 className="text-3xl text-primary-color font-medium">{texts.destination.main_attractions}</h1>
            </div>
            <div className="grid grid-cols-6 gap-5">
                <AttractionsCard image={"https://i.imgur.com/n18ol5P.jpeg"}
                    name={destination[0].attractions.firstAttractions.name}
                    description={destination[0].attractions.firstAttractions.shortDescription}
                    cost_estimate={destination[0].attractions.firstAttractions.estimateCost}
                />

                <AttractionsCard image={"https://i.imgur.com/HRgIr66.jpeg"}
                    name={destination[0].attractions.secondAttractions.name}
                    description={destination[0].attractions.secondAttractions.shortDescription}
                    cost_estimate={destination[0].attractions.secondAttractions.estimateCost}
                />

                <AttractionsCard image={"https://i.imgur.com/ZyfKNRS.jpeg"}
                    name={destination[0].attractions.thirdAttractions.name}
                    description={destination[0].attractions.thirdAttractions.shortDescription}
                    cost_estimate={destination[0].attractions.thirdAttractions.estimateCost}
                />

                <AttractionsCard image={"https://i.imgur.com/n18ol5P.jpeg"}
                    name={destination[0].attractions.firstAttractions.name}
                    description={destination[0].attractions.firstAttractions.shortDescription}
                    cost_estimate={destination[0].attractions.firstAttractions.estimateCost}
                />

                <AttractionsCard image={"https://i.imgur.com/HRgIr66.jpeg"}
                    name={destination[0].attractions.secondAttractions.name}
                    description={destination[0].attractions.secondAttractions.shortDescription}
                    cost_estimate={destination[0].attractions.secondAttractions.estimateCost}
                />

                <AttractionsCard image={"https://i.imgur.com/ZyfKNRS.jpeg"}
                    name={destination[0].attractions.thirdAttractions.name}
                    description={destination[0].attractions.thirdAttractions.shortDescription}
                    cost_estimate={destination[0].attractions.thirdAttractions.estimateCost}
                />
            </div>
        </div>
    )
}