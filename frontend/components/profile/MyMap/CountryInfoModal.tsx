"use client"

import Loading from "@/components/loading/Loading/Loading"
import GradientButton from "@/components/ui/Buttons/GradientButton"
import { UserInterface } from "@/interfaces/user.interface"
import { addCountryVisited, getCountryFlag } from "@/services/map.service"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface CountryInfoModalProps {
    user: UserInterface
    geo: any
    visitedCountries: string[]
    isOpen: boolean
    onClose: () => void
    setVisiteConfirmed : (value: boolean) => void
}

export default function CountryInfoModal({ user, geo, visitedCountries, isOpen, onClose, setVisiteConfirmed }: CountryInfoModalProps) {
    const [flagUrl, setFlagUrl] = useState("")
    const [imageLoading, setImageLoading] = useState(true)

    useEffect(() => {
        const getFlag = async () => {
            const data = await getCountryFlag(geo.id)
            setFlagUrl(data.flag)
        }
        getFlag()

        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen, geo])

    if (!isOpen) return null

    const handleButton = () => {
        addCountryVisited(user.id, geo.id)
        onClose()
        setVisiteConfirmed(true)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose} >
            <div className="relative w-100 rounded-xl bg-white" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-2">
                    <h1 className="text-2xl font-medium text-primary-color">{geo.properties.name}</h1>
                    <X onClick={onClose} className="cursor-pointer transition-all hover:duration-150 hover:text-red-500"/>
                </div>
                {imageLoading &&
                    <div>
                        <Loading />
                    </div>
                }
                <img className="w-20 shadow-2xl shadow-gray-500 mx-auto" src={flagUrl} onLoad={() => setImageLoading(false)} />
                <div className="mx-4 my-2" onClick={() => handleButton()}>
                    <GradientButton  text="Marcar como visitado" type="button"/>
                </div>
            </div>
        </div>
    )
}
