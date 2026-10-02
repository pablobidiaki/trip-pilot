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
             className={`cursor-pointer flex items-center
                ${selected ? "xl:bg-[#787af748]" : "xl:bg-white"}
                xl:min-w-48 xl:p-3 xl:rounded-2xl xl:border xl:border-gray-100 xl:gap-2 xl:mb-2
             `}
        >
            <div className={`px-4 py-2 rounded-full text-center ${selected ? "bg-[#6366F1]" : "bg-gray-200"} mb-2
                xl:mb-0
            `}>
                <p className={` ${selected ? "text-white" : "text-primary-color"}`}>{day}</p>
            </div>
            <div className="hidden
                xl:block
            ">
                <p className="text-primary-color">{local}</p>
                <p className="text-second-color ">{date}</p>
            </div>
        </div>
    )
}