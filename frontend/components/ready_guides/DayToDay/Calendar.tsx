interface CalendarProps{
    day: string,
    date: string
    local: string
    selected: boolean
    onClick: () => void
}

export default function Calendar({day, date, local, selected, onClick}: CalendarProps){
    return(
        <div onClick={onClick}
             className={`cursor-pointer flex items-center mt-3 gap-5 p-3 rounded-2xl border border-gray-20 min-w-45 ${selected
                    ? "bg-[#787af748]"
                    : "bg-white"
                    }`}
        >
            <div className={`px-4 py-2 rounded-full text-center ${selected ? "bg-[#6366F1]" : "bg-gray-200"}`}>
                <p className={` ${selected ? "text-white" : "text-primary-color"}`}>{day}</p>
            </div>
            <div>
                <p className="text-primary-color">{local}</p>
                <p className="text-second-color">{date}</p>
            </div>
        </div>
    )
}