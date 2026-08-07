import texts from "@/constants/texts";
import { StarIcon, MapPin, Package, Bed  } from "lucide-react";
import Image from "next/image";
import InfoRow from "../InfoRow/InfoRow";

export default function Accommodation(){
    return(
        <div className="mx-4 border rounded-2xl border-gray-300 max-w-4/7 mt-8">
            <h1 className="bg-blue-100 rounded-t-2xl py-1 px-2 font-medium text-xl text-primary-color">{texts.itinerary_titles.accommodations}</h1>
            <div className="flex gap-10 p-5">
                <Image src={"/imgs/itinerary/hotel-teste.jpg"} 
                       alt="hotel image" 
                       width={300}
                       height={350}
                       className="w-75 h-75 object-cover rounded-2xl"
                />
                <div className="w-full flex-col justify-between">
                    <h1 className="text-primary-color text-2xl font-medium mb-3">Hotel Serra Azul</h1>
                    {/* TODO: create a component for this */}
                    <div className="flex gap-2 items-center">
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <StarIcon  className="fill-current text-yellow-500" size={20}/>
                        <div className="flex gap-2 ml-2">
                            <p>5,0</p>
                            <p>1.254 avaliações</p>
                        </div>
                    </div>
                    <InfoRow icon={<MapPin />} information={texts.accommodations.address} value={"Centro de gramado"} tailwindTags="mt-5"/>
                    <hr  className="mx-2 text-gray-300 my-3"/>
                    <InfoRow icon={<Package />} information={texts.accommodations.include} value={"Café da manhã, Wi-Fi e estacionamento"}/>
                    <hr  className="mx-2 text-gray-300 my-3"/>
                    <div className="flex gap-2 mt-3">
                        <Bed className="text-blue-600"/>
                        <p>Quato duplo standard</p>
                    </div>

                    <div className="bg-blue-100 p-2 rounded-2xl mt-8">
                        <p className="font-medium text-blue-900">{texts.accommodations.cost_estimate} <span className="text-primary-color font-medium"> R$ 1.920,00</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}