interface GeneralInfoCardProps{
    image: string
    days: string
    title: string
    description: string
}

export default function GeneralInfoCard({image, days, title, description}: GeneralInfoCardProps){
    return(
        <div className="border border-gray-200 rounded-2xl h-full">
            <img src={image}
                   alt={`${title} image`} 
                   width={50}
                   height={50}
                   className="w-full rounded-t-2xl"
            />
            <p className="px-2 text-sm text-second-color mt-1">{days}</p>
            <p className="px-2 text-3xl text-primary-color font-medium">{title}</p>
            <p className="px-2 text-lg font-light text-second-color">{description}</p>
        </div>
    )
}