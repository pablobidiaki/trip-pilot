import texts from "@/constants/texts";

import { Send } from "lucide-react";

export default function News(){
    return( 
        <div className="lg:w-[24%]">
            <h1 className="text-primary-color text-xl font-medium text-center">{texts.footer.newsTitle}</h1>
            <p className="text-second-color text-sm mt-2 text-center">{texts.footer.newsText}</p>

            <div className="flex justify-between border-2 rounded-2xl border-gray-100 p-2 mt-2">
                <input placeholder={texts.footer.yourEmail} className="w-full outline-none"/>
                <div className="p-2 bg-gray-300 rounded-2xl">
                    <Send className="text-blue-600"/>
                </div>
            </div>
        </div>
    )
}