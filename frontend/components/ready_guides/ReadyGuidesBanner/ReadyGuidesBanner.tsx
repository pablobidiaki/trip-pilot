import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";

export default function ReadyGuidesBanner() {
    return (
        <div className="relative overflow-hidden pb-15">
            <img src={"/imgs/ready_guides/background.jpg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"
            />
            <div className="relative z-50 bg-white/20">
                <Header />
            </div>
            <div className="relative z-10 mt-5 text-white">
                <h1 className="mx-auto text-center text-3xl 
                    lg:text-7xl lg:max-w-3xl lg:medium
                ">{texts.readyGuides.title}</h1>
                <h2 className="mx-auto text-center mt-1 font-thin text-xs max-w-55 text-gray-300
                    md:text-lg md:max-w-120
                    lg:text-2xl lg:max-w-150
                ">{texts.readyGuides.subtitle}</h2>
            </div>
        </div>
    )
}