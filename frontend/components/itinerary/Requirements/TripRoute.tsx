import texts from "@/constants/texts";
import { MoveDown } from "lucide-react"
import Image from "next/image";

interface TripRouteProps{
    country_origin_flag: string,
    country_origin_name: string,
    country_destination_flag: string,
    country_destination_name: string
}

export default function TripRoute({country_origin_flag, country_origin_name, country_destination_flag, country_destination_name}: TripRouteProps){
    return(
        <div className="min-w-1/2">
            <div className="flex gap-2 items-center">
                <Image src={country_origin_flag}
                        alt="Bandeira"
                        height={50}
                        width={70}
                />
                <p>{texts.requirements.origin} {country_origin_name}</p>
            </div>

            <MoveDown className="mx-auto my-4" />

            <div className="flex gap-2 items-center">
                <Image src={country_destination_flag}
                        alt="Bandeira"
                        height={50}
                        width={70}
                />
                <p>{texts.requirements.destination} {country_destination_name}</p>
            </div>
        </div>
    )
}