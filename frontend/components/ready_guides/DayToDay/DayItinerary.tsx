import texts from "@/constants/texts";
import DayInfos from "./DayInfos";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";

interface DayItineraryProps {
    guide: ReadyGuideInterface[],
    daySelected: string
}

export default function DayItineraryProps({ guide, daySelected }: DayItineraryProps) {
    return (
        guide[0].itinerary.map((resumeDay, index) => (
            resumeDay.day.toString() == daySelected &&
            <div key={index} className="bg-white p-2 rounded-2xl
                xl:mx-2 xl:w-full
            ">
                <p className="text-white bg-purple-500 inline-block py-1 px-4 rounded-2xl">{`Dia ${resumeDay.day}`}</p>
                <p className="mt-5 text-primary-color text-xl font-medium
                    xl:text-3xl xl:my-5
                ">
                    {resumeDay.city}
                </p>
                <p className="text-second-color text-xs
                    xl:text-lg
                ">
                    {resumeDay.fullDate}
                </p>
                <p className="text-second-color mt-2 mb-5  text-sm
                    xl:text-lg
                ">
                    {resumeDay.description}
                </p>

                <img src={resumeDay.imageURL}
                    alt='City image'
                    width={1150}
                    height={1150}
                    className="rounded-xl w-full"
                />

                <p className="text-primary-color mt-5 font-medium text-xl">{texts.readyGuides.yourDayWithDetails}</p>

                {resumeDay.hours.map((hour, index) => (
                    <DayInfos key={index}
                        hour={hour.hour}
                        title={hour.title}
                        description={hour.description}
                        tip={hour.tip}
                    />
                ))}
            </div>
        ))
    )
}