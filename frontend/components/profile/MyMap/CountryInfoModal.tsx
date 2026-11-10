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
    guestMode: boolean
    onClose: () => void
    setVisitConfirmed: (value: boolean) => void
    setWishListConfirmed: (value: boolean) => void
    setImageLoading: (value: boolean) => void
}

export default function CountryInfoModal({ visited, wishlist, user, geo, isOpen, imageLoading, guestMode, onClose, setVisitConfirmed, setWishListConfirmed, setImageLoading }: CountryInfoModalProps) {
    const [flagUrl, setFlagUrl] = useState("")
    const [isCountryVisited, setIsCountryVisited] = useState(visited);
    const [isCountryWishlist, setIsCountryWishlist] = useState(wishlist);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        setIsCountryVisited(visited);
        setIsCountryWishlist(wishlist);
    }, [visited, wishlist, geo?.id, isOpen]);

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

    const handleAddButton = async () => {
        try {
            setIsUpdating(true)

            await addCountryVisited(user.id, geo.id)

            setIsCountryVisited(true)
            setVisitConfirmed(true)

            toast.success(`Você marcou '${geo.properties.name}' como visitado!`)
        } catch (error) {
            toast.error("Não foi possível atualizar seu mapa.")
        } finally {
            setIsUpdating(false)
        }
    }

    const handleRemoveButton = async () => {
        try {
            setIsUpdating(true)

            await removeCountryVisited(user.id, geo.id)

            setIsCountryVisited(false)
            setVisitConfirmed(false)

            toast.warning(`Você removeu '${geo.properties.name}' dos visitados!`)
        } catch (error) {
            toast.error("Não foi possível atualizar seu mapa.")
        } finally {
            setIsUpdating(false)
        }
    }

    const handleAddWishlist = async () => {
        try {
            setIsUpdating(true)

            await addCountryWishlist(user.id, geo.id)

            setWishListConfirmed(true)
            setIsCountryWishlist(true)

            toast.warning(`Você adicionou '${geo.properties.name}' na lista de desejos!`)
        } catch (error) {
            toast.error("Não foi possível atualizar seu mapa.")
        } finally {
            setIsUpdating(false)
        }
    }

    const handleRemoveWishlist = async () => {
        try {
            setIsUpdating(false)

            await removeCountryWishlist(user.id, geo.id)

            setWishListConfirmed(false)
            setIsCountryWishlist(false)

            toast.warning(`Você removeu '${geo.properties.name}' da lista de desejos!`)
        } catch (error) {
            toast.error("Não foi possível atualizar seu mapa.")
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <div className="absolute z-50 w-fit top-2 h-fit flex justify-end right-2 animate-[optionSelector_300ms_ease-out]">
            <div onClick={(e) => e.stopPropagation()} className="relative w-40 rounded-xl bg-background-color
                lg:w-80
            ">
                <div className="flex justify-between items-center p-2">
                    <h1 className=" font-medium text-primary-color">{geo.properties.name}</h1>
                    <X onClick={handdleClose} className="cursor-pointer transition-all hover:duration-150 hover:text-red-500" />
                </div>
                {imageLoading &&
                    <div className="absolute w-46 mx-2 h-20 z-100 bg-white
                        lg:w-76 lg:h-45
                    ">
                        <Loading />
                    </div>
                }
                <img className="w-36 shadow-2xl h-20 shadow-gray-300 mx-2 mb-1
                    lg:w-76 lg:h-45 lg:mb-5
                    2xl:mb-0 
                " src={flagUrl} onLoad={() => setImageLoading(false)} />

                {!guestMode &&
                    <div>
                        {isCountryVisited ?
                            <div>
                                <p className="text-center text-primary-color text-md mb-2 mt-1 font-medium">Resumo da sua experiência</p>
                                <p className="text-secondary-color text-sm text-center italic font-light line-clamp-1">Visitado em dezembro de 2025</p>
                                <p className="text-secondary-color text-sm text-center italic font-light line-clamp-1">3 Cidades conhecidas</p>
                                <p className="text-secondary-color text-sm text-center italic font-light line-clamp-1">Curitiba, Balneario Camburiu e Penha </p>

                                <ModalButton onClick={() => handleRemoveButton()} text={isUpdating ? "Atualizando..." : texts.profile.markNoVisited} tailwindTags="bg-red-500 text-white text-xs mt-1  lg:mt-2 lg:max-w-76 lg:text-sm" />
                                <ModalButton text={texts.profile.createMemory} tailwindTags="bg-gray-500 text-white text-xs mt-1 lg:mt-2 lg:max-w-76 lg:text-sm" />

                            </div>
                            :
                            <div>
                                <ModalButton onClick={() => handleAddButton()} text={texts.profile.markVisited} tailwindTags="bg-blue-color text-white text-xs mt-1 max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                                {isCountryWishlist ?
                                    <ModalButton onClick={() => handleRemoveWishlist()} text={texts.profile.markNoWishlist} tailwindTags="bg-red-500 text-white text-xs max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                                    :
                                    <ModalButton onClick={() => handleAddWishlist()} text={texts.profile.markWishlist} tailwindTags="bg-orange-400 text-white text-xs max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                                }
                            </div>
                        }

                        <Link href={"/"}>
                            <ModalButton text={texts.profile.createScript} tailwindTags="bg-gray-200 text-black mt-1 text-xs max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
