import GradientButton from "@/components/ui/Buttons/GradientButton";
import texts from "@/constants/texts";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import formatDate from "@/utils/formatDate";
import { Calendar, Plane, User } from "lucide-react";
import Link from "next/link";

interface MyItinerariesProps {
    itineraries: ItineraryInterface[]
}

export default function MyItineraries({ itineraries }: MyItinerariesProps) {
    return (
        <div className="p-2 animate-[optionSelector_300ms_ease-out]">
            <h1 className="font-medium text-primary-color
                md:text-2xl
            ">{texts.profile.myItineraries}</h1>
            <p className="text-xs font-light text-second-color
                md:text-sm
            ">{texts.profile.itineraryText}</p>
            <div className="grid grid-cols-1 mt-5 gap-5
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
            ">
                {itineraries.length === 0 &&
                    <div className="flex items-center">
                        <p className="text-second-color text-xs italic
                            md:text-lg
                        ">{texts.profile.noneItineraryCreated}</p>
                    </div>
                }
                {itineraries.map((itinerary, index) => (
                    <Link key={index} href={`itinerary/${itinerary.id}`} className="relative bg-background-color border border-gray-100 rounded-2xl transition-all hover:duration-200 hover:scale-103">
                        <p className="absolute top-2 right-2 object-cover z-10 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{itinerary.travelType}</p>
                        <img className="w-full h-60 object-cover brightness-50 rounded-t-2xl" src={itinerary.itinerary.tours[0].imageURL} alt={itinerary.itinerary.tours[0].name} />
                        <div>
                            <div className="flex items-center justify-center gap-5 mt-1 mx-2 mb-2">
                                <p className="text-2xl font-semibold text-gray-900">{itinerary.destination}</p>
                                <img className="max-w-10 shadow-2xl shadow-gray-500" src={itinerary.countryDestinationFlagURL} />
                            </div>
                            <div className="flex flex-col justify-between gap-2 mx-2  mt-2
                                md:flex-row md:justify-evenly
                            ">
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-100 rounded-full p-2">
                                        <Calendar className="text-blue-500" />
                                    </div>
                                    <p className="text-primary-color mt-2">{itinerary.days} </p>
                                    <p className="text-second-color">{texts.days}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <Plane className="text-green-500" />
                                    </div>
                                    <p className="text-second-color mt-2 mx-2 "><span className="text-primary-color">Ida: </span>{formatDate(itinerary.startDate)}</p>
                                    <p className="text-second-color mx-2 "><span className="text-primary-color">Volta: </span>{formatDate(itinerary.endDate)}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-purple-100 rounded-full p-2">
                                        <User className="text-purple-500" />
                                    </div>
                                    <p className="text-primary-color mt-2">{itinerary.travelers} </p>
                                    <p className="text-second-color">{texts.people}</p>
                                </div>
                            </div>

                            <p className="text-xl text-center mt-5 font-bold text-gray-900">{texts.real} {itinerary.budgetTotal.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>

                            <div className="m-2 mt-5">
                                <GradientButton text={texts.itineraryExample.viewItinerary} type="button" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}