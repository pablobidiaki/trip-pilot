import { Landmark } from "lucide-react";
import ButtonFilters from "../../ButtonFilters/ButtonFilters";
import GuideCard from "../GuideCard/GuideCard";

export default function ReadyGuidesBody() {
    return(
        <div className="relative h-screen overflow-hidden bg-white -mt-5 rounded-t-4xl">
            <ButtonFilters />
            <div className="grid grid-cols-3 justify-items-center">
                <GuideCard image={"/imgs/itinerary/hotel-teste.jpg"} 
                           title={"Japao essencial"} 
                           subtitle={"Toquio, Kyoto, Osaka e Nara"} 
                           duration={"10 dias"} 
                           type={"Cultura"} 
                           type_icon={<Landmark />} 
                           description={"O melhor do Japão em uma viagem inesquicível entre tradição e modernidade."} 
                           link_guide={"/"} 
                           price={10000}/>
                <GuideCard image={"/imgs/itinerary/hotel-teste.jpg"} 
                           title={"Japao essencial"} 
                           subtitle={"Toquio, Kyoto, Osaka e Nara"} 
                           duration={"10 dias"} 
                           type={"Cultura"} 
                           type_icon={<Landmark />} 
                           description={"O melhor do Japão em uma viagem inesquicível entre tradição e modernidade."} 
                           link_guide={"/"} 
                           price={10000}/>
                <GuideCard image={"/imgs/itinerary/hotel-teste.jpg"} 
                           title={"Japao essencial"} 
                           subtitle={"Toquio, Kyoto, Osaka e Nara"} 
                           duration={"10 dias"} 
                           type={"Cultura"} 
                           type_icon={<Landmark />} 
                           description={"O melhor do Japão em uma viagem inesquicível entre tradição e modernidade."} 
                           link_guide={"/"} 
                           price={10000}/>
                <GuideCard image={"/imgs/itinerary/hotel-teste.jpg"} 
                           title={"Japao essencial"} 
                           subtitle={"Toquio, Kyoto, Osaka e Nara"} 
                           duration={"10 dias"} 
                           type={"Cultura"} 
                           type_icon={<Landmark />} 
                           description={"O melhor do Japão em uma viagem inesquicível entre tradição e modernidade."} 
                           link_guide={"/"} 
                           price={10000}/>
            </div>
            
        </div>
    )
}