import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import AccomodationCard from "./AccomodationCard"

interface AccommodationProps {
    guide: ReadyGuideInterface[]
}

export default function Accommodation({ guide }: AccommodationProps) {
    return (
        <div className="max-w-9/12 mx-auto ">
            {guide[0].accommodations.map(hotel => (
                <AccomodationCard key={hotel.days}
                    image={hotel.imageURL}
                    days={hotel.days}
                    name={hotel.name}
                    address={hotel.address}
                    text={hotel.description}
                    price={hotel.price}
                    review={hotel.review}
                />
            ))}
        </div>
    )
}