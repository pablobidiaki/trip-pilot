
"use client"

import { useCallback, useEffect, useState } from "react";
import { X, Check, ImagePlus, Upload } from "lucide-react";
import { toast } from "sonner";
import { UserInterface } from "@/interfaces/user.interface";
import { getCityMemories, handleCountryMemory } from "@/services/map.service";
import { uploadImage } from "@/services/upload.service";
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
    const [isSavingMemory, setIsSavingMemory] = useState(false);
    const [memories, setMemories] = useState<any[]>([]);
    const [draftExperience, setDraftExperience] = useState<{
        preview: string;
        image: string;
        isUploading: boolean;
    } | null>(null);

    useEffect(() => {
        if (!city) return;

        setCityName(city.name ?? "");
        setCityNotes(city.notes ?? "");
    }, [city]);

    const fetchCityMemories = useCallback(async () => {
        try {
            const cityMemories = await getCityMemories(user.id);
            setMemories(cityMemories ?? []);
        } catch (error) {
            console.error(error);
        }
    }, [user.id]);

    useEffect(() => {
        fetchCityMemories();
    }, [fetchCityMemories]);

    useEffect(() => {
        if (!draftExperience?.preview) return;
        const previewUrl = draftExperience.preview;
        return () => URL.revokeObjectURL(previewUrl);
    }, [draftExperience?.preview]);

    const handleNewImage = async (file: File | undefined) => {
        if (!file) return;

        if (!city?.id) {
            toast.error("Salve as informações gerais da cidade antes de adicionar fotos.");
            return;
        }

        if (!file.type.startsWith("image/")) {
            toast.error("Selecione um arquivo de imagem válido.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("A imagem deve ter no máximo 5MB.");
            return;
        }

        const previewUrl = URL.createObjectURL(file);
        setDraftExperience({ preview: previewUrl, image: "", isUploading: true });

        try {
            const imageUrl = await uploadImage(file);
            setDraftExperience({ preview: previewUrl, image: imageUrl, isUploading: false });
            toast.success("Imagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro no upload:", error);
            setDraftExperience(null);
            toast.error("Erro ao enviar imagem.");
        }
    };

    const cityMemories = memories.filter((memory) => city?.id && memory?.cityId === city.id);

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
                    <h2 className="text-2xl font-semibold text-primary-color"> Informações da experiência </h2>
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

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <label htmlFor="add-city-image" className="flex min-h-55 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-white p-5 text-gray-500 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                        <ImagePlus className="h-6 w-6" />
                                    </div>

                                    <div className="text-center">
                                        <p className="text-sm font-semibold"> Adicionar imagem </p>
                                        <p className="mt-1 text-xs text-gray-400"> Selecione uma foto da experiência </p>
                                    </div>

                                    <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs">
                                        <Upload className="h-3.5 w-3.5" />
                                        PNG, JPG ou WEBP · Máximo 5MB
                                    </span>

                                    <input
                                        id="add-city-image"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => { handleNewImage(e.target.files?.[0]); e.target.value = ""; }}
                                    />
                                </label>

                                {draftExperience && city?.id && (
                                    <CityMemoriesCard
                                        key="new-experience"
                                        cityId={city.id}
                                        initialImage={draftExperience.image}
                                        initialPreview={draftExperience.preview}
                                        isInitialUploading={draftExperience.isUploading}
                                        setUpdateMemory={setUpdateMemory}
                                        onSaved={() => {
                                            setDraftExperience(null);
                                            fetchCityMemories();
                                        }}
                                        onRemove={() => setDraftExperience(null)}
                                    />
                                )}

                                {cityMemories.map((memory) => (
                                    <CityMemoriesCard
                                        key={memory.id}
                                        cityId={city.id}
                                        memory={memory}
                                        setUpdateMemory={setUpdateMemory}
                                        onSaved={fetchCityMemories}
                                    />
                                ))}
                            </div>
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
