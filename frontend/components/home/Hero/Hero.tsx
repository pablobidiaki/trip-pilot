import Header from "@/components/ui/Header/Header";
import HeroForm from "@/components/home/Hero/HeroForm";
import HeroFeatures from "@/components/home/Hero/HeroFeatures";

import texts from "@/constants/texts";

export default function Hero() {
    return (
        <div className="relative overflow-hidden pb-5
        xl:h-screen
        ">
            <img
                src="/imgs/background.png"
                className="absolute inset-0 h-full w-full object-cover z-0"
                alt="Background image"
            />

            <div className="relative z-10">
                <Header />

                <h1 className="text-primary-color text-3xl font-medium max-w-4/6 mt-2 mx-2
                    md:text-5xl md:max-w-3/6
                    lg:text-7xl
                    2xl:text-8xl 2xl:mx-2 2xl:mt-8
                    3xl:max-w-2/5 3xl:mt-10
                ">
                    {texts.home.title}
                    <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> {texts.home.ai}</span>
                </h1>
                <p className="text-second-color text-xs max-w-4/6 mx-2 mt-2 mb-5
                    md:max-w-3/6 md:text-sm
                    xl:max-w-1/5
                    3xl:max-w-1/6 3xl:mb-10
                ">
                    {texts.home.mainText}
                </p>

                <HeroForm />
                <HeroFeatures />
            </div>
        </div>
    )
}