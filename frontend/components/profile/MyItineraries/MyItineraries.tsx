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
        <div className="p-4">
            <h1 className="text-4xl font-medium text-primary-color">{texts.profile.myItineraries}</h1>
            <p className="text-sm font-light text-second-color">Reviva suas viagens e acesse todos os roteiros que você criou.</p>
            <div className="grid grid-cols-4 mt-5 gap-5">
                {itineraries.map((itinerary, index) => (
                    <Link key={index} href={`itinerary/${itinerary.id}`} className="relative bg-background-color border rounded-2xl transition-all hover:duration-200 hover:scale-103">
                        <p className="absolute top-2 right-2 object-cover z-10 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{itinerary.travelType}</p>
                        <img className="w-full h-60 object-cover brightness-50 rounded-t-2xl" src={itinerary.itinerary.tours[0].imageURL} alt={itinerary.itinerary.tours[0].name} />
                        <div>
                            <div className="flex items-center justify-center gap-5 mt-1 mx-2 mb-2">
                                <p className="text-2xl font-semibold text-gray-900">{itinerary.destination}</p>
                                <img className="max-w-10 shadow-2xl shadow-gray-500" src={itinerary.countryDestinationFlagURL} />
                            </div>
                            <div className="flex justify-between gap-2 mx-2  mt-2">
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-100 rounded-full p-2">
                                        <Calendar className="text-blue-500"/>
                                    </div>
                                    <p className="text-primary-color mt-2">{itinerary.days} </p>
                                    <p className="text-second-color">{texts.days}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <Plane className="text-green-500"/>
                                    </div>
                                    <p className="text-second-color mt-2 mx-2 "><span className="text-primary-color">Ida: </span>{formatDate(itinerary.startDate)}</p>
                                    <p className="text-second-color mx-2 "><span className="text-primary-color">Volta: </span>{formatDate(itinerary.endDate)}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-purple-100 rounded-full p-2">
                                        <User className="text-purple-500"/>
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
                                <GradientButton text={"Ver roteiro"} type="button" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}