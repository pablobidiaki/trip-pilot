import { ToursInterface } from "@/interfaces/itinerary.interface"
import TourCard from "./TourCard"

interface ToursProps{
    tours: ToursInterface[]
}

export default function Tours({tours}: ToursProps){
    return(
        <div className="relative grid grid-cols-1 mx-auto w-fit gap-y-5 mb-5 animate-[optionSelector_300ms_ease-out]
            md:grid-cols-2 md:gap-2
            xl:grid-cols-3
        ">
            {tours.map((tour, index) => (
                <TourCard key={index} imageURL={tour.imageURL} title={tour.name} description={tour.description} price={tour.price} />
            ))}
        </div>
    )
}