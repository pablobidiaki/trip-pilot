import texts from "@/constants/texts"

interface FlightsTimeLineProps {
    index: number
    boardingPoint: string
    disembarkationPoint: string
    flyTime: string
}

export default function FlightsTimeLine({ index, boardingPoint, disembarkationPoint, flyTime }: FlightsTimeLineProps) {
    return (
        <div className="px-5">
            <p className="text-center text-primary-color font-medium text-lg mt-2 mb-2">{index}{texts.how_to_get_there.fly}</p>
            <div className="relative flex flex-col gap-6">
                <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-300" />
                <div className="relative flex items-start gap-4">
                    <div className="z-10 mt-1 h-4 w-4 rounded-full border-4 border-white bg-primary-color shadow" />
                    <div>
                        <p className="text-primary-color font-medium">{boardingPoint}</p>
                        <p className="text-sm text-second-color">{flyTime}</p>
                        <span className="text-xs text-second-color">{texts.flights.boarding}</span>
                    </div>
                </div>
                <div className="relative flex items-start gap-4 ">
                    <div className="z-10 mt-1 h-4 w-4 rounded-full border-4 border-white bg-primary-color shadow" />
                    <div>
                        <p className="text-primary-color font-medium">{disembarkationPoint}</p>
                        <p className="text-sm text-second-color">{flyTime}</p>
                        <span className="text-xs text-second-color">{texts.flights.disembarkation}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}