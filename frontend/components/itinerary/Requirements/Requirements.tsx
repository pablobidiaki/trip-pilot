import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { FileText, MoveDown, CircleCheck } from "lucide-react"
import Image from "next/image";
import RequirementsInfo from "./RequirementsInfo";
import TripRoute from "./TripRoute";

export default function Requirements(){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 max-w-2/5 mt-8">
            <CardTitle icon={<FileText />} title={texts.itinerary_titles.requirements}/>
            <div className="flex gap-4 p-4">
                <TripRoute country_origin_flag="/imgs/itinerary/brasil.jpg" country_origin_name="Brasil (São Paulo)" country_destination_flag="/imgs/itinerary/bolivia.jpg" country_destination_name="Bolivia"/>

                <div>
                    <RequirementsInfo icon={<CircleCheck className="text-green-500" />} text="Não é necessario passaporte ou visto."/>
                    <RequirementsInfo icon={<CircleCheck className="text-green-500" />} text="Basta apresentar documento oficial com foto (RG ou CNH)."/>
                    <RequirementsInfo icon={<CircleCheck className="text-green-500" />} text="Necessario vacina de febre amarela."/>

                    <div className="bg-blue-100 p-2 mt-4 rounded-2xl">
                        <p className="text-second-color text-sm font-medium"><span className="text-blue-700 font-medium">Obs.: </span>{texts.requirements.observation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}