"use client"

import { handleCityExperience } from "@/services/map.service";
import { uploadImage } from "@/services/upload.service";
import { Check, ImagePlus, Trash, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CityMemoriesCardProps {
    memory: any
    cityId: string
    preview: string
    setPreview: (value: string) => void
    setUpdateMemory: (value: boolean) => void
}

export default function CityMemoriesCard({ memory, cityId, preview, setPreview, setUpdateMemory }: CityMemoriesCardProps) {
    const [experienceTitle, setExperienceTitle] = useState(memory?.title ?? "");
    const [experienceDate, setExperienceDate] = useState(memory?.visitedAt ?? "");
    const [experienceNotes, setExperienceNotes] = useState(memory?.description ?? "");
    const [isSavingExperience, setIsSavingExperience] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [image, setImage] = useState(memory?.imageURL ?? "");

    const handleRemoveImage = () => {
        setImage("");
        setPreview("");
        setExperienceTitle("");
        setExperienceDate("");
        setExperienceNotes("");
    };

    const handleSaveExperience = async () => {
        if (isUploading) {
            toast.error("Aguarde o envio da imagem.");
            return;
        }

        if (!experienceTitle.trim()) {
            toast.error("Preencha o título da experiência.");
            return;
        }

        if (!experienceDate.trim()) {
            toast.error("Informe a data da visita.");
            return;
        }

        if (!experienceNotes.trim()) {
            toast.error("Preencha a descrição da foto.");
            return;
        }

        const data = {
            cityMemoryId: memory?.id,
            cityId: cityId,
            cityMemoryTitle: experienceTitle.trim(),
            cityMemoryVisitedAt: experienceDate,
            cityMemoryDescription: experienceNotes.trim(),
            cityMemoryImageURL: image
        };

        try {
            setIsSavingExperience(true);

            await handleCityExperience(data);

            setUpdateMemory(true);

            toast.success("Experiência com foto salva com sucesso!");

            setPreview("");
        } catch (error) {
            toast.error("Erro ao salvar experiência com foto.");
            console.error(error);
        } finally {
            setIsSavingExperience(false);
        }
    };

    const handleImage = async (file: File | undefined) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Selecione um arquivo de imagem válido.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("A imagem deve ter no máximo 5MB.");
            return;
        }

        const previewUrl = URL.createObjectURL(file);

        setPreview(previewUrl);
        setImage("");
        setIsUploading(true);

        try {
            const imageUrl = await uploadImage(file);

            setImage(imageUrl);

            toast.success("Imagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro no upload:", error);

            setPreview("");
            setImage("");

            toast.error("Erro ao enviar imagem.");
        } finally {
            setIsUploading(false);
        }
    };

    useEffect(() => {
        if (!preview) return;

        return () => URL.revokeObjectURL(preview);
    }, [preview]);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label htmlFor="city-image" className="flex min-h-55 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-white p-5 text-gray-500 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500">
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

                <input id="city-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => { handleImage(e.target.files?.[0]); e.target.value = "" }}
                />
            </label>

            <div>
                {(memory.cityId === cityId || preview) &&
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                        <div className="relative h-55 w-full">
                            <img src={preview || image || memory?.imageURL || ""} alt="Preview da experiência" className="h-full w-full object-cover" />
                            {isUploading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700">
                                        Enviando imagem...
                                    </span>
                                </div>
                            )}

                            <div className="absolute right-2 top-2 flex gap-2">
                                <label htmlFor="city-image" className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 ${isUploading ? "pointer-events-none opacity-50" : "cursor-pointer"}`} title="Alterar imagem">
                                    <ImagePlus className="h-4 w-4 text-gray-700" />
                                </label>

                                <button type="button" disabled={isUploading} onClick={handleRemoveImage} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:text-red-500 disabled:opacity-50" title="Remover imagem">
                                    <Trash className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3 p-3">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-primary-color">
                                    Título da experiência
                                </label>

                                <input type="text"
                                    value={experienceTitle}
                                    onChange={(e) => setExperienceTitle(e.target.value)}
                                    maxLength={100}
                                    placeholder="Ex: Conhecendo a Torre Eiffel"
                                    className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-primary-color outline-none transition focus:border-blue-400"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-primary-color"> Data visitada </label>

                                <input type="text"
                                    value={experienceDate}
                                    onChange={(e) => setExperienceDate(e.target.value)}
                                    placeholder="DD/MM/AAAA"
                                    className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-primary-color outline-none transition focus:border-blue-400"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-primary-color">
                                    Descrição da foto
                                </label>

                                <textarea value={experienceNotes}
                                    onChange={(e) => setExperienceNotes(e.target.value)}
                                    rows={3}
                                    maxLength={2000}
                                    placeholder="Conte sobre esse momento..."
                                    className="min-h-24 w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-primary-color outline-none transition focus:border-blue-400"
                                />

                                <p className="text-right text-xs text-gray-400">
                                    {experienceNotes.length}/2000 caracteres
                                </p>
                            </div>

                            <button type="button" onClick={handleSaveExperience} disabled={isUploading || isSavingExperience} className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
                                <Check className="h-4 w-4" />

                                {isSavingExperience ? "Salvando experiência..." : "Salvar experiência com foto"}
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}