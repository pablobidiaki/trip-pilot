import Image from "next/image";
import Link from "next/link";

import WhiteButton from "@/components/Buttons/WhiteButton"
import GradientButton from "@/components/Buttons/GradientButton"

export default function Header(){
    return(
        <header>
            <div className="text-primary-color font-medium flex justify-between px-4 py-3 items-center">
                <div>
                    <Link href={'/'}>
                        <Image
                            src="/imgs/icons/trip_pilot.png"
                            alt="Logo TripPilot"
                            width={40}
                            height={40}
                            priority
                        />
                    </Link>
                </div>
                
                <div className="flex gap-18">
                    <p><Link href={'/create_script'}>Criar Roteiro </Link></p>
                    <p><Link href={'/ready_guides'}>Guias prontos</Link></p>
                    <p><Link href={'/destinations'}>Destinos</Link></p>
                    <p><Link href={'/pro'}>Pro 👑</Link></p>
                </div>
                

                <div className="flex gap-5">
                    <WhiteButton text={<Link href={'/login'}>Entrar</Link>}/>
                    <GradientButton text={ <Link href={'/register'}>Começar Grátis</Link>}/>
                </div>
            </div>
        </header>
    )
}