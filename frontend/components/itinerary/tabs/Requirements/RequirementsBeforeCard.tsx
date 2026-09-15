import { ReactNode } from "react";

interface RequirementsBeforeCardProps {
    icon: ReactNode
    title: string
    text: string
}

export default function RequirementsBeforeCard({ icon, title, text }: RequirementsBeforeCardProps) {
    return (
        <div className="text-sm bg-gray-100 p-2 rounded-2xl">
            <p className="flex items-center w-fit mx-auto text-primary-color font-medium text-lg gap-2"><span>{icon}</span> {title}</p>
            <p className="text-second-color font-medium max-w-70 text-center">{text}</p>
        </div>
    )
}