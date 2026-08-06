import texts from "@/constants/texts";
import ItineraryExamplesCard from "./ItineraryExamplesCard";
import { TripType } from "@/constants/enum";

export default function ItineraryExamplesCardsContainer(){
    return(
        <div className="flex justify-between">
            <ItineraryExamplesCard image={"/imgs/countries/japan_itinerary.jpg"} 
                                   title={texts.itinerary_example.japan_title} 
                                   text={texts.itinerary_example.japan_text} 
                                   days={7} trip_type={TripType.Economy} 
                                   price={"9.200"} 
                                   route_to_itinerary={"/"}
            />
            <ItineraryExamplesCard image={"/imgs/countries/atacama.jpg"} 
                                   title={texts.itinerary_example.chile_title} 
                                   text={texts.itinerary_example.chile_text} 
                                   days={10} trip_type={TripType.Adventure} 
                                   price={"6.400"} 
                                   route_to_itinerary={"/"}
            />
            <ItineraryExamplesCard image={"/imgs/countries/italy_itinerary.jpg"} 
                                   title={texts.itinerary_example.italy_title} 
                                   text={texts.itinerary_example.italy_text} 
                                   days={9} trip_type={TripType.Cultural} 
                                   price={"8.100"} 
                                   route_to_itinerary={"/"}
            />
            <ItineraryExamplesCard image={"/imgs/countries/greece.jpg"} 
                                   title={texts.itinerary_example.greece_title} 
                                   text={texts.itinerary_example.greece_text} 
                                   days={8} trip_type={TripType.Romantic} 
                                   price={"7.600"} 
                                   route_to_itinerary={"/"}
            />
        </div>
    )
}