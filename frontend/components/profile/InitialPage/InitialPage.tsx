import GradientButton from "../../ui/Buttons/GradientButton"
import Link from "next/link"
import texts from "@/constants/texts"
import { Bookmark, Briefcase, Plane } from "lucide-react"
import InitialPageInfoCard from "./InitialPageInfoCard"
import YourItinerariesCard from "./YourItinerariesCard"
import { ItineraryInterface } from "@/interfaces/itinerary.interface"

interface InitialPageProps {
    session: any
    itineraries: ItineraryInterface[]
}

export default function InitialPage({ session, itineraries }: InitialPageProps) {
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
            value: 28,
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
        <div className="">
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
            <h1 className="text-primary-color text-2xl font-medium mx-5 mt-3">Seus Roteiros</h1>
            <YourItinerariesCard itineraries={itineraries} />
            <h1 className="text-primary-color text-2xl font-medium mx-5 my-3">Destinos salvos</h1>
            <h1 className="text-primary-color text-2xl font-medium mx-5 my-3">Guias prontos salvos</h1>
            <h1 className="text-primary-color text-2xl font-medium mx-5 my-3">Recomendações</h1>
        </div>
    )
}