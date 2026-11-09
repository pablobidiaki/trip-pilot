import { UserInterface } from "@/interfaces/user.interface"
import UserInfos from "./UserInfos"
import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import Map from "../ui/Map/Map"
import Header from "../ui/Header/Header"
import Footer from "../ui/Footer/Footer"
import ItinerariesCard from "./ItinerariesCard"
import texts from "@/constants/texts"

interface VisitingProfileProps{
    user: UserInterface
    itineraries: ItineraryInterface[]
}

export default function VisitingProfile({user, itineraries}: VisitingProfileProps){
    return(
        <div className="bg-background-color">
            <Header backgroundLight={true}/>
            <UserInfos user={user} itineraries={itineraries!}/>
            <div className="mt-10">
                <h1 className="text-2xl text-primary-color text-center mb-2 font-medium
                    md:text-4xl
                ">{texts.visitingProfile.mapTitle} {user?.name}</h1>

                <Map user={user} tailwindTags="mx-2 2xl:mx-auto 2xl:max-w-[80vw]" guestMode={true}/>
            </div>
            <h1 className="text-2xl text-primary-color text-center mb-2 font-medium mt-20
                md:text-4xl
            ">{texts.visitingProfile.itinerariesGenerated} {user?.name}</h1>
            {itineraries?.length == 0 ? <p className="text-secondary-color text-2xl italic text-center  mt-5">Nenhum roteiro encontrado.</p>
            :
            <div className={`${itineraries?.length < 3 ? "flex justify-center gap-5" : 
                "grid grid-cols-1 mx-auto w-fit gap-5 lg:gap-15 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-5"
            }`}>
                {itineraries?.map((itinerary, index) => (
                    <ItinerariesCard key={index} itinerary={itinerary} />
                ))}
            </div>}
            <Footer />
        </div>
    )
}