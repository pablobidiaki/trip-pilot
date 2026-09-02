import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";

export default function DestinationsBanner(){
    return (
        <div className="relative overflow-hidden pb-15">
            <img src={"/imgs/destinations/background.jpg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"
            />
            <div className="relative z-10 bg-white/20">
                <Header />
            </div>
            <div className="relative z-10 mt-5 mx-4 text-white">
                <h1 className="text-6xl max-w-2/5 font-medium">{texts.destinations.title}</h1>
                <h2 className="mt-1 text-2xl font-thin max-w-xl">{texts.destinations.subtitle}</h2>
            </div>
        </div>
    )
}