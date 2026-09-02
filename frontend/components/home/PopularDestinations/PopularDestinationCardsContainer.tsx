import PopularDestinationsCard from "./PopularDestinationsCard";
import { getDestinations } from "@/services/destination.service";

export default async function PopularDestinationsCardContainer() {
    const destinations = await getDestinations()

    return (
        <div className="flex justify-between">
            {destinations.slice(0, 5).map((destination, index) => (
                <PopularDestinationsCard key={index}
                    image={destination.imageURL}
                    title={destination.destination}
                    text={destination.description}
                    route_to_destination={`/destinations/${destination.id}`}
                />
            ))}
        </div>
    )
}