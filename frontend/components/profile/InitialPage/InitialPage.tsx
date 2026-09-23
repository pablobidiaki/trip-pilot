import GradientButton from "../../ui/Buttons/GradientButton"
import Link from "next/link"
import texts from "@/constants/texts"
import { Bookmark, Briefcase, Plane } from "lucide-react"
import InitialPageInfoCard from "./InitialPageInfoCard"
import YourItinerariesCard from "./YourItinerariesCard"
import { ItineraryInterface } from "@/interfaces/itinerary.interface"
import DestinationSavedCard from "./DestinationSavedCard"
import ReadyGuidesSavedCard from "./ReadyGuidesSavedCard"
import { SavedDestinationInterface } from "@/interfaces/destination.interface"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"

interface InitialPageProps {
    session: any
    itineraries: ItineraryInterface[]
    savedDestinations: SavedDestinationInterface[]
    savedReadyGuides: SavedReadyGuideInterface[]
    setOptionSelected: (text: string) => void
}

export default function InitialPage({ session, itineraries, savedDestinations, savedReadyGuides, setOptionSelected }: InitialPageProps) {
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
            value: 5,
            bgColor: "bg-blue-100"
        }
    ]

    return(
        <div className="animate-[optionSelector_300ms_ease-out]">
            <div className="flex justify-between items-center">
                <div className="mx-5 gap-2">
                    <p className="text-primary-color text-3xl font-medium">{texts.profile.hello} {session?.user?.name}</p>
                    <p className="text-second-color text-sm font-light">{texts.profile.readyForNextAdventure}</p>
                </div>
                <Link className="my-5 mx-5" href="/">
                    <GradientButton text={texts.profile.createScript} type="button" />
                </Link>
            </div>
            <div className="flex items-stretch gap-5 p-5">
                {cardInfos.map((info, index) => (
                    <InitialPageInfoCard key={index} icon={info.icon} title={info.title} value={info.value} bgColor={info.bgColor} />
                ))}
            </div>
            <div className="flex  justify-between items-center">
                <h1 className="text-primary-color text-2xl font-medium mx-5 mt-5">Seus Roteiros <span className="text-second-color ml-2 text-lg font-normal">({itineraries.length})</span></h1>
                <p onClick={() => setOptionSelected(texts.optionSelectorProfile.myItineraries)} className="text-link-color underline text-lg font-medium mx-5 mt-5 cursor-pointer">{texts.profile.viewAllItineraries}</p>
            </div>
            <YourItinerariesCard itineraries={itineraries} />

            <div className="flex  justify-between items-center">
                <h1 className="text-primary-color text-2xl font-medium mx-5 mt-5">Destinos salvos <span className="text-second-color ml-2 text-lg font-normal">({savedDestinations.length})</span></h1>
                <p onClick={() => setOptionSelected(texts.optionSelectorProfile.destinationsSaved)} className="text-link-color underline text-lg font-medium mx-5 mt-5 cursor-pointer">{texts.profile.viewAllDestinationsSaved}</p>
            </div>
            <DestinationSavedCard savedDestinations={savedDestinations} />

            <div className="flex  justify-between items-center">
                <h1 className="text-primary-color text-2xl font-medium mx-5 mt-5">Guias prontos salvos <span className="text-second-color ml-2 text-lg font-normal">({savedReadyGuides.length})</span></h1>
                <p onClick={() => setOptionSelected(texts.optionSelectorProfile.guidesSaved)} className="text-link-color underline text-lg font-medium mx-5 mt-5 cursor-pointer">{texts.profile.viewAllReadyGuidesSaved}</p>
            </div>  
            <ReadyGuidesSavedCard savedReadyGuides={savedReadyGuides}/>

            <h1 className="text-primary-color text-2xl font-medium mx-5 mt-5">Recomendações</h1>
        </div>
    )
}