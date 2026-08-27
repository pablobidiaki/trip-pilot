import { ChevronRight } from "lucide-react"
import { ReactNode } from "react"

interface UtilInfoCardProps {
    icon: ReactNode,
    title: string,
    text: string,
    isOpen: boolean,
    guide: any
    onClick: () => void
}

export default function UtilInfoCard({ icon, title, text, isOpen, guide, onClick }: UtilInfoCardProps) {
    return (
        <div className="relative">
            <div onClick={onClick} className="h-full cursor-pointer flex justify-between items-center border border-gray-200 rounded-2xl bg-purple-50 mt-5 p-2 transition-all duration-200 hover:bg-purple-100">
                <span className="text-purple-color p-2 bg-purple-100 rounded-full m-1">{icon}</span>
                <div className="max-w-2/3">
                    <h1 className="text-primary-color font-medium text-xl ">{title}</h1>
                    <p className="text-second-color text-sm font-light">{text}</p>
                </div>
                <ChevronRight className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`} />

                {isOpen && (
                    <div className="absolute left-0 top-full mt-5 z-20 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg w-full">
                        {guide.map((text, index) => (
                            <p key={index} className="text-second-color font-light text-sm">- {text} </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}