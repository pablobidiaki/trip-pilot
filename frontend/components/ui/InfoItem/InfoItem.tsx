import { ReactNode } from "react"

interface InfoItemProps {
    icon: ReactNode,
    text: string,
    tailwindTags?: string
    selected?: boolean,
    onClick?: () => void
}

export default function InfoItem({icon, text, tailwindTags, selected, onClick}: InfoItemProps) {
    return (
        <button
            onClick={onClick}
            className={`${tailwindTags} flex items-center gap-2 rounded-full py-2 ${selected
                    ? "bg-[#6366F1] text-white px-2"
                    : "bg-transparent text-gray-700"
                }`}
        >
            {icon}
            <span>{text}</span>
        </button>
    )
}