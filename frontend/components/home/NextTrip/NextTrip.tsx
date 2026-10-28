"use client"

import { Continents } from "@/constants/enum";
import texts from "@/constants/texts";
import { useRouter } from "next/dist/client/components/navigation";

export default function NextTrip() {
    const router = useRouter()

    const handleButton = (value: string) => {
        localStorage.setItem("continentSelected", value)
        router.push("/destinations")
    }

    return (
        <div className="relative flex  flex-col overflow-hidden mt-15
            xl:h-96
        ">
            <img src="/imgs/nextTrip/background.jpg" className="absolute inset-0 h-full w-full object-cover brightness-20"/>

            <p className="relative z-10 mt-2 text-center text-2xl font-semibold text-white font-serif italic
                xl:text-7xl xl:pt-5
                3xl:mt-15
            "> {texts.home.nextTripTitle}</p>
            <p className="text-xs font-light relative z-10 mt-2 text-center text-gray-300
                lg:text-lg
                xl:mt-4
            ">{texts.home.nextTripSubtitle}</p>

            <div className="relative z-10 flex flex-1 flex-wrap justify-evenly my-5 gap-5
                xl:mt-15
            ">
                {Continents.map((continent, index) => (
                    <button key={index}
                        type="button"
                        className="w-55 cursor-pointer text-sm rounded-lg h-fit bg-background-color p-3 text-black transition-all duration-300 hover:scale-101
                            xl:text-xl
                        "
                        onClick={() => handleButton(continent)}
                    >
                        {continent}
                    </button>
                ))}
            </div>
        </div>
    );
}