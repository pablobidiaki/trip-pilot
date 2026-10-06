import texts from "@/constants/texts";

import { CircleCheck, CircleX } from "lucide-react"
import RequirementsInfo from "./RequirementsInfo";
import { RequirementsInterface } from "@/interfaces/itinerary.interface";

interface RequirementsProps{
    requirements: RequirementsInterface
}

export default function Requirements({requirements}: RequirementsProps){
    return(
        <div className="bg-white border rounded-2xl border-gray-100 mt-5
            xl:max-w-1/2 xl:min-w-1/2
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">5</span> {texts.itineraryTitles.requirements}</h1>
            <div className="flex justify-center gap-4 p-4">
                <div>
                    <div className="flex justify-center gap-5">
                        <RequirementsInfo icon={requirements.visa ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 "/>} 
                                        text={requirements.visa ? texts.requirements.visaTrue : texts.requirements.visaFalse}
                        />
                        <RequirementsInfo icon={requirements.passport ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 "/>} 
                                        text={requirements.passport ? texts.requirements.passportTrue : texts.requirements.passportFalse}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-2
                        xl:flex-row
                    ">
                        <div className="border min-w-1/2 rounded-2xl">
                            <h1 className="text-primary-color text-xl text-center p-1">{texts.requirements.documents}</h1>
                            <hr className="mb-2"/>
                            {requirements.documents.length > 0 ? requirements.documents.map((document,index) => (
                                <p key={index} className="text-second-color text-sm mx-1 p-0.5">- {document}</p>
                            )) : <p className="p-2 text-second-color text-sm">- {texts.requirements.noneDocument}</p>}
                        </div>
                        <div className="border min-w-1/2 rounded-2xl">
                            <h1 className="text-primary-color text-xl text-center p-1">{texts.requirements.vaccinesAndHealth}</h1>
                            <hr className="mb-2"/>
                            {requirements.vaccines.length > 0 ? requirements.vaccines.map((vaccine, index) => (
                                <p key={index} className="text-second-color text-sm mx-1 p-0.5">- {vaccine}</p>
                            )) : <p className="p-2 text-second-color text-sm">- {texts.requirements.noneVaccine}</p>}
                        </div>
                    </div>

                    <p className="bg-orange-100 p-2 mt-4 rounded-2xl text-second-color text-sm font-medium w-fit mx-auto"><span className="text-orange-500 font-medium">Obs.: </span>{texts.requirements.observation}</p>
                </div>
            </div>
        </div>
    )
}