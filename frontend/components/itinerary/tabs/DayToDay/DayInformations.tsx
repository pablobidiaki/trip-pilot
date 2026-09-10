import { DayToDayInterface } from "@/interfaces/itinerary.interface";
import TimeInfos from "./TimeInfos";
import { Moon, Sun, Sunrise } from "lucide-react";
import texts from "@/constants/texts";
import DayInfos from "@/components/ready_guides/DayToDay/DayInfos";

interface DayInformationsProps {
    itinerary: DayToDayInterface
}

export default function DayInformations({ itinerary }: DayInformationsProps) {
    return (
        <div className="grid grid-cols-2 gap-5 mt-7">
            <div className="bg-white h-fit rounded-2xl shadow-2xl shadow-gray-300">
                <h1 className="text-center mt-2 font-medium text-lg text-second-color">{itinerary.day}</h1>
                <h2 className="text-center font-medium text-2xl text-primary-color">{itinerary.title}</h2>
                <p className="text-center mb-2 text-second-color font-light">{texts.itinerary.cust}:
                    <span className=" text-green-500"> {texts.real} {itinerary.dayCostEstimate.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                    </span>
                </p>
                <img src={itinerary.imageURL} className="w-full object-cover rounded-b-2xl" />
            </div>
            <div className="bg-white shadow-2xl rounded-2xl shadow-gray-300">
                <h1 className="text-center my-2 font-medium text-2xl text-primary-color">{texts.dayInformations.dayItinerary}</h1>
                <div className="grid grid-cols-3 mt-5">
                    <TimeInfos icon={<Sunrise />} time={texts.itinerary.morning} description={itinerary.morning} />
                    <TimeInfos icon={<Sun />} time={texts.itinerary.afternoon} description={itinerary.afternoon} />
                    <TimeInfos icon={<Moon />} time={texts.itinerary.evening} description={itinerary.night} />
                </div>
                <div className="mx-4">
                    {itinerary.hours.map((hour, index) => (
                        <DayInfos key={index} hour={hour.hour} title={hour.title} description={hour.description} tip={hour.tip} />
                    ))}
                </div>
            </div>
        </div>
    )
}