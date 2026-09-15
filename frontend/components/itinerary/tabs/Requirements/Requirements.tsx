import { RequirementsInterface } from "@/interfaces/itinerary.interface";
import RequirementsInfo from "../../grid/Requirements/RequirementsInfo";
import { CircleCheck, CircleX, CreditCard, File, Network, WifiHigh } from "lucide-react";
import texts from "@/constants/texts";
import RequirementsBeforeCard from "./RequirementsBeforeCard";

interface RequirementsProps {
    requirements: RequirementsInterface
}

export default function Requirements({ requirements }: RequirementsProps) {
    return (
        <div className="relative animate-[optionSelector_300ms_ease-out]">
            <div className="bg-white max-w-[80%] mx-auto pt-2 pb-5 rounded-2xl shadow-2xl shadow-gray-300">
                <h1 className="text-primary-color text-3xl text-center mb-8">O que você precisa para entrar ?</h1>
                <div className="flex justify-center gap-5 mb-2">
                    <RequirementsInfo icon={requirements.visa ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 " />}
                        text={requirements.visa ? texts.requirements.visaTrue : texts.requirements.visaFalse}
                    />
                    <RequirementsInfo icon={requirements.passport ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 " />}
                        text={requirements.passport ? texts.requirements.passportTrue : texts.requirements.passportFalse}
                    />
                </div>
                <div className="flex justify-center gap-2 mb-8">
                    <div className="border-gray-400 border w-full rounded-2xl mx-5 bg-gray-50">
                        <h1 className="text-primary-color text-2xl text-center p-1 border-b-gray-400 border-b mb-2 rounded-t-2xl bg-white">{texts.requirements.documents}</h1>
                        {requirements.documents.map((document, index) => (
                            <p key={index} className="text-primary-color mx-1 p-0.5 mb-5">- {document}</p>
                        ))}
                    </div>
                    <div className="border-gray-400 border w-full rounded-2xl mx-5 bg-gray-50">
                        <h1 className="text-primary-color text-2xl text-center p-1 border-b-gray-400 border-b mb-2 rounded-t-2xl bg-white">{texts.requirements.vaccinesAndHealth}</h1>
                        {requirements.vaccines.map((vaccine, index) => (
                            <p key={index} className="text-primary-color mx-1 p-0.5 mb-5">- {vaccine}</p>
                        ))}
                    </div>
                </div>
                <h1 className="text-primary-color text-3xl text-center mb-5">{texts.requirements.beforeEnter}</h1>
                <div className="flex justify-evenly mb-5">
                    <RequirementsBeforeCard icon={<File />} title={texts.requirements.documents} text={texts.requirements.documentText}/>
                    <RequirementsBeforeCard icon={<CreditCard />} title={texts.requirements.payment} text={texts.requirements.paymentText}/>
                    <RequirementsBeforeCard icon={<WifiHigh />} title={texts.requirements.connection} text={texts.requirements.connectionText}/>                    
                </div>
                <p className="bg-blue-100 p-2 mt-8 rounded-2xl text-second-color text-sm font-medium w-fit mx-auto"><span className="text-blue-700 font-medium">Obs.: </span>{texts.requirements.observation}</p>
            </div>
        </div>
    )
}