interface GeneralInfoCardProps{
    image: string
    days: string
    title: string
    description: string
}

export default function GeneralInfoCard({image, days, title, description}: GeneralInfoCardProps){
    return(
        <div className="border border-gray-100 rounded-xl mb-4 mx-2">
            <img src={image}
                   alt={`${title} image`} 
                   width={50}
                   height={50}
                   className="w-full h-[50%] rounded-t-xl"
            />
            <p className="px-2 text-sm text-second-color mt-1">{days}</p>
            <p className="px-2 text-3xl text-primary-color font-medium">{title}</p>
            <p className="px-2 text-xs pb-2 font-light text-second-color
                lg:text-lg
            ">{description}</p>
        </div>
    )
}