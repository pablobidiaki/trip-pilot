import GeneralInfos from "../GeneralInfos/GeneralInfos";
import GuideHero from "../GuideHero/GuideHero";
import GuideTabs from "../GuideTabs/GuideTabs";

export default function ReadyGuide(){
    return(
        <div className="pb-15 bg-background-color">
            <GuideHero />
            <GuideTabs  />
        </div>
    )
}