import { DayToDayInterface } from "@/interfaces/itinerary.interface";
import TimeInfos from "./TimeInfos";
import { Moon, Sun, Sunrise } from "lucide-react";
import texts from "@/constants/texts";
import DayInfos from "@/components/ready_guides/DayToDay/DayInfos";
import Loading from "@/components/loading/Loading/Loading";

interface DayInformationsProps {
    itinerary: DayToDayInterface,
    imageLoading: boolean,
    setImageLoading: () => void
}

export default function DayInformations({ itinerary, imageLoading, setImageLoading }: DayInformationsProps) {
    return (
        <div className="grid grid-cols-1 gap-5 mt-7  
            xl:grid-cols-2 xl:min-h-157.5 xl:max-h-157.5
        ">
            <div className="bg-white relative rounded-2xl
                xl:grid-cols-2 xl:min-h-157.5 xl:max-h-157.5
            ">
                <h1 className="text-center mt-2 font-medium text-lg text-second-color">{itinerary.day}</h1>
                <h2 className="text-center font-medium text-2xl text-primary-color">{itinerary.title}</h2>
                <p className="text-center mb-2 text-second-color font-light">{texts.itinerary.cust}:
                    <span className=" text-green-500"> {texts.real} {itinerary.dayCostEstimate.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    </span>
                </p>
                {imageLoading &&
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white rounded-2xl
                        xl:grid-cols-2 xl:min-h-157.5 xl:max-h-157.5
                    ">
                        <Loading />
                    </div>
                }
                <img src={itinerary.imageURL} className="w-full object-cover rounded-b-2xl
                    xl:grid-cols-2 xl:min-h-127.5 xl:max-h-127.5
                " onLoad={() => setImageLoading()} />
            </div>
            <div className="bg-white rounded-2xl
                xl:grid-cols-2 xl:min-h-152.5 xl:max-h-152.5
            ">
                <h1 className="text-center my-2 font-medium text-2xl text-primary-color">{texts.dayInformations.dayItinerary}</h1>
                <div className="grid grid-cols-1 mt-5
                    md:grid-cols-3
                ">
                    <TimeInfos icon={<Sunrise />} time={texts.itinerary.morning} description={itinerary.morning} />
                    <TimeInfos icon={<Sun />} time={texts.itinerary.afternoon} description={itinerary.afternoon} />
                    <TimeInfos icon={<Moon />} time={texts.itinerary.evening} description={itinerary.night} />
                </div>
                <div className="mx-4 overflow-y-auto scrollbar-hide
                    xl:max-h-90 
                ">
                    {itinerary.hours.map((hour, index) => (
                        <DayInfos key={index} hour={hour.hour} title={hour.title} description={hour.description} tip={hour.tip} />
                    ))}
                </div>
            </div>
        </div>
    )
}