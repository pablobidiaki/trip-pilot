"use client"

import { uploadImage } from "@/services/upload.service";
import { ImagePlus, Trash } from "lucide-react";
import { toast } from "sonner";

export interface CityMemoryDraft {
    localId: string;
    id?: string;
    title: string;
    visitedAt: string;
    description: string;
    imageURL: string;
    preview?: string;
    isUploading?: boolean;
}

interface CityMemoriesCardProps {
    experience: CityMemoryDraft;
    onChange: (localId: string, patch: Partial<CityMemoryDraft>) => void;
    onRemove: (localId: string) => void;
}

export default function CityMemoriesCard({ experience, onChange, onRemove }: CityMemoriesCardProps) {
    const inputId = `city-image-${experience.localId}`;

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

        const previousImage = experience.imageURL;
        const previewUrl = URL.createObjectURL(file);

        onChange(experience.localId, {
            preview: previewUrl,
            imageURL: "",
            isUploading: true,
        });

        try {
            const imageUrl = await uploadImage(file);

            onChange(experience.localId, {
                imageURL: imageUrl,
                preview: "",
                isUploading: false,
            });
            URL.revokeObjectURL(previewUrl);

            toast.success("Imagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro no upload:", error);

            onChange(experience.localId, {
                preview: "",
                imageURL: previousImage,
                isUploading: false,
            });
            URL.revokeObjectURL(previewUrl);

            toast.error("Erro ao enviar imagem.");
        }
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative h-55 w-full">
                <img
                    src={experience.imageURL || experience.preview || ""}
                    alt="Preview da experiência"
                    className="h-full w-full object-cover"
                />
                {experience.isUploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700">
                            Enviando imagem...
                        </span>
                    </div>
                )}

                <div className="absolute right-2 top-2 flex gap-2">
                    <label
                        htmlFor={inputId}
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 ${experience.isUploading ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                        title="Alterar imagem"
                    >
                        <ImagePlus className="h-4 w-4 text-gray-700" />
                    </label>

                    <input
                        id={inputId}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => { handleImage(e.target.files?.[0]); e.target.value = ""; }}
                    />

                    <button
                        type="button"
                        disabled={experience.isUploading}
                        onClick={() => onRemove(experience.localId)}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:text-red-500 disabled:opacity-50"
                        title="Remover imagem"
                    >
                        <Trash className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="space-y-3 p-3">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-primary-color">
                        Título da experiência
                    </label>

                    <input
                        type="text"
                        value={experience.title}
                        onChange={(e) => onChange(experience.localId, { title: e.target.value })}
                        maxLength={100}
                        placeholder="Ex: Conhecendo a Torre Eiffel"
                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-primary-color outline-none transition focus:border-blue-400"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-primary-color"> Data visitada </label>

                    <input
                        type="text"
                        value={experience.visitedAt}
                        onChange={(e) => onChange(experience.localId, { visitedAt: e.target.value })}
                        placeholder="DD/MM/AAAA"
                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-primary-color outline-none transition focus:border-blue-400"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-primary-color">
                        Descrição da foto
                    </label>

                    <textarea
                        value={experience.description}
                        onChange={(e) => onChange(experience.localId, { description: e.target.value })}
                        rows={3}
                        maxLength={2000}
                        placeholder="Conte sobre esse momento..."
                        className="min-h-24 w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-primary-color outline-none transition focus:border-blue-400"
                    />

                    <p className="text-right text-xs text-gray-400">
                        {experience.description.length}/2000 caracteres
                    </p>
                </div>
            </div>
        </div>
    );
}
