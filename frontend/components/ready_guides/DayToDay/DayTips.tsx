import texts from "@/constants/texts";
import { CircleCheck, Lightbulb } from "lucide-react";

export default function DayTips() {
    const tips = [
        "Use calcados confortaveis, a cidade tem muitaas ruias de pedra",
        "Compre ingressos da galeria Uffizi com antecedencia para evitar filas",
        "Leve uma garrafa de agua, especialmente nos dias mais quentes",
        "Nao perca o por so sol no piazzalo mechalengelo a vista vale muito a pena"
    ]
    return (
        <div className="bg-purple-100 py-2 px-3 mt-3 rounded-2xl">
            <div className="flex items-center gap-3 font-bold mt-2">
                <Lightbulb className="text-purple-500" />
                <h1>{texts.ready_guides.tips_today}</h1>
            </div>

            {tips.map((tip, index) => (
                <p key={index} className="mt-3 text-sm text-second-color">{index + 1}. {tip}</p>
            ))}
        </div>
    )
}