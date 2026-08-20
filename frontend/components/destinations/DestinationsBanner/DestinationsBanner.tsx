import texts from "@/constants/texts";
import Image from "next/image";

export default function DestinationsBanner(){
    return(
        <div className="relative">
            <Image src={"/imgs/destinations/background.jpg"} 
                   alt="background image"
                   width={1150}
                   height={1150}
                   className="absolute w-screen max-h-[30vh] brightness-70"
            />

            <div className="absolute text-white max-w-1/3 my-12 mx-4">
                <h1 className="text-5xl font-medium">{texts.destinations.title}</h1>
                <p className="text-[#c5c5c5] font-medium">{texts.destinations.subtitle}</p>
            </div>
        </div>
    )
}