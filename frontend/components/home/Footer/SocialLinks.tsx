import texts from "@/constants/texts";
import Image from "next/image";

export default function SocialLinks(){
    return(
        <div className="w-1/6">
            <Image src={"/imgs/icons/trip_pilot.png"} 
                   alt="TripPilot icon"
                   width={50}
                   height={50}
            />

            <p className="text-second-color text-sm mt-3">{texts.footer.social_links_text}</p>

            <div className="flex gap-5 mt-3">
                <Image src={"/imgs/icons/instagram.png"} 
                   alt="Instagram icon"
                   width={30}
                   height={30}
                />
                <Image src={"/imgs/icons/facebook.png"} 
                    alt="Facebook icon"
                    width={30}
                    height={30}
                />
                <Image src={"/imgs/icons/tiktok.png"} 
                    alt="TikTok icon"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    )
}