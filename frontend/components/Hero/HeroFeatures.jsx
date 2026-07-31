import Feature from "../Feature/Feature";

import texts from "@/constants/texts";

import { FileUser, Clock, ScrollText } from "lucide-react";

export default function HeroFeatures(){
    return(
        <div className="flex gap-15 mx-4 mt-3">
            <Feature icon={<FileUser size={20}/>} text={texts.home.customized}/>
            <Feature icon={<Clock size={20}/>} text={texts.home.save_time_and_money}/>
            <Feature icon={<ScrollText size={20}/>} text={texts.home.script_for_ia}/>
        </div>
    )
}