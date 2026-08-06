import texts from "@/constants/texts";
import WhyUseItemsContainer from "./WhyUseItemsContainer";

export default function WhyUse(){
    return(
        <div className="mx-4 mt-15 bg-gray-200 rounded-2xl p-4">
            <h1 className="text-center text-3xl font-medium ">{texts.why_use.title}</h1>
            <WhyUseItemsContainer />
        </div>
    )
}