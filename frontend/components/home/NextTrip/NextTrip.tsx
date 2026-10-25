"use client"

import { Continents } from "@/constants/enum";
import { useRouter } from "next/dist/client/components/navigation";

export default function NextTrip() {
    const router = useRouter()

    const handleButton = (value: string) => {
        localStorage.setItem("continentSelected", value)
        router.push("/destinations")
    }

    return (
        <div className="relative flex h-96 flex-col overflow-hidden mt-15">
            <img src="/imgs/nextTrip/background.jpg" className="absolute inset-0 h-full w-full object-cover brightness-20"/>

            <p className="relative z-10 pt-15 text-center text-7xl font-semibold text-white font-serif italic"> Qual seu próximo destino?</p>
            <p className="text-lg font-light relative z-10 mt-4 text-center text-gray-300">Escolha um continente para visualizar nossos roteiros prontos!</p>

            <div className="relative z-10 flex flex-1 flex-wrap justify-evenly mt-15">
                {Continents.map((continent, index) => (
                    <button key={index}
                        type="button"
                        className="w-55 text-xl cursor-pointer rounded-lg h-fit bg-background-color p-3 text-black transition-all duration-300 hover:scale-101"
                        onClick={() => handleButton(continent)}
                    >
                        {continent}
                    </button>
                ))}
            </div>
        </div>
    );
}