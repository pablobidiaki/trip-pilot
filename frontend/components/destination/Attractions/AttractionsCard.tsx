import texts from "@/constants/texts"

interface AttractionsCardProps {
    image: string
    name: string
    description: string
    cost_estimate: number
}

export default function AttractionsCard({ image, name, description, cost_estimate }: AttractionsCardProps) {
    return (
        <div className="border border-gray-200 rounded-2xl bg-white flex flex-col h-full overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-42 object-cover rounded-t-2xl"
            />

            <div className="flex flex-col flex-1 p-2">
                <div>
                    <p className="text-2xl font-medium text-primary-color mb-1">{name}</p>
                    <p className="text-sm text-second-color line-clamp-3">{description}</p>
                </div>

                <div className="mt-auto pt-3">
                    <span className="rounded-2xl text-green-500 px-2 py-0.5 bg-green-200 text-sm font-medium">
                        {cost_estimate == 0 ? `${texts.tours.free}` : `${texts.starting_at} ${texts.real} ${cost_estimate}`}
                    </span>
                </div>
            </div>
        </div>
    );
}