import CardTitle from "../CardTitle/CardTitle";
import texts from "@/constants/texts";

import { CarFront, Plane, BusFront } from "lucide-react"
import TransportInfo from "./TransportInfo";

export default function Transport(){
    return(
        <div className="mx-4 border rounded-2xl border-gray-300 max-w-1/4 mt-8 bg-white">
            <CardTitle icon={<CarFront />} title={texts.itinerary_titles.transportation}/>
            <p className="mx-4 text-2xl mt-2 text-primary-color font-medium">De <span>São Paulo</span> para <span> Gramado</span></p>
            <TransportInfo icon={<Plane />} title="Aereo (recomendado)" first_info="Voo direto: ~1h30min" second_info="ida e volta por pessoa: ~R$ 400,00"/>
            <hr className="border-gray-300"/>
            <TransportInfo icon={<CarFront />} title="Carro alugado (recomendado)" first_info="Diaria: ~R$ 150,00" second_info="Ideal para conhecer atrações próximas"/>
            <hr className="border-gray-300"/>
            <TransportInfo icon={<BusFront />} title="Onibus e transfers" first_info="Linha de onibus e transfers disponiveis para passeios"/>
        </div>
    )
}