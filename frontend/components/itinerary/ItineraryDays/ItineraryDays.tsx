import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { Calendar } from "lucide-react";
import ItineraryDaysCard from "./ItineraryDaysCard";

export default function ItineraryDays(){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 mt-8">
            <CardTitle icon={<Calendar />} title={texts.itinerary_titles.itinerary} />
            <div className="grid grid-cols-5 gap-4 p-4">
                <ItineraryDaysCard day="Dia 1 - 10/08 (Dom)" title="Chegada e descoberta" image="/imgs/itinerary/praia.jpg" morning="Chegada em Gramado e check-in no hotel" afternoon="Rua Coberta e lojas do centro" evening="Jantar em restaurantes tipicos" cost_estimate={350}/>
                <ItineraryDaysCard day="Dia 2 - 11/08 (Seg)" title="Natureza e relaxamento" image="/imgs/itinerary/cristo.jpg" morning="Lago Negro e pedalinho" afternoon="Parque do Caracol (Cascata do Caracol)" evening="Jantar e passeio pela Rua Coberta" cost_estimate={400}/>
                <ItineraryDaysCard day="Dia 3 - 12/08 (Ter)" title="Diversão e cultura" image="/imgs/itinerary/praia.jpg" morning="Mini Mundo" afternoon="Snowland" evening="jantar em Gramado" cost_estimate={550}/>
                <ItineraryDaysCard day="Dia 4 - 13/08 (Qua)" title="Cidades próximas" image="/imgs/itinerary/cristo.jpg" morning="Canela - Catedral de Pedra" afternoon="Mundo a Vapor" evening="Jantar e descanso" cost_estimate={450}/>
                <ItineraryDaysCard day="Dia 5 - 14/08 (Qui)" title="Últimos momentos" image="/imgs/itinerary/praia.jpg" morning="Compras de chocolates e lembranças" afternoon="Tempo livre" evening="Check-out e retorno" cost_estimate={300}/>
            </div>
        </div>
    )
}