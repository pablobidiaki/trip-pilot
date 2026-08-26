import texts from "@/constants/texts";
import GeneralInfoCard from "./GeneralInfoCard";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface GeneralItineraryInfosProps{
    guide: ReadyGuideInterface[]
}

export default function GeneralItineraryInfos({guide}: GeneralItineraryInfosProps){
    return(
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-200 mx-4">
            <h1 className="text-primary-color font-medium px-2 mt-2 text-3xl">{texts.ready_guides.overview}</h1>
            <p className="px-2 text-second-color text-sm">{guide[0].overviewResume}</p>
            <div className="grid md:grid-cols-3 gap-8 items-center p-2 mt-4">
                {guide[0].overview.map((day, index) => (
                    <GeneralInfoCard key={index} image={day.imageURL} days={day.days} title={day.title} description={day.description}/>
                ))}
            </div>
        </div>
    )
}