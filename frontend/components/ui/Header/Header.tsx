"use client"

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"

import WhiteButton from "@/components/ui/Buttons/WhiteButton"
import GradientButton from "@/components/ui/Buttons/GradientButton"
import texts from "@/constants/texts";
import UserMenu from "../UserMenu/UserMenu";

export default function Header() {
    const { data: session, status } = useSession()
    return (
        <header>
            <div className="bg-transparent text-primary-color font-medium flex justify-between px-4 py-3 items-center">
                <div>
                    <Link href={'/'}>
                        <Image src="/imgs/icons/trip_pilot.png"
                            alt="Logo TripPilot"
                            width={40}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                <div className="flex gap-18">
                    <p><Link href={'/'}>{texts.header.createScript}</Link></p>
                    <p><Link href={'/ready_guides'}>{texts.header.readyGuides}</Link></p>
                    <p><Link href={'/destinations'}>{texts.header.destinations}</Link></p>
                    <p><Link href={'/pro'}>{texts.header.pro}</Link></p>
                </div>

                {status === "loading" ? (
                    <div />
                ) : session ? (
                    <UserMenu
                        image={session.user?.image}
                        name={session.user?.name}
                        email={session.user?.email}
                    />
                ) : (
                    <div className="flex gap-5">
                        <WhiteButton
                            text={<Link href="/login">Entrar</Link>}
                            type="button"
                        />

                        <GradientButton
                            text={<Link href="/register">Começar Grátis</Link>}
                            type="button"
                        />
                    </div>
                )}
            </div>
        </header>
    )
}