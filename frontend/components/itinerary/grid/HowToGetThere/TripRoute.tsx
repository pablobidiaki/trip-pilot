import texts from "@/constants/texts";
import { MoveDown, MoveUp } from "lucide-react"

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
                <p className="text-primary-color font-medium">{texts.how_to_get_there.boarding} </p>
                <img src={country_origin_flag}
                        alt="Bandeira"
                        className="w-22 shadow-sm shadow-gray-400 my-1"
                />
                <p className="text-second-color"> {country_origin_name}</p>
            </div>
            
            <div className="flex">
                <MoveDown className="mx-auto my-4" />
                <MoveUp className="mx-auto my-4" />
            </div>

            <div className="flex flex-col items-center">
                <p className="text-primary-color font-medium">{texts.how_to_get_there.disembarkation}</p>
                <img src={country_destination_flag}
                        alt="Bandeira"
                        className="w-22 shadow-sm shadow-gray-400 my-1"
                />
                <p className="text-second-color"> {country_destination_name}</p>
            </div>
        </div>
    )
}