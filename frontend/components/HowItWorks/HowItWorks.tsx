import texts from "@/constants/texts";
import HowItWorksCardsCointainer from "./HowItWorkCardsCointainer";

export default function HowItWorks(){
    return(
        <div>
            <h1 className="text-primary-color mt-5 text-4xl font-medium text-center">{texts.home.how_works_title}</h1>
            <p className="text-second-color text-center">{texts.home.how_works_text}</p>

            <HowItWorksCardsCointainer />
        </div>
    )
}