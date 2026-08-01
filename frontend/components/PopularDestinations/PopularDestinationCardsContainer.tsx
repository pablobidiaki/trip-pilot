import texts from "@/constants/texts";
import PopularDestinationsCard from "./PopularDestinationsCard";

export default function PopularDestinationsCardContainer(){
    return(
        <div className="flex justify-between">
            <PopularDestinationsCard image={"/imgs/countries/japan.jpg"} title={texts.home.japan} text={texts.home.japan_description} />
            <PopularDestinationsCard image={"/imgs/countries/chile.jpg"} title={texts.home.chile} text={texts.home.chile_description} />
            <PopularDestinationsCard image={"/imgs/countries/italy.jpg"} title={texts.home.italy} text={texts.home.italy_description} />
            <PopularDestinationsCard image={"/imgs/countries/new_york.jpg"} title={texts.home.new_york} text={texts.home.new_york_description} />
            <PopularDestinationsCard image={"/imgs/countries/bali.jpg"} title={texts.home.bali} text={texts.home.bali_description} />
        </div>
    )
}