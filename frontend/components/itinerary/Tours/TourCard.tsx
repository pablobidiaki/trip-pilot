import texts from "@/constants/texts";

interface TourCardProps{
    image: string,
    title: string,
    description: string,
    price: number
}

export default function TourCard({image, title, description, price}: TourCardProps){
    return(
        <div className="flex gap-4 p-2 items-center">
            <img src={image}
                   alt="Tour tip image"
                   className="w-30 h-28 rounded-2xl"
            />
            <div>
                <h1 className="text-primary-color font-medium text-xl">{title}</h1>
                <p className="text-second-color text-sm max-w-56">{description}</p>
                {price == 0 ? <p className="text-green-500 font-medium mt-2">{texts.free}</p> : <p className="text-green-500 font-medium mt-2">{texts.real} {price} {texts.per_person}</p>}
            </div>
        </div>
    )
}