"use client"

import { useEffect, useState } from "react";
import { AiModels, TripTypesArray } from "@/constants/enum";
import { MapPin, CalendarDays, DollarSign, Users, BrainCircuit, Backpack, Calendar1 } from "lucide-react";

import texts from "@/constants/texts";
import Input from "@/components/ui/Input/Input";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import GradientButton from "@/components/ui/Buttons/GradientButton";
import { createItinerary } from "@/services/itinerary.service";
import ItineraryGeneratingModal from "../ItineraryGeneratingModal/ItineraryGeneratingModal";
import { useRouter } from 'next/navigation'
import DatePicker from "./DatePicker";

interface Country {
    countryName: string
    countryNamePtBR: string
    countryCode: string
}

export default function HeroForm() {
    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY
    const router = useRouter()

    const [search, setSearch] = useState("")
    const [countries, setCountries] = useState<Country[]>([])
    const [departure, setDeparture] = useState("")
    const [departureSelected, setDepartureSelected] = useState(false)
    const [destinationSelected, setDestinationSelected] = useState(false)
    const [destination, setDestination] = useState("")
    const [days, setDays] = useState("")
    const [startDate, setStartDate] = useState("")
    const [countryOrigin, setCountryOrigin ] = useState("")
    const [countryDestination, setCountryDestination] = useState("")
    const [budget, setBudget] = useState("")
    const [travelers, setTravelers] = useState("")
    const [travelType, setTravelType] = useState("Aventura")
    const [aiProvider, setAiProvider] = useState("Gemini")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const data = {
                userId: "5e9a0a38-4777-4358-93d5-afd69472f469",
                departure: departure,
                destination: destination,
                days: Number(days),
                startDate: startDate,
                countryOrigin: countryOrigin,
                countryDestination: countryDestination,
                currency: "BRL",
                budgetTotal: Number(budget),
                travelers: Number(travelers),
                travelType: travelType,
                aiProvider: aiProvider,
                itinerary: {}
            }

            const itinerary = await createItinerary(data)

            router.push(`/itinerary/${itinerary.id}`)
        } catch (err) {
            console.log(`Erro ao gerar roteiro ${err}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!search.trim()) {
            setCountries([])
            return
        }

        const timer = setTimeout(() => {
            fetch(
                `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&type=country&format=json&apiKey=${apiKey}`,
                {
                    method: "GET"
                }
            )
                .then((response) => response.json())
                .then((result) => {
                    const countries: Country[] = result.results
                        .map((result: any) => ({
                            countryName: result.country,
                            countryNamePtBR: result.other_names?.["name:pt"] ?? result.country,
                            countryCode: result.country_code
                        }))
                        .filter((country: Country) => country.countryName)

                    setCountries(
                        countries.filter(
                            (country, index, self) =>
                                index ===
                                self.findIndex(
                                    (item) => item.countryCode === country.countryCode
                                )
                        )
                    )
                })
                .catch((error) => console.log("error", error))
        }, 300)

        return () => clearTimeout(timer)
    }, [search, apiKey])

    return (
        <form className="bg-white p-4 max-w-3/7 mx-4 rounded-2xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                    <Input icon={<MapPin />}
                        title={texts.form.exitPoint}
                        placeholder={texts.form.exitPointPlaceholder}
                        type="text"
                        value={departure}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setDeparture(e.target.value)
                            setDepartureSelected(false)
                        }}
                        required={true}
                        tailwindTags="w-full"
                    />

                    {departure && !departureSelected && countries.length > 0 && (
                        <div className="absolute top-full left-0 z-50 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                            {countries.slice(0, 5).map((country) => (
                                <button key={country.countryCode}
                                    className="w-full px-4 py-3 text-left transition-colors bg-gray-100 hover:bg-gray-200 border-b border-b-gray-300 cursor-pointer flex items-center gap-3"
                                    type="button"
                                    onClick={() => {
                                        setSearch("")
                                        setDeparture(country.countryNamePtBR)
                                        setCountries([])
                                        setDepartureSelected(true)
                                        setCountryOrigin(country.countryName)
                                    }}
                                >
                                    <img className="w-8 h-6 object-cover"
                                        src={`https://flags.restcountries.com/v5/w640/${country.countryCode}.png`}
                                        alt={`Bandeira de ${country.countryNamePtBR}`}
                                    />

                                    <span> {country.countryNamePtBR} </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <Input icon={<MapPin />}
                        title={texts.form.destination}
                        placeholder={texts.form.destinationPlaceholder}
                        type="text"
                        value={destination}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setDestination(e.target.value)
                            setDestinationSelected(false)
                        }}
                        required={true}
                        tailwindTags="w-full"
                    />

                    {destination && !destinationSelected && countries.length > 0 && (
                        <div className="absolute top-full left-0 z-50 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                            {countries.slice(0, 5).map((country) => (
                                <button key={country.countryCode}
                                    className="w-full px-4 py-3 text-left transition-colors bg-gray-100 hover:bg-gray-200 border-b border-b-gray-300 cursor-pointer flex items-center gap-3"
                                    type="button"
                                    onClick={() => {
                                        setSearch("")
                                        setDestination(country.countryNamePtBR)
                                        setCountries([])
                                        setDestinationSelected(true)
                                        setCountryDestination(country.countryName)
                                    }}>

                                    <img
                                        className="w-8 h-6 object-cover"
                                        src={`https://flags.restcountries.com/v5/w640/${country.countryCode}.png`}
                                        alt={`Bandeira de ${country.countryNamePtBR}`}
                                    />

                                    <span>{country.countryNamePtBR}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <div className="my-4 grid grid-cols-3 gap-3">
                <Input icon={<CalendarDays />}
                    title={texts.form.howDays}
                    placeholder={texts.form.howDaysPlaceholder}
                    type='number'
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    required={true}
                />
                <DatePicker icon={<Calendar1 size={22} />}
                    title={texts.form.when}
                    value={startDate}
                    onChange={setStartDate}
                />
                <Input icon={<DollarSign />}
                    title={texts.form.budget}
                    placeholder={texts.form.budgetPlaceholder}
                    type='number'
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required={true}
                />
            </div>
            <div className="my-4 grid grid-cols-3 gap-3">
                <Input icon={<Users />}
                    title={texts.form.peopleQuantity}
                    placeholder={texts.form.peopleQuantityPlaceholder}
                    type='number'
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    required={true}
                />
                <Dropdown icon={<Backpack />}
                    title={texts.form.type}
                    options={TripTypesArray}
                    value={travelType}
                    onChange={setTravelType}
                />
                <Dropdown icon={<BrainCircuit />}
                    title={texts.form.aiModel}
                    options={AiModels}
                    value={aiProvider}
                    onChange={setAiProvider}
                />
            </div>

            <GradientButton text={texts.form.buttonText} type="submit" />

            <ItineraryGeneratingModal isOpen={isLoading} />
        </form>
    )
}