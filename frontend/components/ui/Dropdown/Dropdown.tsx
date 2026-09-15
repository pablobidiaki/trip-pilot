"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

interface DropdownProps {
    icon: ReactNode
    title: string
    options: string[]
    value: string
    onChange: (value: string) => void
}

export default function Dropdown({
    icon,
    title,
    options,
    value,
    onChange
}: DropdownProps) {

    const [open, setOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [])

    const handleSelect = (option: string) => {
        onChange(option)
        setOpen(false)
    }

    return (
        <div ref={dropdownRef} className="relative">
            <div onClick={() => setOpen(!open)}
                className="flex cursor-pointer items-center rounded-2xl border-2 border-gray-300 p-1 transition-all duration-200 hover:border-blue-300">
                <span className="m-2 text-main-primary-color">
                    {icon}
                </span>

                <div className="w-full">
                    <p>{title}</p>
                    <div className="flex w-full items-center justify-between text-second-color">
                        <span>{value}</span>
                        <ChevronDown size={18} className={`mr-1 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}/>
                    </div>
                </div>
            </div>
            {open && (

                <div className="absolute left-0 bottom-full z-50 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-xl animate-[optionSelector_200ms_ease-out]">
                    {options.map((option, index) => (
                        <button key={index}
                            type="button"
                            onClick={() => handleSelect(option)}
                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-second-color transition-all duration-150 hover:bg-blue-50 hover:text-main-primary-color">
                            <span>
                                {option}
                            </span>

                            {value === option && (
                                <Check size={17} className="text-main-primary-color"/>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}