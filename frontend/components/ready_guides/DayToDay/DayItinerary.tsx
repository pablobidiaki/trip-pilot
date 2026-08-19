import texts from "@/constants/texts";
import Image from "next/image";
import DayInfos from "./DayInfos";

export default function DayItinerary(){
    const days = [
        {hour:"08:00", title: "Chegada a roma", description: "Check-in no hotel e tempo para descansar apos a viagem", tip: "Aproveire para uma caminhada leva nas redondezas"},
        {hour:"10:00", title: "Fontana di trevi", description: "Visite a famosa fonte e nao esqueca de jogar uma moeda para garantir seu retorno a italia !", tip: "Aproveire para uma caminhada leva nas redondezas"},
        {hour:"12:00", title: "Almoco em trattorial tradicional", description: "Check-in no hotel e tempo para descansar apos a viagem", tip: "carbonara ou cacio e pepe"},
        {hour:"14:00", title: "Piazza navona", description: "Check-in no hotel e tempo para descansar apos a viagem"},
        {hour:"16:00", title: "Panteao", description: "Check-in no hotel e tempo para descansar apos a viagem"},
        {hour:"18:30", title: "Por do sol no janiculo", description: "Check-in no hotel e tempo para descansar apos a viagem"},
        {hour:"20:00", title: "Jantar e noite livre", description: "Check-in no hotel e tempo para descansar apos a viagem"},
    ]
    return(
        <div className="mt-3 mx-20 max-w-5/12 bg-white p-5 rounded-2xl">
            <p className="text-white bg-purple-500 inline-block py-1 px-4 rounded-2xl">Dia 1</p>
            <p className="my-5 text-primary-color text-3xl font-medium">Roma</p>
            <p className="text-second-color">Quarta-feira, 10 de Junho</p>
            <p className="text-second-color mt-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro, ratione tenetur quod maiores, reiciendis dolore in repudiandae nobis error autem debitis. Quidem, veritatis corporis tenetur doloribus provident eos asperiores?</p>
            <Image src="/imgs/ready_guides/italy.jpg"
                   alt='italy image'
                   width={1150}
                   height={1150} 
                   className="rounded-2xl w-full"                   
            />
            <p className="text-primary-color mt-5 font-medium text-xl">{texts.ready_guides.your_day_with_details}</p>
            {days.map(day => (
                <DayInfos key={day.title}
                          hour={day.hour}
                          title={day.title}
                          description={day.description}
                          tip={day.tip}
                />
            ))}
        </div>
    )
}