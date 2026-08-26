"use client";

import { useState } from "react";
import { AiModels, TripTypesArray } from "@/constants/enum";
import { MapPin, CalendarDays, DollarSign, Users, BrainCircuit, Backpack } from "lucide-react";

import texts from "@/constants/texts";
import Input from "@/components/ui/Input/Input";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import GradientButton from "@/components/ui/Buttons/GradientButton";

export default function HeroForm(){
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [days, setDays] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [budget, setBudget] = useState("");
    const [travelers, setTravelers] = useState("1");
    const [travelType, setTravelType] = useState("aventura");
    const [aiProvider, setAiProvider] = useState("gemini");

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) =>{
        event.preventDefault()

        const data = {
            departure: departure,
            destination: destination,
            days: Number(days),
            departure_date: departureDate,
            budget: Number(budget),
            travelers: Number(travelers),
            travel_type: travelType,
            ai_provider: aiProvider,
        }
        
        try{
            const response = await fetch("http://localhost:3001/llm/generate",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error("Erro ao gerar roteiro")
            }

            const result = await response.json()
            console.log("Resposta da IA:", result)
        }
        catch(error){
            console.error("Erro:", error)
        }
    }

    return(
        <form className="bg-white p-4 max-w-3/7 mx-4 rounded-2xl"  onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
                <Input icon={<MapPin />} 
                       title={texts.form.exit_point} 
                       placeholder={texts.form.exit_point_placeholder} 
                       type='text' 
                       value={departure}
                       onChange={(e) => setDeparture(e.target.value)}
                       required={true}
                />
                <Input icon={<MapPin />} 
                       title={texts.form.destination} 
                       placeholder={texts.form.destination_placeholder} 
                       type='text' 
                       value={destination}
                       onChange={(e) => setDestination(e.target.value)}
                       required={true}
                />
            </div>
            <div className="my-4 grid grid-cols-3 gap-3">
                <Input icon={<CalendarDays />} 
                       title={texts.form.how_days} 
                       placeholder={texts.form.how_days_placeholder} 
                       type='text'
                       value={days}
                       onChange={(e) => setDays(e.target.value)} 
                       required={true}
                />
                <Input icon={<CalendarDays />} 
                       title={texts.form.when} 
                       placeholder={texts.form.when_placeholder} 
                       type='text' 
                       value={departureDate}
                       onChange={(e) => setDepartureDate(e.target.value)}
                       required={true}
                />
                <Input icon={<DollarSign />} 
                       title={texts.form.budget} 
                       placeholder={texts.form.budget_placeholder} 
                       type='text'
                       value={budget}
                       onChange={(e) => setBudget(e.target.value)}
                       required={false}
                />
            </div>
            <div className="my-4 grid grid-cols-3 gap-3">
                <Input icon={<Users />} 
                       title={texts.form.people_quantity} 
                       placeholder={texts.form.people_quantity_placeholder} 
                       type='number' 
                       value={travelers}
                       onChange={(e) => setTravelers(e.target.value)}
                       required={true}
                />
                <Dropdown icon={<Backpack />} 
                          title={texts.form.type} 
                          options={TripTypesArray}
                          value={travelType}
                          onChange={(e) => setTravelType(e.target.value)}
                />
                <Dropdown icon={<BrainCircuit />} 
                          title={texts.form.ai_model} 
                          options={AiModels}
                          value={aiProvider}
                          onChange={(e) => setAiProvider(e.target.value)}
                />
            </div>

            <GradientButton text={texts.form.button_text} type="submit"/>
      </form>
    )
}