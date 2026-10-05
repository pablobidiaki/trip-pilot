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
        <div className="relative my-5 animate-[optionSelector_300ms_ease-out]
            lg:mt-0
        ">
            <div className="bg-white  mx-auto py-2 px-5 rounded-2xl shadow-2xl shadow-gray-300
                xl:w-[80%]
                2xl:w-[60%]
            ">
                <h1 className="text-2xl text-center text-primary-color font-medium">{texts.transportation.tabTitle}</h1>
                <h2 className="text-sm text-center text-second-color font-medium">{texts.transportation.tabSubtitle}</h2>
                <div className="flex flex-col gap-6 justify-center
                    lg:flex-row
                ">
                    <TransportationCard icon={<CarFront size={40}/>} type={transports[0].type} averagePrice={transports[0].averagePrice} advantages={carAdvantages} typePayment={texts.transportation.diary}/>
                    <TransportationCard icon={<BusFront size={40}/>} type={transports[1].type} averagePrice={transports[1].averagePrice} advantages={publicTransportAdvantages} typePayment={texts.transportation.price}/>
                </div>
                <p className="mt-10 text-center text-second-color 
                    lg:max-w-[68%] lg:mx-auto
                "><span className="text-purple-color">{texts.tip}: </span>{texts.transportation.tabText}</p>
            </div>
        </div>
    )
}