import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { Plane } from "lucide-react";
import TripRoute from "../Requirements/TripRoute";
import { Tickets } from "@/interfaces/itinerary.interface";

interface HowToGetThereProps{
    tickets: Tickets[]
}

export default function HowToGetThere({tickets}: HowToGetThereProps) {
    return (
        <div className="bg-white border rounded-2xl min-w-1/3 border-gray-300 mt-8">
            <CardTitle icon={<Plane />} title={texts.itinerary_titles.fly_details} />
            <div className="m-4 flex justify-between items-center gap-5">
                <div className="border border-gray-200 rounded-2xl">
                    <h1 className="text-primary-color text-xl font-medium my-2 px-2 text-center">Ida</h1>
                    {tickets.map((ticket, index) => (
                        <div key={index} className=" mb-5">
                            <hr />
                            <h2 className="text-primary-color text-xl font-medium my-2 px-2">{index + 1}º voo</h2>
                            <p className="text-primary-color font-medium px-2">{texts.how_to_get_there.boarding_point} <span className="text-second-color">{ticket.boardingPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.how_to_get_there.disembarkation_point} <span className="text-second-color">{ticket.disembarkationPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.how_to_get_there.fly_time} <span className="text-second-color">{ticket.flyTime}</span></p>
                        </div>
                    ))}
                </div>

                <TripRoute country_origin_flag="/imgs/itinerary/brasil.jpg"
                    country_origin_name="Brasil"
                    country_destination_flag="/imgs/itinerary/bolivia.jpg"
                    country_destination_name="Bolivia"
                />

                <div className="border border-gray-200 rounded-2xl">
                    <h1 className="text-primary-color text-xl font-medium my-2 px-2 text-center">Volta</h1>
                    {tickets.map((ticket, index) => (
                        <div key={index} className=" mb-5">
                            <hr />
                            <h2 className="text-primary-color text-xl font-medium my-2 px-2">{index + 1}º voo</h2>
                            <p className="text-primary-color font-medium px-2">{texts.how_to_get_there.boarding_point} <span className="text-second-color">{ticket.boardingPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.how_to_get_there.disembarkation_point} <span className="text-second-color">{ticket.disembarkationPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.how_to_get_there.fly_time} <span className="text-second-color">{ticket.flyTime}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}