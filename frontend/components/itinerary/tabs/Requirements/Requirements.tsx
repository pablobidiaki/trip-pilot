import { RequirementsInterface } from "@/interfaces/itinerary.interface";
import RequirementsInfo from "../../grid/Requirements/RequirementsInfo";
import { CircleCheck, CircleX, CreditCard, File, Network, WifiHigh } from "lucide-react";
import texts from "@/constants/texts";

interface RequirementsProps {
    requirements: RequirementsInterface
}

export default function Requirements({ requirements }: RequirementsProps) {
    return (
        <div className="relative">
            <div className="bg-white max-w-[80%] mx-auto pt-2 pb-5 rounded-2xl shadow-2xl shadow-gray-300">
                <h1 className="text-primary-color text-3xl text-center mb-8">O que você precisa para entrar ?</h1>
                <div className="flex justify-center gap-5 mb-2">
                    <RequirementsInfo icon={requirements.visa ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 " />}
                        text={requirements.visa ? texts.requirements.visa_true : texts.requirements.visa_false}
                    />
                    <RequirementsInfo icon={requirements.passport ? <CircleCheck className="text-green-500" /> : <CircleX className="text-red-500 " />}
                        text={requirements.passport ? texts.requirements.passport_true : texts.requirements.passport_false}
                    />
                </div>
                <div className="flex justify-center gap-2 mb-8">
                    <div className="border-gray-400 border w-full rounded-2xl mx-5 bg-gray-50">
                        <h1 className="text-primary-color text-2xl text-center p-1 border-b-gray-400 border-b mb-2 rounded-t-2xl bg-white">{texts.requirements.documents}</h1>
                        {requirements.documents.map((document, index) => (
                            <p key={index} className="text-primary-color text-xl mx-1 p-0.5 mb-5">- {document}</p>
                        ))}
                    </div>
                    <div className="border-gray-400 border w-full rounded-2xl mx-5 bg-gray-50">
                        <h1 className="text-primary-color text-2xl text-center p-1 border-b-gray-400 border-b mb-2 rounded-t-2xl bg-white">{texts.requirements.vaccines_and_health}</h1>
                        {requirements.vaccines.map((vaccine, index) => (
                            <p key={index} className="text-primary-color text-xl mx-1 p-0.5 mb-5">- {vaccine}</p>
                        ))}
                    </div>
                </div>
                <h1 className="text-primary-color text-3xl text-center mb-5">{texts.requirements.beforeEnter}</h1>
                <div className="flex justify-evenly mb-5">
                    <div className="text-sm">
                        <p className="flex items-center w-fit mx-auto text-primary-color font-medium text-lg gap-2"><File /> Documentos</p>
                        <p className="text-second-color font-medium max-w-70 text-center">Mantenha cópias digitais do passaporte e reservas.</p>
                    </div>
                    <div className="text-sm">
                        <p className="flex items-center w-fit mx-auto text-primary-color font-medium text-lg gap-2"><CreditCard /> Pagamentos</p>
                        <p className="text-second-color font-medium max-w-70 text-center">Tenha uma opção de pagamento internacional disponível.</p>
                    </div>
                    <div className="text-sm">
                        <p className="flex items-center w-fit mx-auto text-primary-color font-medium text-lg gap-2"><WifiHigh /> Conectividade</p>
                        <p className="text-second-color font-medium max-w-70 text-center">Considere um eSIM ou plano internacional para acessar mapas e tradutor.</p>
                    </div>
                </div>
                <p className="bg-blue-100 p-2 mt-8 rounded-2xl text-second-color text-sm font-medium w-fit mx-auto"><span className="text-blue-700 font-medium">Obs.: </span>{texts.requirements.observation}</p>
            </div>
        </div>
    )
}