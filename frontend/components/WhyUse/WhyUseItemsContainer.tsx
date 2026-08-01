import { BrainCircuit, Clock, BadgePercent, LandPlot, Download } from "lucide-react"
import WhyUseItem from "./WhyUseItem"
import texts from "@/constants/texts"

export default function WhyUseItemsContainer(){
    return(
        <div className="flex justify-between gap-4">
            <WhyUseItem icon={<BrainCircuit />} title={texts.why_use.ai_title} text={texts.why_use.ai_text}/>
            <WhyUseItem icon={<BadgePercent />} title={texts.why_use.best_prices_title} text={texts.why_use.best_prices_text}/>
            <WhyUseItem icon={<Clock />} title={texts.why_use.time_economy_title} text={texts.why_use.time_economy_text}/>
            <WhyUseItem icon={<LandPlot />} title={texts.why_use.everything_in_one_place_title} text={texts.why_use.pdf_generation_text}/>
            <WhyUseItem icon={<Download />} title={texts.why_use.pdf_generation_title} text={texts.why_use.time_economy_text}/>
        </div>
    )
}