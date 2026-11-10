import texts from "@/constants/texts";

import { CarFront, BusFront } from "lucide-react"
import TransportInfo from "./TransportInfo"
import { TransportationInterface } from "@/interfaces/itinerary.interface";
import formatCurrent from "@/utils/formatCurrent";

interface TransportProps {
    transports: TransportationInterface[]
}

export default function Transport({ transports }: TransportProps) {
    return (
        <div className="border rounded-2xl border-gray-100 mt-5 bg-white">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2">{texts.itineraryTitles.transportation}</h1>

            <TransportInfo icon={<CarFront />}
                title={transports[0].type}
                first_info={`Diaria: ~${texts.real} ${formatCurrent(transports[0].averagePrice)}`}
                second_info="Ideal para conhecer atrações próximas"
            />

            <hr className="border-gray-100 mx-2" />

            <TransportInfo icon={<BusFront />}
                title={transports[1].type}
                first_info={`Preço médio: ~${texts.real} ${formatCurrent(transports[1].averagePrice)}`}
                second_info="Linha de onibus e transfers disponiveis para passeios"
            />
        </div>
    )
}   