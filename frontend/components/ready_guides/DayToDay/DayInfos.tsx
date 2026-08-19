interface DayInfosProps{
    hour: string
    title: string
    description: string
    tip?: string
}

export default function DayInfos({hour, title, description, tip}: DayInfosProps){
    return(
        <div className="mt-5">
            <div className="flex gap-10">
                <p className="text-primary-color">{hour}</p>
                <div>
                    <h1 className="text-primary-color font-medium mb-2">{title}</h1>
                    <p className="text-second-color font-light">{description}</p>
                    {tip && <p className="inline-block mt-2 border border-purple-300 py-1 px-2 rounded-2xl text-second-color"><span className="text-purple-500">Dica: </span> {tip}</p>}
                </div>
            </div>
            <hr className="my-2 border-gray-300" />
        </div>
    )
}