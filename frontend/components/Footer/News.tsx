import texts from "@/constants/texts";

import { Send } from "lucide-react";

export default function News(){
    return( 
        <div>
            <h1 className="text-primary-color text-xl font-medium">{texts.footer.news_title}</h1>
            <p className="text-second-color text-sm w-3/5 mt-2">{texts.footer.news_text}</p>

            <div className="flex justify-between border-2 rounded-2xl border-gray-300 p-2 mt-2">
                <input placeholder={texts.footer.your_email} className="w-full outline-none"/>
                <div className="p-2 bg-gray-300 rounded-2xl">
                    <Send className="text-blue-600"/>
                </div>
            </div>
        </div>
    )
}