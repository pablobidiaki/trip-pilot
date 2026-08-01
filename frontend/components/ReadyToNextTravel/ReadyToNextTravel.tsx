import WhiteButton from "../Buttons/WhiteButton"

import texts from "@/constants/texts"

import { Toolbox } from "lucide-react"

export default function ReadyToNextTravel(){
    return(
        <div className="rounded-xl
                        bg-linear-to-r
                        from-blue-600
                        to-violet-600
                        mx-4
                        mt-15
                        p-4
                        flex
                        justify-evenly
                        items-center">
            <Toolbox className="text-white" size={80}/>
            <div className="text-white">
                <h1 className="text-5xl">{texts.ready_to_next_travel.title}</h1>
                <p className="text-gray-200">{texts.ready_to_next_travel.text}</p>
            </div>
            <div>
                <WhiteButton text={texts.ready_to_next_travel.button_text}/>
            </div>
        </div>
    )
}