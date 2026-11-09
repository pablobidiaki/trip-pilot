"use client"

import { useEffect, useState } from "react";
import { UserInterface } from "@/interfaces/user.interface";
import { getByUsername } from "@/services/user.service";
import VisitingProfile from "@/components/visitingProfile/VisitingProfile";
import { ItineraryInterface } from "@/interfaces/itinerary.interface";
import { getUserItineraries } from "@/services/itinerary.service";

import { notFound } from 'next/navigation';
import { toast } from "sonner";

interface ProfilePageProps {
    params: Promise<{ username: string }>
}

export default function ProfilePage({ params }: ProfilePageProps) {
    const [user, setUser] = useState<UserInterface>()
    const [itineraries, setItineraries] = useState<ItineraryInterface[]>()


    useEffect(() => {
        const getData = async () => {
            try {
                const { username } = await params;
                const _user = await getByUsername(username)

                const _itineraries = await getUserItineraries(user?.id)

                setUser(_user.user)
                setItineraries(_itineraries)
            } catch (error) {
                console.error(error)
                toast.error("Erro ao tentar abrir página do usuário")
            }

        }
        getData()

    }, [user])

    if (user === null) notFound()


    return (
        <div>
            <VisitingProfile user={user!} itineraries={itineraries!} />
        </div>
    );
}