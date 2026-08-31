import Header from "@/components/home/Header/Header";
import texts from "@/constants/texts";

export default function ItineraryBanner() {
    return(
        <div className="relative gap-30">
            <img src={"/imgs/itinerary/banner.png"}
                 alt="Banner"
                 className="w-full absolute z-0"
            />
            <div className="relative z-10">
                <Header />  
            </div>

            <div className="relative mt-2 mx-auto max-w-[85%]">
                <h1 className="text-primary-color text-4xl font-medium">{texts.itinerary_titles.main_title}</h1>
                <p className="text-second-color mt-2">{texts.all_ready}</p>
            </div> 
        </div>
    )
}   