
"use client"

import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { toast } from "sonner";
import { UserInterface } from "@/interfaces/user.interface";
import { getCityMemories, handleCountryMemory } from "@/services/map.service";
import CityMemoriesCard from "./CityMemoriesCard";

interface CityInfosModalProps {
    user: UserInterface;
    geo: any;
    city?: any;
    setUpdateMemory: (value: boolean) => void;
    setIsOpenCityInfosModal: (value: boolean) => void;
}

export default function CityInfosModal({ user, geo, city, setUpdateMemory, setIsOpenCityInfosModal }: CityInfosModalProps) {
    const [cityName, setCityName] = useState(city?.name ?? "");
    const [cityNotes, setCityNotes] = useState(city?.notes ?? "");
    const [preview, setPreview] = useState("");
    const [isSavingMemory, setIsSavingMemory] = useState(false);
    const [memories, setMemories] = useState([])

    useEffect(() => {
        if (!city) return;

        setCityName(city.name ?? "");
        setCityNotes(city.notes ?? "");
    }, [city]);

    useEffect(() => {
        const _getCityMemories = async () => {
            const cityMemories = await getCityMemories(user.id)
            setMemories(cityMemories)
        }
        _getCityMemories()
    }, [preview])

    const handleSaveMemory = async () => {
        if (!cityName.trim()) {
            toast.error("Preencha o nome da cidade ou destino.");
            return;
        }

        if (!cityNotes.trim()) {
            toast.error("Preencha a descrição da experiência geral.");
            return;
        }

        const data = {
            userId: user.id,
            countryCode: geo.id,
            cityName: cityName.trim(),
            cityNotes: cityNotes.trim(),
            cityId: city?.id ?? null
        };

        try {
            setIsSavingMemory(true);

            await handleCountryMemory(data);

            setUpdateMemory(true);

            toast.success("Informações gerais salvas com sucesso!");
        } catch (error) {
            toast.error("Erro ao salvar informações gerais.");
            console.error(error);
        } finally {
            setIsSavingMemory(false);
        }
    };

    return (
        <div className="fixed inset-0 z-210 flex items-center justify-center bg-black/60 p-4 animate-[optionSelector_300ms_ease-out]">
            <section className="mx-auto flex h-[85vh] max-h-200 w-full max-w-3xl flex-col rounded-xl border border-gray-100 bg-background-color p-3 sm:p-4">
                <div className="mb-4 flex shrink-0 items-center justify-between">
                    <h2 className="text-2xl font-semibold text-primary-color"> Informações da expe  riência </h2>
                    <X onClick={() => setIsOpenCityInfosModal(false)} className="cursor-pointer" />
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto scrollbar-hide">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-primary-color"> Informações gerais </h3>
                                <p className="text-xs text-gray-400"> Registre suas informações gerais sobre este destino. </p>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-base text-primary-color"> Nome da cidade ou destino </label>

                                <input
                                    type="text"
                                    value={cityName}
                                    onChange={(e) => setCityName(e.target.value)}
                                    maxLength={100}
                                    placeholder="Ex: Conhecendo as ruas de Paris"
                                    className="h-12 w-full rounded-xl border-2 border-gray-100 bg-white px-3 text-primary-color outline-none transition focus:border-blue-400 placeholder:text-muted-foreground"
                                />

                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-base text-primary-color"> Descrição da experiência geral </label>

                                <textarea
                                    value={cityNotes}
                                    onChange={(e) => setCityNotes(e.target.value)}
                                    rows={4}
                                    maxLength={2000}
                                    placeholder="Conte como foi sua experiência, lugares que conheceu, dicas e momentos especiais..."
                                    className="min-h-28 w-full resize-none rounded-xl border-2 border-gray-100 bg-white px-3 py-3 text-sm text-primary-color outline-none transition focus:border-blue-400 placeholder:text-muted-foreground"
                                />

                                <p className="text-right text-xs text-gray-400"> {cityNotes.length}/2000 caracteres </p>

                            </div>

                            <button type="button" onClick={handleSaveMemory} disabled={isSavingMemory} className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
                                <Check className="h-4 w-4" />
                                {isSavingMemory ? "Salvando informações..." : "Salvar informações gerais"}
                            </button>
                        </div>

                        <div className="border-t border-gray-200" />
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-primary-color"> Fotos e experiências </h3>
                                <p className="text-xs text-gray-400"> Adicione fotos e registre detalhes de cada momento da viagem. </p>
                            </div>

                            {memories.map((memory) => (
                                <CityMemoriesCard cityId={city.id}
                                    preview={preview}
                                    setPreview={setPreview}
                                    setUpdateMemory={setUpdateMemory}
                                    memory={memory}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex shrink-0 justify-end border-t border-gray-100 pt-3">
                    <button type="button" onClick={() => setIsOpenCityInfosModal(false)} className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 bg-red-500 text-sm font-medium text-white" >
                        Fechar
                    </button>
                </div>
            </section>
        </div>
    )
}
