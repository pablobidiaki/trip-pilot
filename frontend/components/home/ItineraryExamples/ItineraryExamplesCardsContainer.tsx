import ItineraryExamplesCard from "./ItineraryExamplesCard";
import { getReadyGuides } from "@/services/readyGuides.service";

export default async function ItineraryExamplesCardsContainer() {
    const readyGuides = await getReadyGuides()
    return (
        <div className="flex flex-col items-center gap-y-5
        md:grid md:grid-cols-2 md:gap-2
        xl:grid-cols-3
        2xl:flex 2xl:flex-row 2xl:justify-between
        ">
            {readyGuides.slice(0, 4).map((guide, index) => (
                <ItineraryExamplesCard key={index}
                    image={guide.imageURL}
                    title={guide.title}
                    text={guide.description}
                    days={guide.days} 
                    trip_type={guide.travelType}
                    price={guide.price}
                    route_to_itinerary={`/ready_guides/${guide.id}`}
                />
            ))}
        </div>
    )
}