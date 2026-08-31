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
        <div>
            <div className="flex flex-col items-center">
                <img src={country_origin_flag}
                        alt="Bandeira"
                        className="w-22"
                />
                <p className="text-primary-color font-medium">{texts.how_to_get_there.boarding} <span className="text-second-color"> {country_origin_name}</span></p>
            </div>

            <MoveDown className="mx-auto my-4" />

            <div className="flex flex-col items-center">
                <img src={country_destination_flag}
                        alt="Bandeira"
                        className="w-22"
                />
                <p className="text-primary-color font-medium">{texts.how_to_get_there.disembarkation} <span className="text-second-color"> {country_destination_name}</span></p>
            </div>
        </div>
    )
}