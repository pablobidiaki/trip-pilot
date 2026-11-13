"use client"

import texts from "@/constants/texts";
import { UserInterface } from "@/interfaces/user.interface";
import Map from "@/components/ui/Map/Map";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserIdByEmail } from "@/services/user.service";
import Header from "@/components/ui/Header/Header";
import { UserInfoCard } from "@/components/visitingProfile/UserInfoCard";
import Footer from "@/components/ui/Footer/Footer";
import { getCities } from "@/services/map.service";

export default function MyMap() {
    const { data: session, status } = useSession();
    const [user, setUser] = useState<UserInterface>()
    const [visitedCountries, setVisitedCountries] = useState<string[]>([])
    const [countriesWishlist, setCountriesWishlist] = useState<string[]>([])
    const [cities, setCities] = useState([])
    const [updateMemory, setUpdateMemory] = useState<boolean>(false)

    const normalizeCountryCode = (code: string | number) => String(code).padStart(3, "0")

    useEffect(() => {
        if (status !== "authenticated") return;

        const getData = async () => {
            const user = await getUserIdByEmail(session?.accessToken!, session?.user?.email)
            setUser(user)
        }

        getData()

    }, [session, status])

    useEffect(() => {
        if (!user) return

        const getInfos = async () => {
            const countries = user.countriesMemories ?? [];
            const _cities = await getCities(user.id)
            
            setVisitedCountries(countries.filter(country => country.isVisitedCountry).map(country => normalizeCountryCode(country.countryCode)));
            setCountriesWishlist(countries.filter(country => country.isWishListCountry).map(country => normalizeCountryCode(country.countryCode)));
            setCities(_cities)
        }

        getInfos()
    }, [user?.id, user?.countriesMemories, updateMemory]);

    return (
        <div className="w-full mx-auto rounded-xl animate-[optionSelector_300ms_ease-out]">
            <Header backgroundLight={true} />
            <h1 className="text-xl mt-2 sm:text-3xl font-medium text-primary-color text-center">{texts.profile.myMap}</h1>
            <p className="text-secondary-color text-xs sm:text-sm font-light mb-3 sm:mb-4 text-center">{texts.profile.myMapText}</p>

            <div className="flex gap-15 justify-center items-center mb-2">
                <UserInfoCard title={"Países Visitados"} value={`${visitedCountries.length} / 195`} />
                <UserInfoCard title={"Países Desejados"} value={countriesWishlist.length} />
                <UserInfoCard title={"Destinos Visitados"} value={cities?.length} />
            </div>
            
            <Map user={user!} tailwindTags="w-[80vw] mx-auto" guestMode={false} setUpdateMemory={setUpdateMemory} updateMemory={updateMemory}/>

            <h1 className="text-xl mt-15 mb-5 sm:text-3xl font-medium text-primary-color text-center">Próximos destinos</h1>
            <div className="grid grid-cols-3 gap-4 pb-10 mx-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="relative">
                        <img className="absolute z-10 top-2 right-2 w-8" src="https://flags.restcountries.com/v5/w640/cl.png" />

                        <img className="w-full rounded-lg brightness-50" src="https://i.imgur.com/PGMygyK.jpeg" />

                        <div className="absolute inset-0 flex items-end justify-between p-2">
                            <p className="text-3xl text-white"> Chile </p>
                            <button className="p-2 bg-background-color rounded-2xl">Criar roteiro</button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}