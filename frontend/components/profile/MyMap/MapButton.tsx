import { ReactNode } from "react"

interface MapButtonProps{
    icon: ReactNode
    toolTipText: string
    tailwindTags: string
    onClick: () => void
}

export default function MapButton({icon, toolTipText, tailwindTags, onClick}: MapButtonProps){
    return(
        <div onClick={onClick} className={`group fixed left-419 p-2 rounded-xl bg-gray-300 z-100 cursor-pointer hover:bg-gray-500 transition-all hover:duration-200 ${tailwindTags}`}>
            <span>{icon}</span>
            <p className="text-sm truncate absolute right-full top-1/2 -translate-y-1/2 mr-2 hidden group-hover:block bg-white rounded-xl py-1 px-3 animate-[optionSelector_300ms_ease-out]">{toolTipText}</p>
        </div>
    )
}