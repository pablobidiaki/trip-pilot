"use client";

import texts from "@/constants/texts";
import { deleteItinerary } from "@/services/itinerary.service";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ConfirmDeleteModalProps {
    accessToken: string;
    itineraryId: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ConfirmDeleteModal({ accessToken, itineraryId, isOpen, onClose }: ConfirmDeleteModalProps) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    const [isDeleting, setIsDeleting] = useState(false);

    if (!isOpen) return null;

    async function handleDelete() {
        try {
            setIsDeleting(true)

            await deleteItinerary(accessToken, itineraryId)

            onClose()
        } catch (error) {
            console.error("Erro ao excluir itinerário:", error)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={onClose}>
            <div className="relative w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}>
                <button type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 text-secondary-color transition-colors hover:text-red-500">
                    <X className="cursor-pointer" />
                </button>

                <h1 className="text-xl font-medium text-primary-color">
                    {texts.deleteItinerary.title}
                </h1>

                <p className="mt-2 text-sm text-secondary-color">
                    {texts.deleteItinerary.text}
                </p>

                <div className="mt-8 flex justify-between gap-3">
                    <button onClick={onClose}
                        disabled={isDeleting}
                        className="cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-sm text-primary-color transition-colors hover:bg-gray-100 disabled:opacity-50">
                        {texts.cancel}
                    </button>

                    <button onClick={handleDelete}
                        disabled={isDeleting}
                        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-600 disabled:opacity-50">
                        {isDeleting ? "Excluindo..." : texts.delete}
                    </button>
                </div>
            </div>
        </div>
    );
}