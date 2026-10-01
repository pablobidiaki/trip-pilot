import Feature from "../Feature/Feature";

import texts from "@/constants/texts";

import { FileUser, Clock, ScrollText } from "lucide-react";

export default function HeroFeatures(){
    return(
        <div className="hidden
        md:flex md:justify-between mx-2 mt-3
        lg:justify-normal lg:gap-5
        ">
            <Feature icon={<FileUser size={20}/>} text={texts.home.customized}/>
            <Feature icon={<Clock size={20}/>} text={texts.home.saveTimeAndMoney}/>
            <Feature icon={<ScrollText size={20}/>} text={texts.home.scriptForIa}/>
        </div>
    )
}