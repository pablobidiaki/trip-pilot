interface DaySelectorProps{
    index: number
    day: string
    selected: number
    onClick: () => void
}

export default function DaySelector({index, day, selected, onClick}: DaySelectorProps){
    return(
        <div onClick={onClick} className={`cursor-pointer  rounded-2xl ${index === selected ? 'bg-blue-400 text-white'  : 'bg-gray-200 text-primary-color'} transition-all hover:duration-200 hover:text-white hover:bg-blue-200 `}>
            <p className={`p-2  `}>{day.split('(')[0]}</p>
        </div>
    )
}