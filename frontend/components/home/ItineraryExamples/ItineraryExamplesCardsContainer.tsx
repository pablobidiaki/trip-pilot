import ItineraryExamplesCard from "./ItineraryExamplesCard";
import { getReadyGuides } from "@/services/readyGuides.service";

export default async function ItineraryExamplesCardsContainer() {
    const readyGuides = await getReadyGuides()
    return (
        <div className="grid grid-cols-4 gap-20">
            {readyGuides.slice(0, 4).map((guide, index) => (
                <ItineraryExamplesCard key={index}
                    image={guide.imageURL}
                    title={guide.title}
                    text={guide.description}
                    days={guide.days} 
                    trip_type={guide.travelType}
                    price={guide.price.toString()}
                    route_to_itinerary={`/ready_guides/${guide.id}`}
                />
            ))}
        </div>
    )
}