"use client"

import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";

export default function Hero() {
    return (
        <div className="relative overflow-hidden pb-5
            xl:h-screen
        ">
            <img src="/imgs/background.png"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"
                alt="Background image"
            />

            <div className="relative z-10 flex flex-col justify-between h-screen">
                <Header />
                <div className="mb-15">
                    <h1 className="text-white text-3xl font-medium max-w-5/6 mt-2 mx-auto text-center font-serif animate-slide-in-left
                        md:text-5xl
                        lg:max-w-4/6 lg:text-7xl
                        2xl:text-8xl 2xl:mt-8 
                    ">
                        {texts.home.title}
                    </h1>

                    <p className="text-gray-300 font-light text-xs max-w-5/6 mt-2 mb-5 animate-slide-in-right text-center mx-auto 
                            md:text-lg  
                            lg:max-w-4/6
                            xl:max-w-2/5 
                            3xl:max-w-2/6 3xl:text-center 3xl:mx-auto 3xl:mb-10 3xl:text-lg 
                        ">
                        {texts.home.mainText}
                    </p>
                    <div className="max-w-5/6 mx-auto mt-5 animate-slide-in-left
                        lg:max-w-4/6
                        xl:mt-5 xl:w-fit
                        2xl:mt-10
                    ">
                        <button onClick={() => document.getElementById("form")?.scrollIntoView({behavior: "smooth", block: "start"})} className="w-full text-primary-color bg-background-color p-2 rounded-lg cursor-pointer
                            md:p-3 md:text-xl
                            lg:p-4 lg:text-2xl
                        ">
                            Planejar minha viagem
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}