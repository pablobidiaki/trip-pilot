import GradientButton from "@/components/ui/Buttons/GradientButton"
import texts from "@/constants/texts"
import { SavedReadyGuideInterface } from "@/interfaces/readyGuides.interface"
import { Calendar1, CircleDollarSign, Languages } from "lucide-react"
import Link from "next/link"

interface SavedReadyGuidesProps{
    guides: SavedReadyGuideInterface[]
}

export default function SavedReadyGuides({guides}: SavedReadyGuidesProps){
    return(
        <div className="p-4 animate-[optionSelector_300ms_ease-out]">
            <h1 className="text-4xl font-medium text-primary-color">{texts.profile.savedGuides}</h1>
            <p className="text-sm font-light text-second-color">{texts.profile.savedGuidesText}</p>
            <div className="grid grid-cols-4 mt-5 gap-5">
                {guides.map((guide, index) => (
                    <Link key={index} href={`destinations/${guide.readyGuide.id}`} className="relative bg-background-color border rounded-2xl transition-all hover:duration-200 hover:scale-103">
                        <p className="absolute top-2 right-2 object-cover z-10 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{guide.readyGuide.travelType}</p>
                        <img className="w-full h-60 object-cover brightness-50 rounded-t-2xl" src={guide.readyGuide.imageURL} alt={guide.readyGuide.title} />
                        <div>
                            <p className="text-2xl font-semibold text-gray-900 truncate mx-2">{guide.readyGuide.title}</p>
                            <p className="mx-2 text-second-color text-sm mt-2 line-clamp-2">{guide.readyGuide.description}</p>
                            <div className="grid grid-cols-3 gap-2 mx-2  mt-3 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <Languages className="text-green-500" />
                                    </div>
                                    <p className="text-primary-color mt-2">{guide.readyGuide.language} </p>
                                    <p className="text-second-color">{texts.readyGuides.language}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-100 rounded-full p-2">
                                        <CircleDollarSign className="text-blue-500" />
                                    </div>
                                    <p className="text-primary-color mt-2 mx-2 truncate max-w-30">{guide.readyGuide.currenty}</p>
                                    <p className="text-second-color mx-2 ">{texts.readyGuides.currency}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-purple-100 rounded-full p-2">
                                        <Calendar1 className="text-purple-500" />
                                    </div>
                                    <p className="text-primary-color mt-2">{guide.readyGuide.days} </p>
                                    <p className="text-second-color">{texts.days}</p>
                                </div>
                            </div>

                            <p className="text-xl text-center mt-5 font-bold text-gray-900">{texts.real} {guide.readyGuide.price.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>

                            <div className="m-2 mt-5">
                                <GradientButton text={texts.profile.viewGuide} type="button" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}