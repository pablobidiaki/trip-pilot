import CardTitle from "../CardTitle/CardTitle";
import texts from "@/constants/texts";

import { CarFront, Plane, BusFront } from "lucide-react"
import TransportInfo from "./TransportInfo"
import { TransportationInterface } from "@/interfaces/itinerary.interface";

interface TransportProps{
    transports: TransportationInterface[]
}

export default function Transport({transports}: TransportProps){
    return(
        <div className="border rounded-2xl border-gray-300 mt-8 bg-white">
            <CardTitle icon={<CarFront />} title={texts.itinerary_titles.transportation}/>
            <TransportInfo icon={<CarFront />} title={transports[0].type} first_info={`Diaria: ~${texts.real} ${transports[0].averagePrice}`} second_info="Ideal para conhecer atrações próximas"/>
            <hr className="border-gray-300"/>
            <TransportInfo icon={<BusFront />} title={transports[1].type} first_info={`Preço médio: ~${texts.real} ${transports[1].averagePrice}`} second_info="Linha de onibus e transfers disponiveis para passeios"/>
        </div>
    )
}   