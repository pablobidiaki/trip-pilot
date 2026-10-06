import texts from "@/constants/texts";
import TripRoute from "./TripRoute";
import { Tickets } from "@/interfaces/itinerary.interface";

interface HowToGetThereProps {
    tickets: Tickets[]
    destinationCountry: string
    destinationFlag: string
    originCountry: string
    originFlag: string
}

export default function HowToGetThere({ tickets, destinationCountry, destinationFlag, originCountry, originFlag }: HowToGetThereProps) {
    return (
        <div className="bg-white border rounded-2xl border-gray-100 mt-5 w-full">
            <h1 className="p-2 text-2xl border-b border-gray-100 mx-2 pb-2 mb-2"><span className="bg-orange-100 text-orange-500 px-2 rounded-lg">7</span> {texts.itineraryTitles.flyDetails}</h1>

            <div className="flex justify-center gap-25 mt-5
                xl:hidden
            ">
                <div className="flex flex-col items-center">
                    <p className="text-primary-color">{texts.howToGetThere.boarding}</p>
                    <img src={originFlag} className="max-w-30 " />

                </div>
                <div className="flex flex-col items-center">
                    <p className="text-primary-color">{texts.howToGetThere.disembarkation}</p>
                    <img src={destinationFlag} className="max-w-30 " />

                </div>
            </div>

            <div className="m-2 flex flex-col justify-between items-center gap-5 
                xl:flex-row
            ">
                <div className="border border-gray-200 rounded-2xl bg-background-color 
                    md:mt-5 md:w-[85%]
                ">
                    <h1 className="text-primary-color text-xl font-medium my-2 px-2 text-center">{texts.howToGetThere.go}</h1>
                    {tickets.map((ticket, index) => (
                        ticket.isGoing &&
                        <div key={index} className=" mb-5">
                            <hr />
                            <h2 className="text-primary-color text-xl font-medium my-2 px-2">{index + 1}{texts.howToGetThere.fly}</h2>
                            <p className="text-primary-color font-medium px-2">{texts.howToGetThere.boardingPoint} <span className="text-second-color">{ticket.boardingPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.howToGetThere.disembarkationPoint} <span className="text-second-color">{ticket.disembarkationPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.howToGetThere.flyTime} <span className="text-second-color">{ticket.flyTime}</span></p>
                        </div>
                    ))}
                </div>
                <div className="hidden
                    xl:block
                ">
                    <TripRoute country_origin_flag={originFlag}
                        country_origin_name={originCountry}
                        country_destination_flag={destinationFlag}
                        country_destination_name={destinationCountry}
                    />
                </div>

                <div className="border border-gray-200 rounded-2xl bg-background-color
                    md:w-[85%]
                ">
                    <h1 className="text-primary-color text-xl font-medium my-2 px-2 text-center">{texts.howToGetThere.return}</h1>
                    {tickets.map((ticket, index) => (
                        !ticket.isGoing &&
                        <div key={index} className="w-full mb-5">
                            <hr />
                            <h2 className="text-primary-color text-xl font-medium my-2 px-2">{index + 1}º voo</h2>
                            <p className="text-primary-color font-medium px-2">{texts.howToGetThere.boardingPoint} <span className="text-second-color">{ticket.boardingPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.howToGetThere.disembarkationPoint} <span className="text-second-color">{ticket.disembarkationPoint}</span></p>
                            <p className="text-primary-color font-medium px-2">{texts.howToGetThere.flyTime} <span className="text-second-color">{ticket.flyTime}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}