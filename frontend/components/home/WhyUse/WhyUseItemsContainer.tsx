import { BrainCircuit, Clock, BadgePercent, LandPlot, Download } from "lucide-react"
import WhyUseItem from "./WhyUseItem"
import texts from "@/constants/texts"

export default function WhyUseItemsContainer(){
    return(
        <div className="flex justify-between gap-4">
            <WhyUseItem icon={<BrainCircuit />} title={texts.whyUse.aiTitle} text={texts.whyUse.aiText}/>
            <WhyUseItem icon={<BadgePercent />} title={texts.whyUse.bestPricesTitle} text={texts.whyUse.bestPricesText}/>
            <WhyUseItem icon={<Clock />} title={texts.whyUse.timeEconomyTitle} text={texts.whyUse.timeEconomyText}/>
            <WhyUseItem icon={<LandPlot />} title={texts.whyUse.everythingInOnePlaceTitle} text={texts.whyUse.pdfGenerationText}/>
            <WhyUseItem icon={<Download />} title={texts.whyUse.pdfGenerationTitle} text={texts.whyUse.timeEconomyText}/>
        </div>
    )
}