import texts from "@/constants/texts";
import GeneralInfoCard from "./GeneralInfoCard";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface GeneralItineraryInfosProps{
    guide: ReadyGuideInterface[]
}

export default function GeneralItineraryInfos({guide}: GeneralItineraryInfosProps){
    return(
        <div className="bg-white rounded-2xl border border-gray-100 mx-2
            lg:col-span-8
            2xl:col-span-9
        ">
            <h1 className="text-primary-color font-medium px-2 mt-2 text-2xl
                lg:text-3xl
            ">{texts.readyGuides.overview}</h1>
            <p className="px-2 text-second-color text-xs
                lg:text-sm
            ">{guide[0].overviewResume}</p>
            <div className="items-center p-2 mt-4
                lg:grid lg:grid-cols-2 lg:p-0
                2xl:grid-cols-3
            ">
                {guide[0].overview.map((day, index) => (
                    <GeneralInfoCard key={index} image={day.imageURL} days={day.days} title={day.title} description={day.description}/>
                ))}
            </div>
        </div>
    )
}