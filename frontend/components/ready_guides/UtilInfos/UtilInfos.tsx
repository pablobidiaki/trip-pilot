import { Backpack, BusFront, Info, Landmark, Plane, Plug, Scroll, Shield, Smartphone } from "lucide-react";
import InfoCard from "../InfoCard/InfoCard";
import UtilInfosTitle from "./UtilInfosTitle";
import UtilInfoCard from "./UtilInfoCard";

export default function UtilInfos() {
    const beforeTravelInfos = [
        { icon: <Scroll />, title: "Documentação", text: "Veja os documentos necessários para o seu destino e dicas de visto." },
        { icon: <Shield />, title: "Vacinas e saúde", text: "Informações sobre vacinas recomendadas e cuidados de saúde." },
        { icon: <Backpack />, title: "Bagagem", text: "Dicas do que levar, restrições e itens essenciais." },
        { icon: <Plane />, title: "Moeda e câmbio", text: "Como funciona a moeda local, melhores formas de câmbio e uso de cartão internacional." },
        { icon: <Plug />, title: "Tomadas e voltagem", text: "Informações sobre o padrão de tomadas e voltagem no destino." },
        { icon: <Smartphone />, title: "Internet e chip", text: "Dicas para se manter conectado durante a viagem." }
    ]

    const duringTravelInfos = [
        { icon: <BusFront />, title: "Transporte local", text: "Principais opções de transporte público, apps e dicas de mobilidade." },
        { icon: <Landmark />, title: "Cultura e costumes", text: "Informações sobre tradições, etiquetas e o que conhecer para uma experiência mais rica.." },
        { icon: <Shield />, title: "Segurança", text: "Dicas para se manter seguro(a) durante a viagem, com orientações úteis para o dia a dia." }
    ]
    return (
        <div className="max-w-8/12 mx-auto">
            <InfoCard icon={<Info />}
                title={"Informações úteis"}
                text="Tudo o que você precisa saber para aproveitar sua viagem com mais tranquilidade e segurança."
                tailwindTags="bg-purple-50"
            />
            <UtilInfosTitle icon={<Plane />} title="Antes da viagem" />
            <div className="grid grid-cols-3 gap-5">
                {beforeTravelInfos.map(info => (
                    <UtilInfoCard key={info.title}
                        icon={info.icon}
                        title={info.title}
                        text={info.text}
                    />
                ))}
            </div>
            
            <UtilInfosTitle icon={<Landmark />} title="Durante a viagem" />
            <div className="grid grid-cols-3 gap-5">   
                {duringTravelInfos.map(info => (
                    <UtilInfoCard key={info.title}
                        icon={info.icon}
                        title={info.title}
                        text={info.text}
                    />
                ))}
            </div>
        </div>
    )
}