"use client";

import texts from "@/constants/texts";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, ZoomPanCallbackProps } from "react-simple-maps";
import CountryInfoModal from "./CountryInfoModal";
import { UserInterface } from "@/interfaces/user.interface";
import { GeoInterface } from "@/interfaces/map.interface";
import { mapInitialPosition } from "@/constants/enum";
import { Maximize, ZoomIn, ZoomOut } from "lucide-react";
import MapButton from "./MapButton";
import ColorExplain from "./ColorExplain";

interface MyMapProps {
    user: UserInterface
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export default function MyMap({ user }: MyMapProps) {
    const [visitedCountries, setVisitedCountries] = useState<string[]>(user.countriesVisited)
    const [countriesWishlist, setCountriesWishlist] = useState<string[]>(user.countriesWishlist)
    const [countrySelected, setCountrySelected] = useState<GeoInterface | undefined>()
    const [isOpen, setIsOpen] = useState(false)
    const [visiteConfirmed, setVisiteConfirmed] = useState(false)
    const [wishlistConfirmed, setWishlistConfirmed] = useState(false)
    const [visited, setVisited] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)
    const [position, setPosition] = useState(mapInitialPosition)

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
            zoom: positionProps.zoom,
        })
    }

    const handleZoomIn = () => setPosition({ center: position.center, zoom: position.zoom < 5 ? position.zoom + 0.5 : position.zoom })
    const handleZoomOut = () => setPosition({ center: position.center, zoom: position.zoom > 1 ? position.zoom - 0.5 : position.zoom })

    useEffect(() => {
        if (visiteConfirmed) setVisitedCountries((prev) => prev.includes(countrySelected!.id) ? prev.filter((id) => id !== countrySelected!.id) : [...prev, countrySelected!.id])
        if (wishlistConfirmed) setCountriesWishlist((prev) => prev.includes(countrySelected!.id) ? prev.filter((id) => id !== countrySelected!.id) : [...prev, countrySelected!.id])
    }, [visiteConfirmed, wishlistConfirmed])

    return (
        <div className="w-full mx-auto p-2 rounded-xl max-h-200 animate-[optionSelector_300ms_ease-out]">
            <h1 className="text-2xl font-medium text-primary-color">{texts.profile.myMap}</h1>
            <p className="text-second-color text-sm font-light mb-4">{texts.profile.myMapText}</p>

            <div className="max-h-180 rounded-xl overflow-hidden bg-blue-50">
                <ComposableMap projectionConfig={{ scale: 140 }}>
                    <ZoomableGroup zoom={position.zoom} center={position.center} onMoveEnd={handleMoveEnd}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => geographies.map((geo) => {
                                const isVisited = visitedCountries.includes(geo?.id)
                                const isInWishlist = countriesWishlist.includes(geo?.id)
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
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

                <div className="fixed bottom-7 left-55 bg-white p-2 rounded-lg shadow-2xl">
                    <ColorExplain color="bg-secondary-third-color" text="Já visitei" />
                    <ColorExplain color="bg-orange-400" text="Quero visitar" />
                    <ColorExplain color="bg-gray-600" text="Selecionado" />
                    <ColorExplain color="bg-[#E2E8F0]" text="Países" />
                </div>

                <MapButton onClick={handleResetPosition} icon={<Maximize />} tailwindTags="bottom-7" toolTipText={texts.profile.originPosition} />
                <MapButton onClick={handleZoomIn} icon={<ZoomIn />} tailwindTags="bottom-18.5" toolTipText={texts.profile.zoom} />
                <MapButton onClick={handleZoomOut} icon={<ZoomOut />} tailwindTags="bottom-30" toolTipText={texts.profile.zoomOut} />
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
                    setImageLoading={setImageLoading}
                    setWishListConfirmed={setWishlistConfirmed}
                />}
        </div>
    );
}