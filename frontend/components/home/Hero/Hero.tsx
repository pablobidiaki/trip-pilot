import Header from "@/components/home/Header/Header";
import HeroForm from "@/components/home/Hero/HeroForm";
import HeroFeatures from "@/components/home/Hero/HeroFeatures";

import texts from "@/constants/texts";

export default function Hero(){
    return(
        <div className="relative h-screen overflow-hidden">
            <img
                src="/imgs/background.png"
                className="absolute inset-0 h-full w-full object-cover z-0"
                alt="Background image"
            />

            <div className="relative z-10">
                <Header />
                
                <h1 className="text-primary-color text-8xl font-medium max-w-3/6 mt-8 mx-4">
                    {texts.home.title}
                    <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> {texts.home.ai}</span>
                </h1>
                <p className="text-second-color text-sm max-w-1/5 mx-4 mt-5 mb-5">
                    {texts.home.main_text}
                </p>

                <HeroForm />
                <HeroFeatures />

            </div>
        </div>
    )
}