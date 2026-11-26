"use client"

import { uploadImage } from "@/services/upload.service";
import { ChevronLeft, ChevronRight, ImagePlus, Star, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface MediaItem {
    id: string;
    url: string;
    preview?: string;
    type: "image" | "video";
    isUploading?: boolean;
}

export interface CityMemoryDraft {
    localId: string;
    id?: string;
    title: string;
    visitedAt: string;
    description: string;
    media: MediaItem[];
}

export function isVideoUrl(url: string): boolean {
    if (!url) return false;
    return /\/video\/upload\//i.test(url) || /\.(mp4|webm|mov|ogg|m4v)(\?.*)?$/i.test(url);
}

interface CityMemoriesCardProps {
    experience: CityMemoryDraft;
    selectedBannerUrl: string | null;
    onSelectBanner: (url: string) => void;
    onChange: (localId: string, updater: (prev: CityMemoryDraft) => CityMemoryDraft) => void;
    onRemove: (localId: string) => void;
}

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

export default function CityMemoriesModalOwner({ experience, selectedBannerUrl, onSelectBanner, onChange, onRemove}: CityMemoriesCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const inputId = `city-media-${experience.localId}`;

    const mediaList = experience.media;
    const safeIndex = mediaList.length > 0 ? Math.min(currentIndex, mediaList.length - 1) : 0;
    const currentMedia = mediaList[safeIndex];

    useEffect(() => {
        if (currentIndex !== safeIndex) {
            setCurrentIndex(safeIndex);
        }
    }, [currentIndex, safeIndex]);

    const handleAddMedia = async (files: FileList | null) => {
        if (!files || files.length === 0) return;

        const validFiles: { file: File; type: "image" | "video" }[] = [];

        for (const file of Array.from(files)) {
            const isImage = file.type.startsWith("image/");
            const isVideo = file.type.startsWith("video/");

            if (!isImage && !isVideo) {
                toast.error(`Arquivo inválido: ${file.name}. Selecione imagens ou vídeos.`);
                continue;
            }

            if (isImage && file.size > MAX_IMAGE_SIZE) {
                toast.error(`A imagem "${file.name}" excede o limite de 5MB.`);
                continue;
            }

            if (isVideo && file.size > MAX_VIDEO_SIZE) {
                toast.error(`O vídeo "${file.name}" excede o limite de 50MB.`);
                continue;
            }

            validFiles.push({ file, type: isVideo ? "video" : "image" });
        }

        if (validFiles.length === 0) return;

        const newItems: MediaItem[] = validFiles.map(({ file, type }) => ({
            id: `media-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            url: "",
            preview: URL.createObjectURL(file),
            type,
            isUploading: true,
        }));

        const startIndex = mediaList.length;

        onChange(experience.localId, (prev) => ({
            ...prev,
            media: [...prev.media, ...newItems],
        }));

        setCurrentIndex(startIndex);

        await Promise.all(
            validFiles.map(async ({ file }, idx) => {
                const item = newItems[idx];
                try {
                    const uploadedUrl = await uploadImage(file);
                    onChange(experience.localId, (prev) => ({
                        ...prev,
                        media: prev.media.map((m) =>
                            m.id === item.id
                                ? { ...m, url: uploadedUrl, preview: "", isUploading: false }
                                : m
                        ),
                    }));
                    if (item.preview) URL.revokeObjectURL(item.preview);
                } catch (error) {
                    console.error("Erro no upload:", error);
                    onChange(experience.localId, (prev) => ({
                        ...prev,
                        media: prev.media.filter((m) => m.id !== item.id),
                    }));
                    if (item.preview) URL.revokeObjectURL(item.preview);
                    toast.error(`Erro ao enviar "${file.name}".`);
                }
            })
        );
    };

    const handleDeleteCurrentMedia = () => {
        if (!currentMedia) return;

        if (mediaList.length <= 1) {
            onRemove(experience.localId);
            return;
        }

        const removedId = currentMedia.id;
        onChange(experience.localId, (prev) => ({
            ...prev,
            media: prev.media.filter((m) => m.id !== removedId),
        }));

        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handlePrev = () => {
        if (mediaList.length <= 1) return;
        setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (mediaList.length <= 1) return;
        setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
    };

    const isAnyUploading = mediaList.some((m) => m.isUploading);
    const currentSrc = currentMedia ? (currentMedia.url || currentMedia.preview || "") : "";
    const isCurrentBanner =
        Boolean(currentMedia?.url) &&
        currentMedia?.type === "image" &&
        selectedBannerUrl === currentMedia.url;

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative h-55 w-full bg-black/5">
                {currentMedia ? (
                    currentMedia.type === "video" ? (
                        <video
                            key={currentMedia.id}
                            src={currentSrc}
                            controls
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <img
                            src={currentSrc}
                            alt="Preview da experiência"
                            className="h-full w-full object-cover"
                        />
                    )
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                        Sem mídia
                    </div>
                )}

                {currentMedia?.isUploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700">
                            Enviando mídia...
                        </span>
                    </div>
                )}

                {/* Banner selector (only for uploaded images) */}
                {currentMedia && currentMedia.type === "image" && currentMedia.url && !currentMedia.isUploading && (
                    <button
                        type="button"
                        onClick={() => onSelectBanner(currentMedia.url)}
                        className={`absolute left-2 top-2 flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium shadow-md transition ${
                            isCurrentBanner
                                ? "bg-amber-400 text-white"
                                : "bg-white/95 text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        }`}
                        title={isCurrentBanner ? "Foto selecionada como banner da cidade" : "Usar esta foto como banner da cidade"}
                    >
                        <Star className={`h-3.5 w-3.5 ${isCurrentBanner ? "fill-white" : ""}`} />
                        {isCurrentBanner ? "Banner" : "Usar como banner"}
                    </button>
                )}

                {/* Add more media & delete current media */}
                <div className="absolute right-2 top-2 flex gap-2">
                    <label
                        htmlFor={inputId}
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 ${isAnyUploading ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                        title="Adicionar mais fotos ou vídeos"
                    >
                        <ImagePlus className="h-4 w-4 text-gray-700" />
                    </label>

                    <input
                        id={inputId}
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        className="hidden"
                        onChange={(e) => { handleAddMedia(e.target.files); e.target.value = ""; }}
                    />

                    <button
                        type="button"
                        disabled={currentMedia?.isUploading}
                        onClick={handleDeleteCurrentMedia}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:text-red-500 disabled:opacity-50"
                        title={mediaList.length > 1 ? "Excluir esta mídia" : "Remover experiência"}
                    >
                        <Trash className="h-4 w-4" />
                    </button>
                </div>

                {/* Manual carousel controls (only when > 1 media item) */}
                {mediaList.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
                            title="Anterior"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
                            title="Próximo"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>

                        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1">
                            {mediaList.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-1.5 cursor-pointer rounded-full transition-all ${
                                        index === safeIndex ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                                    }`}
                                    aria-label={`Ir para mídia ${index + 1}`}
                                />
                            ))}
                            <span className="ml-1 text-[10px] font-medium text-white">
                                {safeIndex + 1}/{mediaList.length}
                            </span>
                        </div>
                    </>
                )}
            </div>

            <div className="space-y-3 p-3">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-primary-color">
                        Título da experiência
                    </label>

                    <input
                        type="text"
                        value={experience.title}
                        onChange={(e) =>
                            onChange(experience.localId, (prev) => ({ ...prev, title: e.target.value }))
                        }
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
                        onChange={(e) =>
                            onChange(experience.localId, (prev) => ({ ...prev, visitedAt: e.target.value }))
                        }
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
                        onChange={(e) =>
                            onChange(experience.localId, (prev) => ({ ...prev, description: e.target.value }))
                        }
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
