import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";

export default function ReadyGuidesBanner() {
    return (
        <div className="relative overflow-hidden pb-50">
            <img src={"/imgs/readyGuides/background.jpg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-30"
            />
            <div className="relative z-50">
                <Header />
            </div>
            <div className="relative z-10 mt-25 text-white">
                <h1 className="mx-auto text-center text-3xl 
                    lg:text-6xl lg:max-w-3xl
                ">{texts.readyGuides.title}</h1>
                <h2 className="mx-auto text-center mt-1 font-light text-xs max-w-55 text-gray-300
                    md:text-lg md:max-w-120
                    lg:max-w-150
                    2xl:max-w-100
                ">{texts.readyGuides.subtitle}</h2>
            </div>
        </div>
    )
}