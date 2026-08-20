import { ReactNode } from "react"

interface InfoItemProps {
    icon: ReactNode,
    text: string,
    tailwindTags?: string
    tailwindTextTags?: string
    selected?: boolean,
    onClick?: () => void
}

export default function InfoItem({icon, text, tailwindTags, tailwindTextTags, selected, onClick}: InfoItemProps) {
    return (
        <button
            onClick={onClick}
            className={`${tailwindTags} flex items-center gap-2 rounded-full py-2 ${selected
                    ? "bg-[#6366F1] text-white px-2"
                    : "bg-transparent text-gray-700"
                }`}
        >
            {icon}
            <span className={`${tailwindTextTags}`}>{text}</span>
        </button>
    )
}