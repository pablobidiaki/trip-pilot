import GuideHero from "../GuideHero/GuideHero";
import GuideTabs from "../GuideTabs/GuideTabs";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface ReadyGuideProps{
    guide: ReadyGuideInterface[]
}

export default function ReadyGuide({guide}: ReadyGuideProps){
    return(
        <div className="pb-15 bg-background-color">
            <GuideHero guide={guide}/>
            <GuideTabs  guide={guide}/>
        </div>
    )
}