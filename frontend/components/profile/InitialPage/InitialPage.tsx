"use client"

import GradientButton from "../../ui/Buttons/GradientButton"
import Link from "next/link"
import texts from "@/constants/texts"
import { Bookmark, Briefcase, Plane } from "lucide-react"
import InitialPageInfoCard from "./InitialPageInfoCard"
import YourItinerariesCard from "./YourItinerariesCard"
import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import DestinationSavedCard from "./DestinationSavedCard"
import ReadyGuidesSavedCard from "./ReadyGuidesSavedCard"
import { DestinationInterface, SavedDestinationInterface } from "@/interfaces/destination.interface"
import { ReadyGuideInterface, SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import { UserInterface } from "@/interfaces/user.interface"
import { useEffect, useState } from "react"
import { getDestinations } from "@/services/destination.service"
import { getReadyGuides } from "@/services/readyGuides.service"
import RecommendationCard from "./RecommendationCard"

interface InitialPageProps {
    user: UserInterface
    session: any
    itineraries: ItineraryInterface[]
    savedDestinations: SavedDestinationInterface[]
    savedReadyGuides: SavedReadyGuideInterface[]
    setOptionSelected: (text: string) => void
}

export default function InitialPage({ user, session, itineraries, savedDestinations, savedReadyGuides, setOptionSelected }: InitialPageProps) {
    const cardInfos = [
        {
            icon: <Briefcase className="text-purple-500" />,
            title: texts.profile.itinerariesCreated,
            value: itineraries.length,
            bgColor: "bg-purple-100"
        },
        {
            icon: <Bookmark className="text-green-500" />,
            title: texts.profile.savedItems,
            value: savedDestinations.length + savedReadyGuides.length,
            bgColor: "bg-green-100"
        },
        {
            icon: <Plane className="text-blue-500" />,
            title: texts.profile.visitedCountries,
            value: user?.countriesVisited.length,
            bgColor: "bg-blue-100"
        }
    ]

    const [destinations, setDestinations] = useState<DestinationInterface[]>()
    const [guides, setGuides] = useState<ReadyGuideInterface[]>()

    useEffect(() => {
        const getReccomendations = async () => {
            const destinations = await getDestinations()
            const guides = await getReadyGuides()

            setDestinations(destinations)
            setGuides(guides)
        }

        getReccomendations()
    }, [destinations, guides])

    return (
        <div className="w-full animate-[optionSelector_300ms_ease-out]">
            <div className="flex flex-col mt-2
                md:flex-row md:justify-between md:items-center 
            ">
                <div className="mx-2 gap-2">
                    <p className="text-primary-color font-medium truncate
                        md:text-2xl
                        lg:text-3xl
                    ">{texts.profile.hello} {session?.user?.name}</p>
                    <p className="text-second-color text-xs font-light
                        md:text-sm
                    ">{texts.profile.readyForNextAdventure}</p>
                </div>
                <Link className="my-2 mx-2" href="/">
                    <GradientButton text={texts.profile.createScript} type="button" />
                </Link>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-5 p-5
                md:flex md:px-2
            ">
                {cardInfos.map((info, index) => (
                    <InitialPageInfoCard key={index} icon={info.icon} title={info.title} value={info.value} bgColor={info.bgColor} />
                ))}
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-primary-color text-lg font-medium mx-2 mt-5
                    md:text-2xl
                ">Seus Roteiros <span className="text-second-color ml-1 text-lg font-normal">({itineraries.length})</span></h1>
                <p onClick={() => setOptionSelected(texts.optionSelectorProfile.myItineraries)} className="text-link-color underline text-lg font-medium mx-2 mt-5 cursor-pointer hidden
                    md:block
                ">{texts.profile.viewAllItineraries}</p>
            </div>
            <YourItinerariesCard itineraries={itineraries} />

            <div className="flex justify-between items-center">
                <h1 className="text-primary-color text-lg font-medium mx-2 mt-5
                    md:text-2xl
                ">Destinos salvos <span className="text-second-color ml-1 text-lg font-normal">({savedDestinations.length})</span></h1>
                <p onClick={() => setOptionSelected(texts.optionSelectorProfile.destinationsSaved)} className="text-link-color underline text-lg font-medium mx-2 mt-5 cursor-pointer hidden
                    md:block
                ">{texts.profile.viewAllDestinationsSaved}</p>
            </div>
            <DestinationSavedCard user={user} savedDestinations={savedDestinations} />

            <div className="flex  justify-between items-center">
                <h1 className="text-primary-color text-lg font-medium mx-2 mt-5
                    md:text-2xl
                ">Guias prontos salvos <span className="text-second-color ml-1 text-lg font-normal">({savedReadyGuides.length})</span></h1>
                <p onClick={() => setOptionSelected(texts.optionSelectorProfile.guidesSaved)} className="text-link-color underline text-lg font-medium mx-2 mt-5 cursor-pointer hidden
                    md:block
                ">{texts.profile.viewAllReadyGuidesSaved}</p>
            </div>
            <ReadyGuidesSavedCard user={user} savedReadyGuides={savedReadyGuides} />

            <h1 className="text-primary-color text-2xl font-medium mx-5 mt-5">Recomendações</h1>
            <div className="grid grid-cols-1 py-2 gap-5 px-2 pb-10
                md:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
            ">
                {destinations?.slice(0, 2).map((destinations, index) => (
                    <RecommendationCard key={index} type="Destino" destination={destinations} path={'destinations'} />
                ))}

                {guides?.slice(0, 2).map((destinations, index) => (
                    <RecommendationCard key={index} type="Guia Pronto" readyGuide={destinations} path={'ready_guides'} />
                ))}
            </div>

        </div>
    )
}