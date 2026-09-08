import { ToursInterface } from "@/interfaces/itinerary.interface"
import TourCard from "./TourCard"

interface ToursProps{
    tours: ToursInterface[]
}

export default function Tours({tours}: ToursProps){
    return(
        <div className="relative grid grid-cols-3 mx-auto w-fit gap-15 gap-y-5">
            {tours.map((tour, index) => (
                <TourCard key={index} imageURL={tour.imageURL} title={tour.name} description={tour.description} price={tour.price} />
            ))}
        </div>
    )
}