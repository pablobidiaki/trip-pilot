import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full">
            <ul className="max-w-7xl bg-main-primary-color text-white flex justify-between px-2 py-3 mx-auto items-center">
                <li>
                    <Link href={'/'}>
                        <Image
                            src="/trip_pilot_black.png"
                            alt="Logo TripPilot"
                            width={35}
                            height={35}
                            priority
                        />
                    </Link>
                </li>
                <li><Link href={'/create_script'}> Criar Roteiro </Link></li>
                <li><Link href={'/ready_guides'}>Guias prontos</Link></li>
                <li><Link href={'/destinations'}>Destinos</Link></li>
                <li><Link href={'/pro'}>Pro 👑</Link></li>
                <li>BRL R$</li>

                <div className="flex gap-5">
                    <li><Link href={'/login'}>Entrar</Link></li>
                    <li><Link href={'/register'}>Começar Grátis</Link></li>
                </div>
            </ul>
        </header>
    )
}