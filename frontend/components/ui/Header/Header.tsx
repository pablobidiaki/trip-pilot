"use client"

import { useSession } from "next-auth/react"
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
    const { data: session, status } = useSession()

    return (
        <header className="max-w-screen">
            <div className="hidden md:block">
                <DesktopHeader session={session} status={status} />
            </div>

            <div className="block md:hidden">
                <MobileHeader session={session} status={status} />
            </div>
        </header>
    )
}