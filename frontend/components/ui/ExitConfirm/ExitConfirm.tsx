"use client"

import texts from "@/constants/texts"
import { X } from "lucide-react"
import { signOut } from "next-auth/react"

interface ExitConfirmProps {
    isOpen: boolean
    onClose: () => void
}

export default function ExitConfirm({ isOpen, onClose }: ExitConfirmProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
            <div className="relative w-100 rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute right-4 top-4 text-second-color transition-colors hover:text-red-500">
                    <X className="cursor-pointer" />
                </button>

                <h1 className="text-xl font-medium text-primary-color">{texts.exitConfirm.title}</h1>
                <p className="mt-2 text-sm text-second-color">{texts.exitConfirm.text}</p>

                <div className="mt-8 flex justify-between gap-3">
                    <button onClick={onClose} className="cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-sm text-primary-color transition-colors hover:bg-gray-100">
                        {texts.cancel}
                    </button>

                    <button onClick={() => signOut()} className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-600">
                        {texts.confirm}
                    </button>
                </div>
            </div>
        </div>
    )
}