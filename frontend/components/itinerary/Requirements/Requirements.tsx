import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";

import { FileText, CircleCheck, CircleX } from "lucide-react"
import RequirementsInfo from "./RequirementsInfo";
import { RequirementsInterface } from "@/interfaces/itinerary.interface";

interface RequirementsProps{
    requirements: RequirementsInterface
}

export default function Requirements({requirements}: RequirementsProps){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 max-w-2/5 mt-8">
            <CardTitle icon={<FileText />} title={texts.itinerary_titles.requirements}/>
            <div className="flex gap-4 p-4">
                <div>
                    <div className="flex justify-center gap-5">
                        <RequirementsInfo icon={requirements.visa ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 "/>} 
                                        text={requirements.visa ? texts.requirements.visa_true : texts.requirements.visa_false}
                        />
                        <RequirementsInfo icon={requirements.passport ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 "/>} 
                                        text={requirements.passport ? texts.requirements.passport_true : texts.requirements.passport_false}
                        />
                    </div>
                    <div className="flex justify-center gap-2">
                        <div className="border min-w-1/2 rounded-2xl">
                            <h1 className="text-primary-color text-xl text-center p-1">{texts.requirements.documents}</h1>
                            <hr className="mb-2"/>
                            {requirements.documents.map((document,index) => (
                                <p key={index} className="text-second-color text-sm mx-1 p-0.5">- {document}</p>
                            ))}
                        </div>
                        <div className="border min-w-1/2 rounded-2xl">
                            <h1 className="text-primary-color text-xl text-center p-1">{texts.requirements.vaccines_and_health}</h1>
                            <hr className="mb-2"/>
                            {requirements.vaccines.map((vaccine, index) => (
                                <p key={index} className="text-second-color text-sm mx-1 p-0.5">- {vaccine}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-100 p-2 mt-4 rounded-2xl">
                        <p className="text-second-color text-sm font-medium"><span className="text-blue-700 font-medium">Obs.: </span>{texts.requirements.observation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}