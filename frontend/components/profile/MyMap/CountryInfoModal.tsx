"use client"

import Loading from "@/components/loading/Loading/Loading"
import { UserInterface } from "@/interfaces/user.interface"
import { addCountryVisited, getCountryFlag, removeCountryVisited } from "@/services/map.service"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import ModalButton from "./ModalButton"
import texts from "@/constants/texts"
import Link from "next/link"
import { toast } from "sonner"

interface CountryInfoModalProps {
    visited: boolean
    user: UserInterface
    geo: any
    isOpen: boolean
    imageLoading: boolean
    onClose: () => void
    setVisiteConfirmed: (value: boolean) => void
    setImageLoading: (value: boolean) => void
}

export default function CountryInfoModal({ visited, user, geo, isOpen, imageLoading, onClose, setVisiteConfirmed, setImageLoading }: CountryInfoModalProps) {
    const [flagUrl, setFlagUrl] = useState("")

    useEffect(() => {
        const getFlag = async () => {
            const data = await getCountryFlag(geo.id)
            setFlagUrl(data.flag)
        }
        getFlag()


    }, [isOpen, geo])

    if (!isOpen) return null

    const handleAddButton = () => {
        addCountryVisited(user.id, geo.id)
        onClose()
        setVisiteConfirmed(true)
        toast.success(`Você marcou '${geo.properties.name}' como visitado!`)
    }

    const handleRemoveButton = () => {
        removeCountryVisited(user.id, geo.id)
        onClose()
        setVisiteConfirmed(true)
        toast.warning(`Você removeu '${geo.properties.name}' de visitado!`)
    }

    return (
        <div className="fixed inset-0 z-50 w-fit top-22 h-fit flex justify-end left-369 animate-[optionSelector_300ms_ease-out]">
            <div className="relative w-60 rounded-xl bg-background-color" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-2">
                    <h1 className=" font-medium text-primary-color">{geo.properties.name}</h1>
                    <X onClick={onClose} className="cursor-pointer transition-all hover:duration-150 hover:text-red-500" />
                </div>
                {imageLoading &&
                    <div className="absolute w-56 mx-2 h-38 z-100 bg-white">
                        <Loading />
                    </div>
                }
                <img className="w-56 shadow-2xl h-38 shadow-gray-300 mx-2" src={flagUrl} onLoad={() => setImageLoading(false)} />
                <div>
                    {visited ?
                        <div onClick={() => handleRemoveButton()}>
                            <ModalButton text={texts.profile.markNoVisited} tailwindTags="bg-red-500 text-white mt-5"/>
                        </div>
                        :
                        <div onClick={() => handleAddButton()}>
                            <ModalButton text={texts.profile.markVisited} tailwindTags="bg-blue-color text-white mt-5"/>
                        </div>
                    }
                    <Link href={"/"}>
                        <ModalButton text={texts.profile.createScript} tailwindTags="bg-gray-200 text-black mt-2"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
