import texts from "@/constants/texts";
import { StarIcon } from "lucide-react";

interface ReviewBarProps {
    rating: number
    reviews?: number
}

export default function ReviewBar({ rating, reviews }: ReviewBarProps) {
    return (
        <div className="flex gap-2 items-center">
            <StarIcon className="fill-current text-yellow-500" size={20} />
            <StarIcon className="fill-current text-yellow-500" size={20} />
            <StarIcon className="fill-current text-yellow-500" size={20} />
            <StarIcon className="fill-current text-yellow-500" size={20} />
            <StarIcon className="fill-current text-yellow-500" size={20} />
            <div className="flex gap-5 ml-1">
                <p className="text-primary-color font-medium">{rating}</p>
                {reviews &&
                    <p className="text-second-color font-light">{reviews} {texts.accommodations.reviews}</p>
                }
            </div>
        </div>
    )
}