import { BusFront, Gift, Hotel, Map, Plane, Ticket, Utensils } from "lucide-react"
import InfoCard from "../InfoCard/InfoCard"

export default function Include(){
    const includes = [
        {icon: <Plane />, title: "Passagens aéreas", text: "Voos de ida e volta para a Itália, com opções selecionadas para maior conforto e praticidade"},
        {icon: <Hotel />, title: "Hospedagens", text: "Hotéis bem localizados, com conforto e avaliações positivas, para uma estadia tranquila."},
        {icon: <BusFront />, title: "Transporte interno", text: "Deslocamentos entre cidades e atrações, com opções de transporte confiáveis."},
        {icon: <Utensils />, title: "Ingressos e passeios", text: "Entradas para os principais pontos turisticos e passeios selecionados, com total conveniência."},
        {icon: <Ticket />, title: "Refeições", text: "Café da manhã incluso na maioria das hospedagens, além de orientações gastronômicas locais."},
        {icon: <Map />, title: "Roteiro personalizado", text: "Roteiro completo com os principais destinos, atrações, dicas e informações uteis para aproveitar ao maximo sua viagem"},
    ]
    return(
        <div className="max-w-7/12 mx-auto">
            <InfoCard icon={<Gift />} 
                         title={"O que esta incluso"} 
                         text="Confira tudo o que está incluso no seu guia de viagem para a Itália Clássica, para que você aproveite sua experiência com mais tranquilidade e organização."
                         tailwindTags="bg-purple-50"
            />
            <div className="grid grid-cols-2 gap-5 mt-5">
                {includes.map(include => (
                    <InfoCard key={include.title}
                                 icon={include.icon}
                                 title={include.title}
                                 text={include.text}
                                 tailwindTags="bg-white"
                    />
                ))}
            </div>
        </div>
    )
}