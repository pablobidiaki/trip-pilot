import texts from "@/constants/texts";
import { X } from "lucide-react";
import Link from "next/link";

interface ImageFullScreenProps {
    title: string;
    image: string;
    description: string
    isOpen: boolean,
    price: number
    onClick: () => void
}

export default function ImageFullScreen({ title, image, description, price, isOpen, onClick }: ImageFullScreenProps) {
    return (
        <div onClick={onClick}>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
                        <button className="cursor-pointer absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80" onClick={onClick}>
                            <X size={20} />
                        </button>

                        <h1 className="text-2xl font-medium text-primary-color text-center"> {title} </h1>
                        <p className="text-second-color text-center">{description}</p>
                        <p className="text-green-600 font-semibold text-center mb-4">{price === 0 ? texts.free : `${texts.real} ${price.toLocaleString("pt-BR")} ${texts.per_person}`}</p>
                        <img src={image}
                            alt={title}
                            className="max-h-[70vh] w-full object-contain"
                        />
                        <p className="text-center text-second-color text-sm font-light mt-5">{texts.itinerary.pexel_credits}
                            <Link href={"https://www.pexels.com/pt-br/"} target="_blank" className="text-link-color"> Pexels.</Link>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}