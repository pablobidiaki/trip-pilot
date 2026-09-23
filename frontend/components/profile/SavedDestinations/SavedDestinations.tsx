import GradientButton from "@/components/ui/Buttons/GradientButton"
import texts from "@/constants/texts"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import { Calendar1, Languages, SunSnow } from "lucide-react"
import Link from "next/link"

interface SavedDestinationsProps {
    destinations: SavedDestinationInterface[]
}

export default function SavedDestinations({ destinations }: SavedDestinationsProps) {
    return (
        <div className="p-4 animate-[optionSelector_300ms_ease-out]">
            <h1 className="text-4xl font-medium text-primary-color">{texts.profile.savedDestinations}</h1>
            <p className="text-sm font-light text-second-color">{texts.profile.destinationsText}</p>
            <div className="grid grid-cols-4 mt-5 gap-5">
                {destinations.map((destination, index) => (
                    <Link key={index} href={`destinations/${destination.destination.id}`} className="relative bg-background-color border rounded-2xl transition-all hover:duration-200 hover:scale-103">
                        <p className="absolute top-2 right-2 object-cover z-10 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{destination.destination.travelType}</p>
                        <img className="w-full h-60 object-cover brightness-50 rounded-t-2xl" src={destination.destination.imageURL} alt={destination.destination.destination} />
                        <div>
                            <p className="text-2xl font-semibold text-gray-900 truncate mx-2">{destination.destination.destination}</p>
                            <p className="mx-2 text-second-color text-sm mt-2 line-clamp-2">{destination.destination.description}</p>
                            <div className="grid grid-cols-3 gap-2 mx-2  mt-3 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <Languages className="text-green-500" />
                                    </div>
                                    <p className="text-primary-color mt-2">{destination.destination.language} </p>
                                    <p className="text-second-color">{texts.destination.language}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-100 rounded-full p-2">
                                        <SunSnow className="text-blue-500" />
                                    </div>
                                    <p className="text-primary-color mt-2 mx-2 truncate max-w-30">{destination.destination.weather}</p>
                                    <p className="text-second-color mx-2 ">{texts.destination.weather}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-purple-100 rounded-full p-2">
                                        <Calendar1 className="text-purple-500" />
                                    </div>
                                    <p className="text-primary-color mt-2">{destination.destination.dayReccomended} </p>
                                    <p className="text-second-color">{texts.days}</p>
                                </div>
                            </div>

                            <p className="text-xl text-center mt-5 font-bold text-gray-900">{texts.real} {destination.destination.averageCost.total.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>

                            <div className="m-2 mt-5">
                                <GradientButton text={texts.profile.viewDestination} type="button" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}