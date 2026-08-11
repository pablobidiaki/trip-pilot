"use client";

import { useState } from "react"

export default function Dropdown(){
    const [selectedAi, setSelectedAi] = useState("gemini")

    return(
        <select
            value={selectedAi}
            onChange={(e) => setSelectedAi(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            >
            <option value="">Selecione a IA</option>
            <option value="gemini">Google Gemini</option>
            <option value="openai">OpenAI</option>
        </select>
    )
}