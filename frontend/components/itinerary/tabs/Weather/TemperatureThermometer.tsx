import texts from "@/constants/texts";

interface TemperatureThermometerProps {
    temperature: number;
}

export default function TemperatureThermometer({ temperature }: TemperatureThermometerProps) {
    const minTemperature = -20
    const maxTemperature = 50

    const percentage = Math.min(
        Math.max(
            ((temperature - minTemperature) /
                (maxTemperature - minTemperature)) *
            100,
            0
        ),
        100
    )

    const teste = () => {
        if (temperature <= 15) return "bg-blue-300"
        else if (temperature > 15 && temperature < 26) return "bg-orange-300"
        else if (temperature >= 26) return "bg-red-300"
    }

    return (
        <div className="flex items-center gap-5 w-[70%] mx-auto">
            <span className="text-sm text-second-color ml-4">{minTemperature}{texts.weather.graus}</span>
            <div className={`w-full h-3 bg-gray-200 rounded-full overflow-hidden`}>
                <div
                    className={`${teste()} h-full rounded-full`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <span className="text-sm text-second-color mr-4">{maxTemperature}{texts.weather.graus}</span>
        </div>
    );
}