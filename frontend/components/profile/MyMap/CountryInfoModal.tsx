"use client"

import Loading from "@/components/loading/Loading/Loading"
import { UserInterface } from "@/interfaces/user.interface"
import { addCountryVisited, addCountryWishlist, getCountryFlag, removeCountryVisited, removeCountryWishlist } from "@/services/map.service"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import ModalButton from "./ModalButton"
import texts from "@/constants/texts"
import Link from "next/link"
import { toast } from "sonner"

interface CountryInfoModalProps {
    visited: boolean
    wishlist: boolean
    user: UserInterface
    geo: any
    isOpen: boolean
    imageLoading: boolean
    onClose: () => void
    setVisiteConfirmed: (value: boolean) => void
    setWishListConfirmed: (value: boolean) => void
    setImageLoading: (value: boolean) => void
}

export default function CountryInfoModal({ visited, wishlist, user, geo, isOpen, imageLoading, onClose, setVisiteConfirmed, setWishListConfirmed, setImageLoading }: CountryInfoModalProps) {
    const [flagUrl, setFlagUrl] = useState("")

    useEffect(() => {
        const getFlag = async () => {
            const data = await getCountryFlag(geo.id)
            setFlagUrl(data.flag)
        }
        getFlag()


    }, [isOpen, geo])

    if (!isOpen) return null

    const handdleClose = () => {
        onClose()
    }

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

    const handleAddWishlist = () =>{
        addCountryWishlist(user.id, geo.id)
        onClose()
        setWishListConfirmed(true)
        toast.success(`Você adicionou '${geo.properties.name}' na lista de desejos!`)
    }

    const handleRemoveWishlist = () =>{
        removeCountryWishlist(user.id, geo.id)
        onClose()
        setWishListConfirmed(true)
        toast.warning(`Você removeu '${geo.properties.name}' da lista de desejos!`)
    }

    return (
        <div className="absolute z-50 w-fit top-2 h-fit flex justify-end right-2 animate-[optionSelector_300ms_ease-out]">
            <div className="relative w-40 rounded-xl bg-background-color
                lg:w-60
            " onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-2">
                    <h1 className=" font-medium text-primary-color">{geo.properties.name}</h1>
                    <X onClick={handdleClose} className="cursor-pointer transition-all hover:duration-150 hover:text-red-500" />
                </div>
                {imageLoading &&
                    <div className="absolute w-46 mx-2 h-20 z-100 bg-white
                        lg:w-56 lg:h-38
                    ">
                        <Loading />
                    </div>
                }
                <img className="w-36 shadow-2xl h-20 shadow-gray-300 mx-2
                    lg:w-56 lg:h-38
                " src={flagUrl} onLoad={() => setImageLoading(false)} />
                <div>
                    {visited ?
                        <div onClick={() => handleRemoveButton()}>
                            <ModalButton text={texts.profile.markNoVisited} tailwindTags="bg-red-500 text-white text-xs mt-1 max-w-[146px] lg:mt-5 lg:max-w-56 lg:text-sm"/>
                        </div>
                        :
                        <div onClick={() => handleAddButton()}>
                            <ModalButton text={texts.profile.markVisited} tailwindTags="bg-blue-color text-white text-xs mt-1 max-w-[146px] lg:mt-5 lg:max-w-56 lg:text-sm"/>
                        </div>
                    }

                    {wishlist ?
                        <div onClick={() => handleRemoveWishlist()}>
                            <ModalButton text={texts.profile.markNoWishlist} tailwindTags="bg-red-500 text-white text-xs max-w-[146px] lg:mt-5 lg:max-w-56 lg:text-sm"/>
                        </div>
                        :
                        <div onClick={() => handleAddWishlist()}>
                            <ModalButton text={texts.profile.markWishlist} tailwindTags="bg-blue-color text-white text-xs max-w-[146px] lg:mt-5 lg:max-w-56 lg:text-sm"/>
                        </div>
                    }
                    
                    <Link href={"/"}>
                        <ModalButton text={texts.profile.createScript} tailwindTags="bg-gray-200 text-black mt-1 text-xs max-w-[146px] lg:mt-2 lg:max-w-56 lg:text-sm"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
