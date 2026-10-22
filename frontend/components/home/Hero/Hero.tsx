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
                    <h1 className="text-white text-3xl font-medium max-w-4/6 mt-2 mx-2 font-serif animate-slide-in-left
                        md:text-5xl md:max-w-3/6
                        lg:text-7xl
                        2xl:text-8xl 2xl:mx-2 2xl:mt-8
                        3xl:max-w-4/6 3xl:mt-2 3xl:mx-auto 3xl:text-center 3xl:text-[110px]
                    ">
                        {texts.home.title} {texts.home.ai}

                    </h1>
                    <p className="text-gray-300 font-light text-xs max-w-4/6 mx-2 mt-2 mb-5 animate-slide-in-right
                            md:max-w-3/6 md:text-sm
                            xl:max-w-1/5
                            3xl:max-w-2/6 3xl:text-center 3xl:mx-auto 3xl:mb-10 3xl:text-lg 
                        ">
                        {texts.home.mainText}
                    </p>
                    <div className="w-fit mx-auto mt-15 animate-slide-in-left">
                        <button className="text-primary-color bg-background-color px-4 py-4 rounded-lg text-2xl cursor-pointer">
                            Planejar minha viagem
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}