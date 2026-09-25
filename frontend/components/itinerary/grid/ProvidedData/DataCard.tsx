import { ReactNode } from "react"

interface DataCardProps {
    icon: ReactNode
    title: string
    text: string
    subText?: string
}

export default function DataCard({ icon, title, text, subText }: DataCardProps) {
    return (
        <div className="flex gap-2 mx-2 bg-background-color py-2 pr-6 pl-2 rounded-xl">
            <span className="p-2 h-fit text-orange-400 bg-orange-100 rounded-xl">{icon}</span>
            <div>
                <p className="text-second-color uppercase text-xs font-light">{title}</p>
                <p className="text-primary-color font-medium">{text}</p>
                <p className="text-second-color text-xs font-light">{subText}</p>
            </div>
        </div>
    )
}