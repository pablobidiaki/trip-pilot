import { CostEstimateInterface } from "@/interfaces/itinerary.interface"
import CostEstimateInfoLine from "./CostEstimateInfoLine"
import texts from "@/constants/texts"

interface CostEstimateProps {
    costs: CostEstimateInterface
    budgetTotal: number
}

export default function CostEstimate({ costs, budgetTotal }: CostEstimateProps) {
    return (
        <div className="relative w-full my-5 animate-[optionSelector_300ms_ease-out]
            md:mt-0
        ">
            <div className="bg-white shadow-2xl shadow-gray-300 px-5 py-2 rounded-2xl
                xl:max-w-[70%] xl:mx-auto
                2xl:max-w-[60%]
            ">
                <h1 className="text-center text-xl text-primary-color font-medium mb-2
                    lg:text-2xl lg:mb-0
                ">{texts.costEstimate.youInformed}
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
                <p className="text-center text-sm"><span className="text-purple-400">{texts.tip}: </span>{texts.costEstimate.itsPossibleAdjustTab}</p>
            </div>
        </div>
    )
}