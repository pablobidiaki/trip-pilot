import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";

export default function DestinationsBanner(){
    return (
        <div className="relative overflow-hidden pb-50">
            <img src={"/imgs/destinations/background.jpg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-30"
            />
            <div className="relative z-50">
                <Header />
            </div>
            <div className="relative z-10 mt-25 mx-auto text-white">
                <h1 className="text-3xl max-w-4/5 mx-auto font-medium text-center
                    md:max-w-3/5
                    lg:max-w-2/5
                    xl:text-6xl xl:mx-auto
                ">{texts.destinations.title}</h1>
                <h2 className="mt-1 text-xs mx-auto font-light text-gray-300 max-w-4/5 text-center
                    md:max-w-3/5
                    lg:max-w-2/5
                    xl:text-lg xl:mx-auto
                ">{texts.destinations.subtitle}</h2>
            </div>
        </div>
    )
}