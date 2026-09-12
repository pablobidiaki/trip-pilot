import texts from "@/constants/texts";
import HowItWorksCardsCointainer from "./HowItWorkCardsCointainer";

export default function HowItWorks(){
    return(
        <div>
            <h1 className="text-primary-color mt-5 text-4xl font-medium text-center">{texts.howItWorks.howWorksTitle}</h1>
            <p className="text-second-color text-center">{texts.howItWorks.howWorksText}</p>

            <HowItWorksCardsCointainer />
        </div>
    )
}