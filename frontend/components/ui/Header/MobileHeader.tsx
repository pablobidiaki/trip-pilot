import Image from "next/image";
import Link from "next/link";
import UserMenu from "../UserMenu/UserMenu";
import WhiteButton from "../Buttons/WhiteButton";
import GradientButton from "../Buttons/GradientButton";

interface MobileHeaderProps {
    session: any;
    status: string
}


export default function MobileHeader({ session, status }: MobileHeaderProps) {
    return (
        <div className="flex justify-between items-center px-2 py-2">
            <Link href={'/'}>
                <Image src="/imgs/icons/trip_pilot.png"
                    alt="Logo TripPilot"
                    width={40}
                    height={40}
                    priority
                />
            </Link>

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
    )
}