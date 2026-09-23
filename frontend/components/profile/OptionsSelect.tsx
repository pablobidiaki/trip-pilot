import texts from "@/constants/texts";
import { Cog, Home, LogOut, MountainSnow, Signpost, Tent } from "lucide-react"
import Link from "next/link";

interface optionSelectProps{
    optionSelected: string
    setOptionSelected: (text: string) => void
}

export default function OptionsSelect({optionSelected, setOptionSelected}: optionSelectProps) {
    const options = [
        { icon: <Home />, text: texts.optionSelectorProfile.home },
        { icon: <MountainSnow />, text: texts.optionSelectorProfile.myItineraries },
        { icon: <Tent />, text: texts.optionSelectorProfile.destinationsSaved },
        { icon: <Signpost />, text: texts.optionSelectorProfile.guidesSaved },
        { icon: <Cog />, text: texts.optionSelectorProfile.configurations },
        { icon: <LogOut />, text: texts.optionSelectorProfile.exit },
    ]

    return (
        <div className="flex flex-col gap-5 w-fit h-fit bg-white rounded-r-2xl">
            <Link href="/">
                <img src="/imgs/icons/trip_pilot.png" alt="Logo" className="w-16 h-16 mx-auto my-2" />
            </Link>
            {options.map((option, index) => (
                <div key={index}
                    className={`py-2 pl-2 pr-4 cursor-pointer flex gap-2 rounded-r-2xl items-center ${optionSelected === option.text ? 'bg-gray-300' : ''} ${option.text === "Sair"  ? 'text-red-500' : 'text-primary-color'} hover:bg-gray-200`}
                    onClick={() => setOptionSelected(option.text)}
                >
                    <span>{option.icon}</span>
                    <p className={`text-lg whitespace-nowrap`}>{option.text}</p>
                </div>
            ))}
        </div>
    )
}