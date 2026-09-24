"use client";

import texts from "@/constants/texts";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import CountryInfoModal from "./CountryInfoModal";
import { UserInterface } from "@/interfaces/user.interface";
import { GeoInterface } from "@/interfaces/map.interface";

interface MyMapProps {
    user: UserInterface
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export default function MyMap({ user }: MyMapProps) {
    const [visitedCountries, setVisitedCountries] = useState<string[]>(user.countriesVisited)
    const [countrySelected, setCountrySelected] = useState<GeoInterface>()
    const [isOpen, setIsOpen] = useState(false)
    const [visiteConfirmed, setVisiteConfirmed] = useState(false)
    const toggleCountry = (geo: any) => {
        setIsOpen(true)
        setCountrySelected(geo)
        setVisiteConfirmed(false)
    }

    useEffect(() => {
        if (visiteConfirmed) setVisitedCountries((prev) => prev.includes(countrySelected!.id) ? prev.filter((id) => id !== countrySelected!.id) : [...prev, countrySelected!.id])
    }, [visiteConfirmed])

    return (
        <div className="w-full mx-auto p-2 rounded-xl max-h-200 animate-[optionSelector_300ms_ease-out]">
            <h1 className="text-2xl font-medium text-primary-color">{texts.profile.myMap}</h1>
            <p className="text-second-color text-sm font-light mb-4">{texts.profile.myMapText}</p>

            <div className="max-h-180 rounded-2xl overflow-hidden bg-blue-50">
                <ComposableMap projectionConfig={{ scale: 140 }}>
                    <ZoomableGroup center={[10, -40]} zoom={1}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => geographies.map((geo) => {
                                const isVisited = visitedCountries.includes(geo?.id)
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onClick={() => toggleCountry(geo)}
                                        className={`${isVisited ? 'fill-[#4F46E5]' : 'fill-[#E2E8F0]'} outline-none stroke-white stroke-1 transition-all ${isVisited ? 'hover:fill-[#4338CA]' : 'hover:fill-[#CBD5E1]'} hover:cursor-pointer hover:outline-none`}
                                    />
                                )
                            })}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
            {isOpen &&
                <CountryInfoModal geo={countrySelected}
                    visitedCountries={visitedCountries}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    user={user!}
                    setVisiteConfirmed={setVisiteConfirmed}
                />}
        </div>
    );
}