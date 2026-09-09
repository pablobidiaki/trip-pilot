import texts from "@/constants/texts"
import { WeatherInterface } from "@/interfaces/itinerary.interface"
import Image from "next/image"
import TemperatureThermometer from "./TemperatureThermometer"

interface WeatherProps {
    weather: WeatherInterface
}

const seasons = [
    { name: texts.seasons.summer, imageURL: "/imgs/itinerary/seasons/summer.jpg" },
    { name: texts.seasons.winter, imageURL: "/imgs/itinerary/seasons/winter.jpg" },
    { name: texts.seasons.fall, imageURL: "/imgs/itinerary/seasons/fall.jpg" },
    { name: texts.seasons.spring, imageURL: "/imgs/itinerary/seasons/spring.jpg" },
]

export default function Weather({ weather }: WeatherProps) {
    const currentSeason = seasons.find(
        (season) => season.name === weather.season
    )

    return (
        <div className="flex justify-center px-4 py-10">
            <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg">
                {currentSeason && (
                    <div className="relative h-64 w-full sm:h-80">
                        <Image
                            src={currentSeason.imageURL}
                            alt={`${currentSeason.name} image`}
                            fill
                            className="object-cover brightness-50"
                        />

                        <div className="absolute bottom-2 left-4">
                            <p className="text-sm text-white">{texts.weather.season}</p>
                            <h2 className="text-4xl text-white">{weather.season}</h2>
                        </div>
                    </div>
                )}


                <p className="text-sm text-primary-color text-center mt-2">{texts.weather.averageTemperature}</p>
                <p className="text-3xl font-bold text-primary-color text-center mb-2">{weather.averageTemperature}</p>
                <TemperatureThermometer temperature={18} />
                
                <div className="max-w-[50%] p-2 my-8 bg-gray-100 mx-auto rounded-2xl shadow-2xl shadow-gray-300">
                    <p className="text-center mb-2 font-medium text-primary-color">{texts.weather.recommendation}</p>
                    <p className=" text-second-color text-center text-sm"> {weather.recommendation}</p>
                </div>
            </div>
        </div>
    )
}
