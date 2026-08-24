import ButtonFilters from "@/components/ButtonFilters/ButtonFilters"
import texts from "@/constants/texts"
import DestinationCard from "../DestinationCard/DestinationCard"
import WhyChoseTripPilot from "../WhyChoseTripPilot/WhyChoseTripPilot"
import { getDestinations } from "@/services/destination.service"

export default async function DestinationBody() {
        const destinations = await getDestinations();

        return (
            <div className="relative h-full overflow-hidden bg-white -mt-5 rounded-t-4xl">
                <ButtonFilters />
                <h1 className="text-primary-color mt-10 mx-4 text-3xl font-medium">{texts.destinations.featured_destinations}</h1>

                <div className="grid grid-cols-[4fr_1fr] gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        {destinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                id={destination.id}
                                image={destination.imageURL}
                                name={destination.destination}
                                description={destination.description}
                                travel_type={destination.travelType}
                                country={destination.country}
                            />
                        ))}
                    </div>

                    <WhyChoseTripPilot />

                </div>
            </div>
        )
    }