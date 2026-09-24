"use client";

import texts from "@/constants/texts";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, ZoomPanCallbackProps } from "react-simple-maps";
import CountryInfoModal from "./CountryInfoModal";
import { UserInterface } from "@/interfaces/user.interface";
import { GeoInterface } from "@/interfaces/map.interface";
import { mapInitialPosition } from "@/constants/enum";
import { Maximize, Plus, ZoomIn, ZoomOut } from "lucide-react";
import MapButton from "./MapButton";

interface MyMapProps {
    user: UserInterface
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export default function MyMap({ user }: MyMapProps) {
    const [visitedCountries, setVisitedCountries] = useState<string[]>(user.countriesVisited)
    const [countrySelected, setCountrySelected] = useState<GeoInterface>()
    const [isOpen, setIsOpen] = useState(false)
    const [visiteConfirmed, setVisiteConfirmed] = useState(false)
    const [visited, setVisited] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)
    const [position, setPosition] = useState(mapInitialPosition)

    const toggleCountry = (geo: any, isVisited: boolean) => {
        setImageLoading(true)
        setIsOpen(true)
        setCountrySelected(geo)
        setVisiteConfirmed(false)
        setVisited(isVisited)
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
    }, [visiteConfirmed])

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
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onClick={() => toggleCountry(geo, isVisited)}
                                        className={` ${isVisited ? 'fill-secondary-third-color' : 'fill-[#E2E8F0]'} outline-none stroke-white stroke-1 transition-all ${isVisited ? 'hover:fill-[#4338CA]' : 'hover:fill-[#CBD5E1]'} hover:cursor-pointer hover:outline-none`}
                                    />
                                )
                            })}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                
                <MapButton onClick={handleResetPosition} icon={<Maximize />} tailwindTags="bottom-7" toolTipText={texts.profile.originPosition} />
                <MapButton onClick={handleZoomIn} icon={<ZoomIn />} tailwindTags="bottom-18.5" toolTipText={texts.profile.zoom} />
                <MapButton onClick={handleZoomOut} icon={<ZoomOut />} tailwindTags="bottom-30" toolTipText={texts.profile.zoomOut} />
            </div>
            {isOpen &&
                <CountryInfoModal visited={visited}
                    geo={countrySelected}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    user={user!}
                    setVisiteConfirmed={setVisiteConfirmed}
                    imageLoading={imageLoading}
                    setImageLoading={setImageLoading}
                />}
        </div>
    );
}