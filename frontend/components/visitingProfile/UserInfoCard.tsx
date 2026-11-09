interface UserInfoCardProps {
    title: string
    value: number   
}

export function UserInfoCard({title, value}: UserInfoCardProps){
    return(
        <div className="flex flex-col items-center">
            <p className="text-2xl text-primary-color">{value}</p>
            <p className="text-secondary-color font-light text-center">{title}</p>
        </div>
    )
}