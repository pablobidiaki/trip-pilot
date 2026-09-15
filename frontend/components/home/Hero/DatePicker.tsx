"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import texts from "@/constants/texts"

interface DatePickerProps {
    icon: ReactNode
    title: string
    value: string
    onChange: (date: string) => void
}

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

export default function DatePicker({ icon, title, value, onChange }: DatePickerProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    const initialDate = value ? new Date(`${value}T00:00:00`) : new Date()

    const [open, setOpen] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth())
    const [currentYear, setCurrentYear] = useState(initialDate.getFullYear())


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [])

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    const previousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    const formatDate = (day: number) => {
        const month = String(currentMonth + 1).padStart(2, "0")
        const formattedDay = String(day).padStart(2, "0")

        return `${currentYear}-${month}-${formattedDay}`
    }

    const displayDate = value ? value.split("-").reverse().join("/") : ""

    const selectDate = (day: number) => {
        const formattedDate = formatDate(day)

        onChange(formattedDate)
        setOpen(false)
    }

    const goToToday = () => {
        const today = new Date()
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, "0")
        const day = String(today.getDate()).padStart(2, "0")

        onChange(`${year}-${month}-${day}`)

        setCurrentYear(year)
        setCurrentMonth(today.getMonth())
        setOpen(false)
    }

    const clearDate = () => {
        onChange("")
        setOpen(false)
    }

    const isSelected = (day: number) => {
        return value === formatDate(day)
    }

    const isToday = (day: number) => {
        const today = new Date()

        return (
            today.getFullYear() === currentYear &&
            today.getMonth() === currentMonth &&
            today.getDate() === day
        )

    }
    return (
        <div ref={containerRef} className="inline-block relative cursor-pointer" >
            <div onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-2xl border-2 border-gray-300 p-1">
                <span className="m-2 text-main-primary-color">
                    {icon}
                </span>
                <div className="flex flex-col pr-3">
                    <p>{title}</p>
                    <span className={value ? "text-second-color" : "text-gray-400"}>
                        {displayDate || texts.form.whenPlaceholder}
                    </span>
                </div>
            </div>

            {open && (
                <div className=" absolute left-0 bottom-full z-50 mt-2 w-[320px] rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl animate-[optionSelector_200ms_ease-out]">
                    <div className="mb-5 flex items-center justify-between">
                        <button type="button" onClick={previousMonth} className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-main-primary-color">
                            <ChevronLeft size={20} />
                        </button>

                        <span className="font-semibold capitalize text-second-color">
                            {months[currentMonth]} de {currentYear}
                        </span>

                        <button type="button" onClick={nextMonth} className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-main-primary-color">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="mb-2 grid grid-cols-7">
                        {weekDays.map((day, index) => (
                            <span key={index} className="flex h-8 items-center justify-center text-xs font-medium text-gray-400">
                                {day}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-y-1">
                        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                            <div key={`empty-${index}`} />
                        ))}

                        {Array.from({ length: daysInMonth }).map((_, index) => {
                            const day = index + 1
                            return (
                                <button key={day} type="button" onClick={() => selectDate(day)} className={`relative mx-auto flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-all ${isSelected(day) ? "bg-main-primary-color font-semibold text-white" : "text-second-color hover:bg-blue-50 hover:text-main-primary-color"}`}>
                                    {day}
                                    {isToday(day) && !isSelected(day) && (
                                        <span className="absolute bottom-1 h-1 w-1 rounded-full bg-main-primary-color" />
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                        <button type="button" onClick={clearDate} className="rounded-lg px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-second-color ">
                            {texts.clear}
                        </button>

                        <button type="button" onClick={goToToday} className="rounded-lg px-3 py-2 text-sm font-medium text-main-primary-color transition hover:bg-blue-50 ">
                            {texts.today}
                        </button>
                    </div>

                </div>
            )}
        </div>
    )
}