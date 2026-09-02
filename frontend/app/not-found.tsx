import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="relative">
            <Image src={"/imgs/404/404_background.png"} alt="Background image" width={1920} height={1080} className="absolute w-screen h-screen"/>
            <div className="relative">
                <Header />
            </div>
            <div className="relative max-w-2/6 ml-32 mt-30">
                <h1 className="text-9xl font-extrabold text-primary-color">{texts.not_found.code}</h1>
                <h2 className="text-4xl font-bold text-primary-color mt-2">{texts.not_found.title}</h2>
                <p className="text-2xl text-second-color mt-2">{texts.not_found.text}</p>
                <Link href={"/"} className="flex items-center py-3 px-8 bg-purple-color text-white gap-2 rounded-2xl w-fit mt-7">
                    <House />
                    <p>{texts.not_found.button_text}</p>
                </Link>
            </div>
        </div>
    )
}