import texts from "@/constants/texts"
import ProgressBar from "../ProgressBar/ProgressBar"

interface CostEstimateInfoLineProps{
    title: string
    cost: number
    total: number
}

export default function CostEstimateInfoLine({title, cost, total}: CostEstimateInfoLineProps){
    return(
        <div className="">
            <div className="flex justify-between">
                <h1>{title}</h1>
                <p>{texts.real} {cost.toLocaleString("pt-BR")}</p>
            </div>
            <ProgressBar value={cost} maxValue={total}/>
            <hr className="mt-5 mb-2"/>
        </div>
    )
}