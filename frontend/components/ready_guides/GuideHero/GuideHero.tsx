import InfoItem from "@/components/ui/InfoItem/InfoItem";
import { Calendar, CircleDollarSign, Clock, Heart, Landmark, Languages } from "lucide-react";
import GuideInfoCard from "../GuideInfoCard/GuideInfoCard";
import GradientButton from "@/components/ui/Buttons/GradientButton";
import { ReadyGuideInterface } from "@/interfaces/readyGuides.interface";
import texts from "@/constants/texts";
import FavoriteButton from "@/components/destination/DestinationBanner/FavoriteButton";
import { getUserIdByEmail } from "@/services/user.service";
import { auth } from "@/auth"

interface GuideHeroProps {
    guide: ReadyGuideInterface
}

export default async function GuideHero({ guide }: GuideHeroProps) {
    let user
    const session = await auth()
    if (session) user = await getUserIdByEmail(session?.accessToken!, session?.user?.email)

    return (
        <div className="flex flex-col justify-center bg-white
            lg:mt-10 lg:pb-5 lg:gap-2 lg:flex-row lg:ml-2
        ">
            <div className="relative w-full lg:w-[60%] 2xl:w-fit">
                <img src={guide.imageURL}
                    alt="Main image"
                    className="w-full max-h-90 mb-1 relative
                    lg:mb-0 lg:rounded-2xl lg:h-full
                    
                "/>

                <div className="absolute top-3 right-3 z-100">
                    <FavoriteButton userId={user?.id} readyGuideId={guide.id} />
                </div>
            </div>

            <div className="flex flex-col
                2xl:max-w-[45%]
            ">
                {/* <div className="flex items-center gap-2">
                    <Heart className="text-red-500 fill-red-500" />
                    <p className="text-sm text-secondary-color">3.1k de pessoas salvaram esse roteiro.</p>
                </div> */}

                <h1 className="text-2xl font-medium mx-2
                    
                ">
                    {guide.title}
                </h1>
                <div className="flex gap-2 mx-2">
                    {guide.cities.map((city, index) => (
                        <h2 key={index} className="text-primary-color">{city} </h2>
                    ))}
                </div>
                <p className="text-xs text-secondary-color my-2 mx-2
                    lg:text-sm
                ">
                    {guide.description}
                </p>

                <div className="flex gap-5 mb-2 mx-2">
                    <InfoItem icon={<Clock />} text={`${guide.days.toString()} dias`} />
                    <InfoItem icon={<Landmark />} text={guide.travelType} />
                </div>

                <div className="grid grid-cols-1 gap-2 mx-2
                    md:flex md:justify-between
                ">
                    <GuideInfoCard icon={<Calendar />} title={texts.readyGuides.bestTime} text={guide.bestTime} />
                    <GuideInfoCard icon={<Languages />} title={texts.readyGuides.language} text={guide.language} />
                    <GuideInfoCard icon={<CircleDollarSign />} title={texts.readyGuides.currency} text={guide.currenty} />
                </div>
            </div>
        </div>
    )
}