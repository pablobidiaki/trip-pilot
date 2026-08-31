import { Sun, SunSnow } from "lucide-react";
import CardTitle from "../CardTitle/CardTitle";
import texts from "@/constants/texts";
import { WeatherInterface } from "@/interfaces/itinerary.interface";

interface WeatherProps{
    weather: WeatherInterface
}

export default function Weather({weather}: WeatherProps){
    return(
        <div className="bg-white mx-4 border rounded-2xl border-gray-300 max-w-1/4 mt-8">
            <CardTitle icon={<SunSnow />} title={texts.itinerary_titles.weather}/>
            <div className="mx-4 text-primary-color">
                <p className="my-2">Na data da viagem a estação será: <span className="text-second-color">{weather.season}</span></p>
                <p className="my-2">A temperatura média normalmente é: <span className="text-second-color">{weather.averageTemperature}</span></p>
                <p className="mb-2"><span className="text-purple-400">{texts.tip}:</span> {weather.recommendation}</p>
            </div>
        </div>
    )
}