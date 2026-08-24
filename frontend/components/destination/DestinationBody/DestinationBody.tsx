import { Destination } from "@/interfaces/destination.interface";
import Attractions from "../Attractions/Attractions";

interface DestinationBodyProps {
    destination: Destination[]
}

export default function DestinationBody({ destination }: DestinationBodyProps) {
    return (
        <div className="">
            <Attractions destination={destination}/>
        </div>
    )
}