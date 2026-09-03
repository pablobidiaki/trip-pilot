import { X } from "lucide-react";

interface ImageFullScreenProps {
    title: string;
    image: string;
    description: string
    isOpen: boolean,
    onClick: () => void
}

export default function ImageFullScreen({ title, image, description, isOpen, onClick }: ImageFullScreenProps) {
    return (
        <div onClick={onClick}>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
                        <button className="cursor-pointer absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80" onClick={onClick}>
                            <X size={20} />
                        </button>

                        <h1 className="text-2xl font-medium text-primary-color"> {title} </h1>
                        <p className="mb-4 text-second-color">{description}</p>

                        <img src={image}
                            alt={title}
                            className="max-h-[70vh] w-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}