"use client"

import { useCallback, useEffect, useState } from "react";
import { X, Check, ImagePlus, Upload } from "lucide-react";
import { toast } from "sonner";
import { UserInterface } from "@/interfaces/user.interface";
import { getCityMemories, handleCityExperience, handleCountryMemory } from "@/services/map.service";
import { uploadImage } from "@/services/upload.service";
import CityMemoriesCard, { CityMemoryDraft } from "./CityMemoriesCard";

interface CityInfosModalProps {
    user: UserInterface;
    geo: any;
    city?: any;
    setUpdateMemory: (value: boolean) => void;
    setIsOpenCityInfosModal: (value: boolean) => void;
}

export default function CityInfosModal({ user, geo, city, setUpdateMemory, setIsOpenCityInfosModal }: CityInfosModalProps) {
    const [currentCityId, setCurrentCityId] = useState<string | null>(city?.id ?? null);
    const [cityName, setCityName] = useState(city?.name ?? "");
    const [cityNotes, setCityNotes] = useState(city?.notes ?? "");
    const [isSaving, setIsSaving] = useState(false);
    const [experiences, setExperiences] = useState<CityMemoryDraft[]>([]);

    useEffect(() => {
        setCurrentCityId(city?.id ?? null);
        if (!city) return;

        setCityName(city.name ?? "");
        setCityNotes(city.notes ?? "");
    }, [city]);

    const fetchCityMemories = useCallback(async (targetCityId: string | null) => {
        if (!targetCityId) {
            setExperiences([]);
            return;
        }

        try {
            const allMemories = await getCityMemories(user.id);
            const filtered = (allMemories ?? [])
                .filter((memory: any) => memory?.cityId === targetCityId)
                .map((memory: any): CityMemoryDraft => ({
                    localId: memory.id,
                    id: memory.id,
                    title: memory.title ?? "",
                    visitedAt: memory.visitedAt ?? "",
                    description: memory.description ?? "",
                    imageURL: memory.imageURL ?? "",
                }));

            setExperiences(filtered);
        } catch (error) {
            console.error(error);
        }
    }, [user.id]);

    useEffect(() => {
        fetchCityMemories(currentCityId);
    }, [fetchCityMemories, currentCityId]);

    const handleExperienceChange = (localId: string, patch: Partial<CityMemoryDraft>) => {
        setExperiences((prev) =>
            prev.map((exp) => (exp.localId === localId ? { ...exp, ...patch } : exp))
        );
    };

    const handleRemoveExperience = (localId: string) => {
        setExperiences((prev) => prev.filter((exp) => exp.localId !== localId));
    };

    const handleNewImage = async (file: File | undefined) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Selecione um arquivo de imagem válido.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("A imagem deve ter no máximo 5MB.");
            return;
        }

        const localId = `draft-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const previewUrl = URL.createObjectURL(file);

        setExperiences((prev) => [
            {
                localId,
                title: "",
                visitedAt: "",
                description: "",
                imageURL: "",
                preview: previewUrl,
                isUploading: true,
            },
            ...prev,
        ]);

        try {
            const imageUrl = await uploadImage(file);
            handleExperienceChange(localId, { imageURL: imageUrl, preview: "", isUploading: false });
            URL.revokeObjectURL(previewUrl);
            toast.success("Imagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro no upload:", error);
            URL.revokeObjectURL(previewUrl);
            handleRemoveExperience(localId);
            toast.error("Erro ao enviar imagem.");
        }
    };

    const isAnyUploading = experiences.some((exp) => exp.isUploading);

    const handleSaveAll = async () => {
        if (!cityName.trim()) {
            toast.error("Preencha o nome da cidade ou destino.");
            return;
        }

        if (isAnyUploading) {
            toast.error("Aguarde o envio das imagens terminar antes de salvar.");
            return;
        }

        const cityData = {
            userId: user.id,
            countryCode: geo.id,
            cityName: cityName.trim(),
            cityNotes: cityNotes.trim(),
            cityId: currentCityId,
        };

        try {
            setIsSaving(true);

            const savedCity = await handleCountryMemory(cityData);
            const resolvedCityId = savedCity?.id ?? currentCityId;

            if (savedCity?.id && savedCity.id !== currentCityId) {
                setCurrentCityId(savedCity.id);
            }

            if (resolvedCityId && experiences.length > 0) {
                await Promise.all(
                    experiences.map((exp) =>
                        handleCityExperience({
                            cityMemoryId: exp.id,
                            cityId: resolvedCityId,
                            cityMemoryTitle: exp.title.trim(),
                            cityMemoryVisitedAt: exp.visitedAt,
                            cityMemoryDescription: exp.description.trim(),
                            cityMemoryImageURL: exp.imageURL,
                        })
                    )
                );
            }

            setUpdateMemory(true);
            await fetchCityMemories(resolvedCityId);

            toast.success("Experiência salva com sucesso!");
            setIsOpenCityInfosModal(false)
        } catch (error) {
            toast.error("Erro ao salvar experiência.");
            console.error(error);
        } finally {
            setIsSaving(false);
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
                                <label className="block text-base text-primary-color"> Nome da cidade ou destino *</label>

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

                                {experiences.map((experience) => (
                                    <CityMemoriesCard
                                        key={experience.localId}
                                        experience={experience}
                                        onChange={handleExperienceChange}
                                        onRemove={handleRemoveExperience}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex shrink-0 gap-3 border-t border-gray-100 pt-3">
                    <button
                        type="button"
                        onClick={() => setIsOpenCityInfosModal(false)}
                        className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 bg-red-500 text-sm font-medium text-white transition hover:bg-red-600"
                    >
                        Fechar
                    </button>

                    <button
                        type="button"
                        onClick={handleSaveAll}
                        disabled={isSaving || isAnyUploading}
                        className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <Check className="h-4 w-4" />
                        {isSaving ? "Salvando..." : "Salvar"}
                    </button>
                </div>
            </section>
        </div>
    );
}
