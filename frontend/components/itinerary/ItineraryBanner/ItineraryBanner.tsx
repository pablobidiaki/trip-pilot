import texts from "@/constants/texts";
import Image from "next/image";
import Link from "next/link";

export default function ItineraryBanner() {
    return(
        <div className="relative flex gap-30 items-center ml-4 mt-5">
            <img src={"/imgs/itinerary/banner.png"}
                 alt="Banner"
                 className="w-full absolute -z-10"
                 
            />
            <Link href={"/"}>
                <Image src={"/imgs/icons/trip_pilot.png"}
                    alt="TripPilot icon"
                    width={50}
                    height={50}
                    priority
                />
            </Link>

            <div>
                <h1 className="text-primary-color text-4xl font-medium">{texts.itinerary_titles.main_title}</h1>
                <p className="text-second-color mt-2">{texts.all_ready}</p>
            </div> 
        </div>
    )
}