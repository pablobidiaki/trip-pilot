import texts from "@/constants/texts";
import { UserInterface } from "@/interfaces/user.interface";
import Map from "@/components/ui/Map/Map";

interface MyMapProps {
    user: UserInterface
}

export default function MyMap({ user }: MyMapProps) {
    return (
        <div className="w-full mx-auto p-2 sm:p-4 rounded-xl animate-[optionSelector_300ms_ease-out]">
            <h1 className="text-xl sm:text-2xl font-medium text-primary-color">{texts.profile.myMap}</h1>
            <p className="text-secondary-color text-xs sm:text-sm font-light mb-3 sm:mb-4">{texts.profile.myMapText}</p>

            <Map user={user} tailwindTags="w-full" guestMode={false}/>
        </div>
    )
}