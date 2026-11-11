"use client"

import Loading from "@/components/loading/Loading/Loading"
import { CountriesMemoriesInterface, UserInterface } from "@/interfaces/user.interface"
import { handleCountryVisited, addCountryWishlist, getCountryFlag, removeCountryWishlist } from "@/services/map.service"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import ModalButton from "./ModalButton"
import texts from "@/constants/texts"
import Link from "next/link"
import { toast } from "sonner"
import MemoryModal from "./MemoryModal"
import formatDate from "@/utils/formatDate"

interface CountryInfoModalProps {
    visited: boolean
    wishlist: boolean
    user: UserInterface
    geo: any
    isOpen: boolean
    imageLoading: boolean
    guestMode: boolean
    onClose: () => void
    onWishlistChange: (countryCode: string, isWishlist: boolean) => void
    onVisitedChange: (countryCode: string, isVisited: boolean) => void
    setImageLoading: (value: boolean) => void
}

export default function CountryInfoModal({ visited, wishlist, user, geo, isOpen, imageLoading, guestMode, onClose, onWishlistChange, onVisitedChange, setImageLoading }: CountryInfoModalProps) {
    const [flagUrl, setFlagUrl] = useState("")
    const [isCountryVisited, setIsCountryVisited] = useState(visited);
    const [isCountryWishlist, setIsCountryWishlist] = useState(wishlist);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false)
    const [userContryInfos, setUserContryInfos] = useState<CountriesMemoriesInterface>()

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

    const normalizeCountryCode = (code: string | number) => String(code).padStart(3, "0");

    const handleVisitedButton = async (isAdd: boolean) => {
        let text = isAdd ? "marcou" : "removeu"

        try {
            setIsUpdating(true)

            await handleCountryVisited(user.id, geo.properties.name, geo.id, isAdd)

            onVisitedChange(normalizeCountryCode(geo.id), isAdd);

            toast.success(`Você ${text} '${geo.properties.name}' como visitado!`)
        } catch (error) {
            toast.error("Não foi possível atualizar seu mapa.")
            console.log(error)
        } finally {
            setIsUpdating(false)
        }
    }

    const handleWishListButton = async (isAdd: boolean) => {
        let text = isAdd ? "marcou" : "removeu"

        try {
            setIsUpdating(true)

            await addCountryWishlist(user.id, geo.properties.name, geo.id, isAdd)

            onWishlistChange(normalizeCountryCode(geo.id), isAdd);

            toast.warning(`Você ${text} '${geo.properties.name}' na lista de desejos!`)
        } catch (error) {
            toast.error("Não foi possível atualizar seu mapa.")
        } finally {
            setIsUpdating(false)
        }
    }

    useEffect(() => {
        const getUserCountryByCode = (countryCode: string) => {
            for (let i = 0; i < user.countriesMemories.length; i++) if (user.countriesMemories[i].countryCode == countryCode) setUserContryInfos(user.countriesMemories[i])
        }

        getUserCountryByCode(geo.id)
    }, [geo])

    return (
        <div className="absolute z-50 w-fit top-2 h-fit flex justify-end right-2 animate-[optionSelector_300ms_ease-out]">
            <div onClick={(e) => e.stopPropagation()} className="relative w-40 rounded-xl bg-background-color
                lg:w-80
            ">
                <div className="flex justify-between items-center p-2">
                    <h1 className=" font-medium text-primary-color">{geo.properties.name}</h1>
                    <X onClick={() => onClose()} className="cursor-pointer transition-all hover:duration-150 hover:text-red-500" />
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
                                {userContryInfos?.cities || userContryInfos?.visitedAt !== "" &&
                                    <div>
                                        <p className="text-center text-primary-color text-md mb-2 mt-1 font-medium">Resumo da sua experiência</p>
                                        {userContryInfos?.visitedAt && <p className="text-secondary-color text-sm text-center italic font-light line-clamp-1">Visitado em <span>{formatDate(userContryInfos?.visitedAt)}</span></p>}
                                        <p className="text-secondary-color text-sm text-center italic font-light line-clamp-1">3 Cidades conhecidas</p>
                                        <p className="text-secondary-color text-sm text-center italic font-light line-clamp-1">Curitiba, Balneario Camburiu e Penha </p>
                                    </div>
                                }

                                <ModalButton onClick={() => handleVisitedButton(false)} text={isUpdating ? "Atualizando..." : texts.profile.markNoVisited} tailwindTags="bg-red-500 text-white text-xs mt-1  lg:mt-2 lg:max-w-76 lg:text-sm" />

                                <ModalButton onClick={() => setIsMemoryModalOpen(true)} text={userContryInfos?.cities || userContryInfos?.visitedAt || userContryInfos?.notes ? texts.profile.createMemory : texts.profile.editMemory} tailwindTags="bg-gray-500 text-white text-xs mt-1 lg:mt-2 lg:max-w-76 lg:text-sm" />

                            </div>
                            :
                            <div>
                                <ModalButton onClick={() => handleVisitedButton(true)} text={texts.profile.markVisited} tailwindTags="bg-blue-color text-white text-xs mt-1 max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                                {isCountryWishlist ?
                                    <ModalButton onClick={() => handleWishListButton(false)} text={texts.profile.markNoWishlist} tailwindTags="bg-red-500 text-white text-xs max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                                    :
                                    <ModalButton onClick={() => handleWishListButton(true)} text={texts.profile.markWishlist} tailwindTags="bg-orange-400 text-white text-xs max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                                }
                            </div>
                        }

                        <Link href={"/"}>
                            <ModalButton text={texts.profile.createScript} tailwindTags="bg-gray-200 text-black mt-1 text-xs max-w-[146px] lg:mt-2 lg:max-w-76 lg:text-sm" />
                        </Link>
                    </div>
                }
            </div>

            {isMemoryModalOpen && <MemoryModal geo={geo} setIsMemoryModalOpen={setIsMemoryModalOpen} />}
        </div>
    )
}
