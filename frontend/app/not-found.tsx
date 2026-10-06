import Header from "@/components/ui/Header/Header";
import texts from "@/constants/texts";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="relative bg-background-color">
            <Image src={"/imgs/404/404_background.png"} alt="Background image" width={1920} height={1080} className="absolute w-screen h-screen hidden
                lg:block lg:object-cover
            "/>
            <div className="relative">
                <Header />
            </div>
            <div className="relative mt-5 mx-2
                lg:max-w-2/6 lg:ml-32 lg:mt-80
                xl:mt-30
            ">
                <h1 className="text-9xl font-extrabold text-primary-color text-center
                    lg:text-start
                ">{texts.notFound.code}</h1>
                <h2 className="text-4xl font-bold text-primary-color mt-2 text-center
                    lg:text-start
                ">{texts.notFound.title}</h2>
                <p className="text-2xl text-second-color mt-2 text-center
                    lg:text-start
                ">{texts.notFound.text}</p>
                <Link href={"/"} className="flex items-center py-3 px-8 bg-purple-color text-white gap-2 rounded-2xl mt-7
                    md:w-fit md:mx-auto
                    lg:mx-0
                ">
                    <House />
                    <p>{texts.notFound.buttonText}</p>
                </Link>
            </div>
        </div>
    )
}