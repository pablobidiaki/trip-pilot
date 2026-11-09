"use client";

import { useEffect } from "react";

interface PhotoModalProps {
    open: boolean;
    src: string;
    onClose: () => void;
}

export function PhotoModal({ open, src, onClose}: PhotoModalProps) {
    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30 p-4" onClick={onClose} role="dialog" aria-modal="true">
            <img src={src} onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl animate-in fade-in zoom-in-95 duration-200"/>
        </div>
    );
}