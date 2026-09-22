import texts from "@/constants/texts"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import Link from "next/link"

interface ReadyGuidesSavedCardProps {
    savedReadyGuides: SavedReadyGuideInterface[]
}

export default function ReadyGuidesSavedCard({ savedReadyGuides }: ReadyGuidesSavedCardProps) {
    return (
        <div className="grid grid-cols-4 py-2 gap-5 px-4">
            {savedReadyGuides.map((guide, index) => (
                <Link className="relative bg-background-color border rounded-2xl transition-all hover:duration-200 hover:scale-103" key={index} href={`ready_guides/${guide.readyGuide.id}`}>
                    <img className="relative w-full h-52 object-cover brightness-50 rounded-t-2xl" src={guide.readyGuide.imageURL} />
                    <h1 className="mx-2 text-lg font-semibold text-gray-900 truncate">{guide.readyGuide.title}</h1>
                    <p className="text-sm line-clamp-2 text-second-color mx-2 mb-3">{guide.readyGuide.description}</p>
                    {guide.readyGuide.cities.map((city, index) => (
                        <span key={index} className="mx-2 text-second-color">{city}</span>
                    ))}
                    <div className="pt-3 mx-2 mb-1">
                        <p className="text-xl font-bold text-gray-900">{texts.real} {guide.readyGuide.price.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}