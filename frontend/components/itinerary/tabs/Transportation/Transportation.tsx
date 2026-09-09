import texts from "@/constants/texts";
import { TransportationInterface } from "@/interfaces/itinerary.interface";
import TransportationCard from "./TransportationCard";
import { BusFront, CarFront } from "lucide-react";

interface TransportationProps{
    transports: TransportationInterface[]
}

const carAdvantages =["Mais liberdade", "Atrações afastadas", "Viagens em grupo"]
const publicTransportAdvantages=["Mais econômico", "Ideal para regiões centrais"]

export default function Transportation({transports}: TransportationProps){
    return(
        <div className="relative">
            <div className="bg-white w-[60%] mx-auto py-2 px-5 rounded-2xl shadow-2xl shadow-gray-300">
                <h1 className="text-2xl text-center text-primary-color font-medium">{texts.transportation.tab_title}</h1>
                <h2 className="text-sm text-center text-second-color font-medium">{texts.transportation.tab_subtitle}</h2>
                <div className="flex gap-75 justify-center">
                    <TransportationCard icon={<CarFront size={40}/>} type={transports[0].type} averagePrice={transports[0].averagePrice} advantages={carAdvantages} typePayment={texts.transportation.diary}/>
                    <TransportationCard icon={<BusFront size={40}/>} type={transports[1].type} averagePrice={transports[1].averagePrice} advantages={publicTransportAdvantages} typePayment={texts.transportation.price}/>
                </div>
                <p className="mt-10 text-center max-w-[68%] mx-auto text-second-color "><span className="text-purple-color">{texts.tip}: </span>{texts.transportation.tab_text}</p>
            </div>
        </div>
    )
}