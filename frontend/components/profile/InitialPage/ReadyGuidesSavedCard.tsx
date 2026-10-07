import FavoriteButton from "@/components/destination/DestinationBanner/FavoriteButton"
import texts from "@/constants/texts"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import { UserInterface } from "@/interfaces/user.interface"
import Link from "next/link"

interface ReadyGuidesSavedCardProps {
    user: UserInterface
    savedReadyGuides: SavedReadyGuideInterface[]
}

export default function ReadyGuidesSavedCard({ user, savedReadyGuides }: ReadyGuidesSavedCardProps) {
    if (savedReadyGuides.length === 0) {
        return (
            <div className="flex items-center mx-5 py-5">
                <p className="text-second-color text-lg italic">{texts.profile.noneGuideSaved}</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 py-2 gap-5 px-2
            md:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
        ">
            {savedReadyGuides.map((guide, index) => (
                <Link className="relative bg-background-color border border-gray-100 rounded-2xl transition-all hover:duration-200 hover:scale-101" key={index} href={`ready_guides/${guide.readyGuide.id}`}>
                    <div className="z-100 absolute top-2 right-2 ">
                        <FavoriteButton userId={user?.id} readyGuideId={guide.readyGuide.id} />
                    </div>
                    <img className="relative w-full h-52 object-cover brightness-50 rounded-t-2xl" src={guide.readyGuide.imageURL} />
                    <h1 className="mx-2 text-lg font-semibold text-gray-900 truncate">{guide.readyGuide.title}</h1>
                    <p className="text-xs line-clamp-2 text-second-color mx-2 mb-3
                        md:text-sm
                    ">{guide.readyGuide.description}</p>
                    {guide.readyGuide.cities.map((city, index) => (
                        <span key={index} className="mx-2 text-second-color text-xs
                            md:text-sm
                        ">{city}</span>
                    ))}
                    <div className="pt-3 mx-2 mb-1">
                        <p className="text-sm font-bold text-gray-900
                            md:text-xl
                        ">{texts.real} {guide.readyGuide.price.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}