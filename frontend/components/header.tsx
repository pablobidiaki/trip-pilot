import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full">
            <div className="max-w-7xl text-primary-color font-medium flex justify-between px-4 py-3 mx-auto items-center">
                <div>
                    <Link href={'/'}>
                        <Image
                            src="/trip_pilot_black.png"
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
                    <button className="bg-white
                                        px-4
                                       py-2
                                       rounded-xl
                                       hover:scale-[1.02]
                                       transition-all
                                       duration-300
                                       hover:shadow-xl
                                       shadow-lg">
                        <Link href={'/login'}>Entrar</Link>
                    </button>
                    <button className="rounded-xl
                                       bg-linear-to-r
                                       from-blue-600
                                       to-violet-600
                                       px-4
                                       py-2
                                       font-semibold
                                       text-white
                                       shadow-lg
                                       shadow-blue-500/20z'
                                       transition-all
                                       duration-300
                                       hover:scale-[1.02]
                                       hover:from-blue-700
                                       hover:to-violet-700
                                       hover:shadow-xl
                                       hover:shadow-violet-500/30
                                       active:scale-[0.98]">
                        <Link href={'/register'}>Começar Grátis</Link>
                    </button>
                </div>
            </div>
        </header>
    )
}