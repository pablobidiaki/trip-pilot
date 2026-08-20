import texts from "@/constants/texts";
import Image from "next/image";
import Link from "next/link";

export default function ItineraryBanner() {
    return(
        <div className="relative flex gap-30 items-cente">
            <img src={"/imgs/itinerary/banner.png"}
                 alt="Banner"
                 className="w-full absolute"
            />
            
            <Link className="relative mx-4 mt-2" href={"/"} >
                <Image src={"/imgs/icons/trip_pilot.png"}
                    alt="TripPilot icon"
                    width={50}
                    height={50}
                    priority
                />
            </Link>

            <div className="relative mt-2">
                <h1 className="text-primary-color text-4xl font-medium">{texts.itinerary_titles.main_title}</h1>
                <p className="text-second-color mt-2">{texts.all_ready}</p>
            </div> 
        </div>
    )
}   