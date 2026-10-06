import { ReactNode } from "react";

interface InitialPageCardProps {
    icon: ReactNode
    title: string
    value: number
    bgColor: string
}

export default function InitialPageInfoCard({ icon, title, value, bgColor }: InitialPageCardProps) {
    return (
        <div className="rounded-2xl px-2 py-2 border border-gray-100 bg-gray-50
            lg:w-45 lg:px:5
        ">
            <div className="flex flex-col  items-center gap-2">
                <span className={`${bgColor} text-white p-2 rounded-full`}>{icon}</span>
                <p className=" text-center text-sm text-second-color">{title}</p>
                <p className="text-primary-color font-bold text-2xl text-center">{value}</p>
            </div>
        </div>
    )
}