interface DayInfosProps {
    hour: string
    title: string
    description: string
    tip?: string
}

export default function DayInfos({ hour, title, description, tip }: DayInfosProps) {
    return (
        <div className="mt-5">
            <div className="flex flex-col 
                xl:flex-row xl:gap-10
            ">
                <p className="text-primary-color
                    xl:mt-0.5
                ">{hour}</p>
                <div>
                    <h1 className="text-primary-color font-medium mb-2
                        xl:text-xl
                    ">{title}</h1>
                    <p className="text-second-color font-light text-xs
                        xl:text-lg
                    ">{description}</p>
                    {tip &&
                        <p className="inline-block mt-2 border border-purple-300 py-1 px-2 rounded-lg text-second-color text-xs
                            xl:text-lg
                        ">
                            <span className="text-purple-500">Dica: </span> {tip}
                        </p>
                    }
                </div>
            </div>
            <hr className="my-2 border-gray-100" />
        </div>
    )
}