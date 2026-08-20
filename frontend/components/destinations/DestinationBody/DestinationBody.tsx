import ButtonFilters from "@/components/ButtonFilters/ButtonFilters"
import texts from "@/constants/texts"
import DestinationCard from "../DestinationCard/DestinationCard"

export default function DestinationBody(){
    const destinations = [
        {image: "/imgs/destinations/teste.jpg", name: "Paris, França", description: "A cidade luz, com sua historia. artee e gastronomia incomparaveis", travel_type: "Cultura", country:"França"},
        {image: "/imgs/destinations/teste.jpg", name: "Santorini, Grecia", description: "A cidade luz, com sua historia. artee e gastronomia incomparaveis", travel_type: "Cultura", country:"França"},
        {image: "/imgs/destinations/teste.jpg", name: "Nova York, EUA", description: "A cidade luz, com sua historia. artee e gastronomia incomparaveis", travel_type: "Cultura", country:"França"},
        {image: "/imgs/destinations/teste.jpg", name: "Fernando de noronha, Brasil", description: "A cidade luz, com sua historia. artee e gastronomia incomparaveis", travel_type: "Cultura", country:"França"},
        {image: "/imgs/destinations/teste.jpg", name: "Dubai, Emirados arabes", description: "A cidade luz, com sua historia. artee e gastronomia incomparaveis", travel_type: "Cultura", country:"França"}
    ]
    return(
        <div className="relative h-screen overflow-hidden bg-white -mt-5 rounded-t-4xl">
            <ButtonFilters />
            <h1 className="text-primary-color mt-10 mx-4 text-3xl font-medium">{texts.destinations.featured_destinations}</h1>

            <div className="grid grid-cols-4">
                {destinations.map(destination => (
                    <DestinationCard key={destination.name}
                                    image={destination.image}
                                    name={destination.name}
                                    description={destination.description}
                                    travel_type={destination.travel_type}        
                                    country={destination.country}        
                    />
                ))}
            </div>

        </div>
    )
}