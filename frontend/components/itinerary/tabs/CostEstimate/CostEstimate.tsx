import { CostEstimateInterface } from "@/interfaces/itinerary.interface"
import CostEstimateInfoLine from "./CostEstimateInfoLine"
import texts from "@/constants/texts"

interface CostEstimateProps {
    costs: CostEstimateInterface
    budgetTotal: number
}

export default function CostEstimate({ costs, budgetTotal }: CostEstimateProps) {
    return (
        <div className="relative w-full animate-[optionSelector_300ms_ease-out]">
            <div className="max-w-[60%] mx-auto bg-white shadow-2xl shadow-gray-300 px-5 py-2 rounded-2xl">
                <h1 className="text-center text-2xl text-primary-color font-medium">{texts.costEstimate.youInformed}
                    <span className="text-green-500">{texts.real} {budgetTotal.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    </span>
                </h1>
                <CostEstimateInfoLine title={texts.costEstimate.accommodation} cost={costs.accommodations} total={costs.total} />
                <CostEstimateInfoLine title={texts.costEstimate.food} cost={costs.food} total={costs.total} />
                <CostEstimateInfoLine title={texts.costEstimate.tours} cost={costs.activities} total={costs.total} />
                <CostEstimateInfoLine title={texts.costEstimate.transport} cost={costs.transport} total={costs.total} />
                <CostEstimateInfoLine title={texts.costEstimate.ticket} cost={costs.ticket} total={costs.total} />
                <CostEstimateInfoLine title={texts.costEstimate.shopAndExtras} cost={costs.extra} total={costs.total} />
                <p className="text-center"><span className="text-purple-400">{texts.tip}: </span>{texts.costEstimate.itsPossibleAdjustTab}</p>
            </div>
        </div>
    )
}