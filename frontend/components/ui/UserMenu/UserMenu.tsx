"use client"

import { useState } from "react"
import Link from "next/link"
import { LogOut, User } from "lucide-react"
import { signOut } from "next-auth/react"

interface UserMenuProps {
    image?: string | null
    name?: string | null
    email?: string | null
}

export default function UserMenu({ image, name, email}: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <img src={image ? image : "/imgs/icons/user.png"} alt="Foto do usuário" className={`w-8.75 h-8.75 rounded-full object-cover ${image ? '' : 'bg-white'}`} />
            </div>

            {isOpen && (
                <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <img src={image ? image : "/imgs/icons/user.png"} alt="user photo" className="w-10 h-10 rounded-full object-cover" />

                            <div className="min-w-0">
                                <p className="font-semibold text-gray-800 truncate"> {name} </p>
                                <p className="text-sm text-gray-500 truncate">{email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 transition">
                            <User size={18} />
                            <span className="text-sm">Meu perfil</span>
                        </Link>

                        <button onClick={() => signOut()} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 transition text-left">
                            <LogOut size={18} />
                            <span className="text-sm">Sair</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}