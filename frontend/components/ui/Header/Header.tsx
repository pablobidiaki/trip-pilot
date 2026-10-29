"use client"

import { useSession } from "next-auth/react"
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface HeaderProps{
    backgroundLight?: boolean
}

export default function Header({backgroundLight}: HeaderProps) {
    const { data: session, status } = useSession()
    console.log(session)
    return (
        <header className="max-w-screen">
            <div className="hidden md:block">
                <DesktopHeader session={session} status={status} backgroundLight={backgroundLight}/>
            </div>

            <div className="block md:hidden">
                <MobileHeader session={session} status={status} />
            </div>
        </header>
    )
}