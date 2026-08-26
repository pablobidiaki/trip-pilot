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
            <div key={index} className="mt-3 mx-20 max-w-5/12 bg-white p-5 rounded-2xl">
                <p className="text-white bg-purple-500 inline-block py-1 px-4 rounded-2xl">{`Dia ${resumeDay.day}`}</p>
                <p className="my-5 text-primary-color text-3xl font-medium">{resumeDay.city}</p>
                <p className="text-second-color">{resumeDay.fullDate}</p>
                <p className="text-second-color mt-2 mb-5">{resumeDay.description}</p>
                <img src={resumeDay.imageURL}
                    alt='City image'
                    width={1150}
                    height={1150}
                    className="rounded-2xl w-full"
                />
                <p className="text-primary-color mt-5 font-medium text-xl">{texts.ready_guides.your_day_with_details}</p>
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