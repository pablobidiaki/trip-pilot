import texts from "@/constants/texts";
import PopularDestinationsCard from "./PopularDestinationsCard";

export default function PopularDestinationsCardContainer(){
    return(
        <div className="flex justify-between">
            <PopularDestinationsCard image={"/imgs/countries/japan.jpg"} title={texts.popular_destination.japan} text={texts.popular_destination.japan_description} />
            <PopularDestinationsCard image={"/imgs/countries/chile.jpg"} title={texts.popular_destination.chile} text={texts.popular_destination.chile_description} />
            <PopularDestinationsCard image={"/imgs/countries/italy.jpg"} title={texts.popular_destination.italy} text={texts.popular_destination.italy_description} />
            <PopularDestinationsCard image={"/imgs/countries/new_york.jpg"} title={texts.popular_destination.new_york} text={texts.popular_destination.new_york_description} />
            <PopularDestinationsCard image={"/imgs/countries/bali.jpg"} title={texts.popular_destination.bali} text={texts.popular_destination.bali_description} />
        </div>
    )
}