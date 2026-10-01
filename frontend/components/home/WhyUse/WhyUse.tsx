import texts from "@/constants/texts";
import WhyUseItemsContainer from "./WhyUseItemsContainer";

export default function WhyUse(){
    return(
        <div className="mx-2 mt-15 bg-gray-200 rounded-2xl p-4 
            md:w-4/6 md:mx-auto
            lg:w-[98%]
            2xl:w-[99%]
        ">
            <h1 className="text-center text-3xl font-medium ">{texts.whyUse.title}</h1>
            <WhyUseItemsContainer />
        </div>
    )
}