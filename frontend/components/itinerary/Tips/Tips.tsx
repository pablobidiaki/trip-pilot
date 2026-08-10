import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { Lightbulb } from "lucide-react";

export default function Tips(){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 min-w-2/5 mt-8">
            <CardTitle icon={<Lightbulb />} title={texts.itinerary_titles.tips} />
            <ul className="list-disc marker:text-primary-color py-2 pl-8 max-w-[95%] text-second-color">
                <li>Leve roupas de frio, mesmo no inverno mais leve, as noites sao geladas</li>
                <li>Compre ingressos de passeios com antecedencia para evitar filas</li>
                <li>Aproveite a gastronomia local: chocolates artesanais, foundues e cafe coloniais</li>
                <li>Seguro de viagem não é obrigatorio para viagens nacionais, mas é sempre recomendado</li>
                <li>Moeda: Real(R$)</li>
            </ul>
        </div>
    )
}