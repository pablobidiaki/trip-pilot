import OptionsSelect from "@/components/profile/OptionsSelect";
import MainContent from "@/components/profile/MainContent";
import { auth } from "@/auth";
import { getUserItineraries } from "@/services/itinerary.service";
import { getUserIdByEmail } from "@/services/user.service";
import { getFavoriteDestinations } from "@/services/destination.service";
import { getFavoriteReadyGuides } from "@/services/readyGuides.service";

export default async function Profile() {
    const session = await auth() 
    const user = await getUserIdByEmail(session?.user?.email)
    const itineraries = await getUserItineraries(user.user.id)
    const savedDestinations = await getFavoriteDestinations(user.user.id)
    const savedReadyGuides = await getFavoriteReadyGuides(user.user.id)

    return(
        <div className="bg-background-color flex mt-2">
                <OptionsSelect />
                <MainContent session={session} itineraries={itineraries} savedDestinations={savedDestinations} savedReadyGuides={savedReadyGuides} />
        </div>
    )
}