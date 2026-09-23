"use client"

import OptionsSelect from "@/components/profile/OptionsSelect";
import MainContent from "@/components/profile/MainContent";
import { useSession } from "next-auth/react";
import { getUserItineraries } from "@/services/itinerary.service";
import { getUserIdByEmail } from "@/services/user.service";
import { getFavoriteDestinations } from "@/services/destination.service";
import { getFavoriteReadyGuides } from "@/services/readyGuides.service";
import { useEffect, useState } from "react";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { SavedDestinationInterface } from "@/interfaces/destination.interface";
import Loading from "@/components/loading/Loading/Loading";
import texts from "@/constants/texts";
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface";

export default function Profile() {
    const { data: session, status } = useSession();

    const [itineraries, setItineraries] = useState<ItineraryInterface[]>([])
    const [savedDestinations, setSavedDestinations] = useState<SavedDestinationInterface[]>([])
    const [savedReadyGuides, setSavedReadyGuides] = useState<SavedReadyGuideInterface[]>([])
    const [optionSelected, setOptionSelected] = useState(texts.optionSelectorProfile.home)

    useEffect(() => {
        if (status !== "authenticated") return;

        const getData = async () => {

            const user = await getUserIdByEmail(session?.user?.email)
            setItineraries(await getUserItineraries(user.user.id))
            setSavedDestinations(await getFavoriteDestinations(user.user.id))
            setSavedReadyGuides(await getFavoriteReadyGuides(user.user.id))
        }

        getData()

    }, [session, status])

    return (
        <div className="bg-background-color flex mt-2 animate-[optionSelector_300ms_ease-out]">
            <OptionsSelect optionSelected={optionSelected} setOptionSelected={setOptionSelected} />
            {status === 'loading' &&
                <div className="bg-white rounded-2xl mx-4 w-full ">
                    <Loading />
                </div>
            }

            {session &&
                <MainContent session={session}
                    itineraries={itineraries}
                    savedDestinations={savedDestinations}
                    savedReadyGuides={savedReadyGuides}
                    optionSelected={optionSelected}
                />
            }
        </div>
    )
}