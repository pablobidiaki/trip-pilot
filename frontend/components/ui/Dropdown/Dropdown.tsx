import { ReactNode } from "react"

interface DropdownProps{
    icon: ReactNode,
    title: string,
    options: string[],
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Dropdown({icon, title, options, value, onChange}: DropdownProps){
    return(
        <div className="border-2 rounded-2xl border-gray-300 flex items-center p-1">
            <span className="text-main-primary-color m-2">{icon}</span>
            <div className="w-full">
                <p className="ml-1">{title}</p>
                <select value={value} onChange={onChange} className="text-second-color w-full border-0 outline-none focus:border-0 focus:outline-none">
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}