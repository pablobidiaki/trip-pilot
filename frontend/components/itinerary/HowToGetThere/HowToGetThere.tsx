import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { Plane } from "lucide-react";
import TripRoute from "../Requirements/TripRoute";



export default function HowToGetThere(){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 max-w-1/4 mt-8">
            <CardTitle icon={<Plane />} title={texts.itinerary_titles.how_to_get_there}/>
            <div className="m-4">
                 <TripRoute country_origin_flag="/imgs/itinerary/brasil.jpg" country_origin_name="Brasil (São Paulo)" country_destination_flag="/imgs/itinerary/bolivia.jpg" country_destination_name="Bolivia"/>
            </div>
        </div>
    )
}