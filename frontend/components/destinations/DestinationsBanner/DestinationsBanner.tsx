import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";

export default function DestinationsBanner(){
    return (
        <div className="relative overflow-hidden pb-15">
            <img src={"/imgs/destinations/background.jpg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"
            />
            <div className="relative z-50 bg-white/20">
                <Header />
            </div>
            <div className="relative z-10 mt-5 mx-4 text-white">
                <h1 className="text-3xl max-w-4/5 font-medium
                    md:max-w-3/5
                    lg:max-w-2/5
                    xl:text-6xl xl:max-w-2/5
                ">{texts.destinations.title}</h1>
                <h2 className="mt-1 text-xs font-light text-gray-300 max-w-4/5
                    md:max-w-3/5
                    lg:max-w-2/5
                    xl:text-xl xl:max-w-2/5
                ">{texts.destinations.subtitle}</h2>
            </div>
        </div>
    )
}