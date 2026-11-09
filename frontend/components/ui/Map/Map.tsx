"use client"

import ActionsAndInfos from "@/components/profile/MyMap/ActionsAndInfos";
import { GeoInterface } from "@/interfaces/map.interface";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, ZoomPanCallbackProps } from "react-simple-maps";
import { mapInitialPosition } from "@/constants/enum";
import { UserInterface } from "@/interfaces/user.interface";
import CountryInfoModal from "@/components/profile/MyMap/CountryInfoModal";

interface MapProps {
    user: UserInterface
    guestMode: boolean
    tailwindTags?: string 
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export default function Map({ user, guestMode, tailwindTags }: MapProps) {
    const [visitedCountries, setVisitedCountries] = useState<string[]>([])
    const [countriesWishlist, setCountriesWishlist] = useState<string[]>([])
    const [countrySelected, setCountrySelected] = useState<GeoInterface | undefined>()
    const [isOpen, setIsOpen] = useState(false)
    const [visiteConfirmed, setVisiteConfirmed] = useState(false)
    const [wishlistConfirmed, setWishlistConfirmed] = useState(false)
    const [visited, setVisited] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)
    const [position, setPosition] = useState(mapInitialPosition)
    const [placeholderCountry, setPlaceholderCountry] = useState<string>("")

    const toggleCountry = (geo: any, isVisited: boolean, isWishlist: boolean) => {
        setImageLoading(true)
        setIsOpen(true)
        setCountrySelected(geo)
        setVisiteConfirmed(false)
        setWishlistConfirmed(false)
        setVisited(isVisited)
        setWishlist(isWishlist)
    }

    const handleResetPosition = () => {
        setPosition(mapInitialPosition);
    }

    const handleMoveEnd = (positionProps: ZoomPanCallbackProps) => {
        setPosition({
            center: positionProps.coordinates as [number, number],
            zoom: positionProps.zoom as number,
        })
    }

    const handleZoomIn = () => setPosition({ center: position.center, zoom: position.zoom < 5 ? position.zoom + 0.5 : position.zoom })
    const handleZoomOut = () => setPosition({ center: position.center, zoom: position.zoom > 1 ? position.zoom - 0.5 : position.zoom })

    useEffect(() => {
        if (visiteConfirmed) setVisitedCountries((prev) => prev.includes(countrySelected!.id) ? prev.filter((id) => id !== countrySelected!.id) : [...prev, countrySelected!.id])
        if (wishlistConfirmed) setCountriesWishlist((prev) => prev.includes(countrySelected!.id) ? prev.filter((id) => id !== countrySelected!.id) : [...prev, countrySelected!.id])
    }, [visiteConfirmed, wishlistConfirmed])

    useEffect(() => {
        if (!user) return

        setVisitedCountries(user.countriesVisited)
        setCountriesWishlist(user.countriesWishlist)
    }, [user])

    return (
        <div className="">
            <div className={`relative max-h-[80vh] rounded-xl overflow-hidden bg-blue-50 touch-none ${tailwindTags}`}>
                <ComposableMap projectionConfig={{ scale: 140 }} className="w-full h-auto">
                    <ZoomableGroup zoom={position.zoom} center={position.center} onMoveEnd={handleMoveEnd}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => geographies.map((geo) => {
                                const isVisited = visitedCountries?.includes(String(geo?.id))
                                const isInWishlist = countriesWishlist?.includes(String(geo?.id))
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => setPlaceholderCountry(geo?.properties?.name)}
                                        onMouseOut={() => setPlaceholderCountry("")}
                                        onClick={() => toggleCountry(geo, isVisited, isInWishlist)}
                                        className={`outline-none stroke-white stroke-1 transition-all hover:cursor-pointer
                                                ${countrySelected?.id === geo.id && isOpen ? 'fill-gray-600' :
                                                isVisited ? 'fill-secondary-third-color hover:fill-[#4338CA]' :
                                                    isInWishlist ? 'fill-orange-400 hover:fill-orange-500' :
                                                        'fill-[#E2E8F0] hover:fill-[#CBD5E1]'}`}
                                    />
                                )
                            })}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>

                <div className="hidden
                    md:block
                ">
                    <ActionsAndInfos placeholderCountry={placeholderCountry} handleResetPosition={handleResetPosition} handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
                </div>

                {isOpen &&
                    <CountryInfoModal visited={visited}
                        wishlist={wishlist}
                        geo={countrySelected}
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        user={user!}
                        setVisiteConfirmed={setVisiteConfirmed}
                        imageLoading={imageLoading}
                        guestMode={guestMode}
                        setImageLoading={setImageLoading}
                        setWishListConfirmed={setWishlistConfirmed}
                    />
                }

            </div>
            <div className="md:hidden">
                <ActionsAndInfos placeholderCountry={placeholderCountry} handleResetPosition={handleResetPosition} handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
            </div>
        </div>
    )
}