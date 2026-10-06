import { Sun, SunSnow } from "lucide-react";
import CardTitle from "../CardTitle/CardTitle";
import texts from "@/constants/texts";
import { WeatherInterface } from "@/interfaces/itinerary.interface";

interface WeatherProps {
    weather: WeatherInterface
}

export default function Weather({ weather }: WeatherProps) {
    return (
        <div className="bg-white border rounded-2xl border-gray-100
            xl:mt-5
        ">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">8</span> {texts.itineraryTitles.weather}</h1>

            <div className="mx-4 text-primary-color">
                <p className="my-2">{texts.weather.seasonText} <span className="text-second-color">{weather.season}</span></p>
                <p className="my-2 ">{texts.weather.temperatureText} <span className="text-second-color">{weather.averageTemperature}{texts.weather.graus}</span></p>
                <p className="mb-2"><span className="text-purple-400">{texts.tip}:</span> {weather.recommendation}</p>
            </div>
        </div>
    )
}