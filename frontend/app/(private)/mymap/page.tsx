"use client"

import texts from "@/constants/texts";
import { UserInterface } from "@/interfaces/user.interface";
import Map from "@/components/ui/Map/Map";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserIdByEmail } from "@/services/user.service";

export default function MyMap() {
    const { data: session, status } = useSession();
    const [user, setUser] = useState<UserInterface>()

    useEffect(() => {
        if (status !== "authenticated") return;

        const getData = async () => {
            const user = await getUserIdByEmail(session?.accessToken!, session?.user?.email)
            setUser(user)
        }

        getData()

    }, [session, status])
    return (
        <div className="w-full mx-auto p-2 sm:p-4 rounded-xl animate-[optionSelector_300ms_ease-out]">
            <h1 className="text-xl sm:text-2xl font-medium text-primary-color">{texts.profile.myMap}</h1>
            <p className="text-secondary-color text-xs sm:text-sm font-light mb-3 sm:mb-4">{texts.profile.myMapText}</p>

            <Map user={user!} tailwindTags="w-full" guestMode={false}/>
        </div>
    )
}