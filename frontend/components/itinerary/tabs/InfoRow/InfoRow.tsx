interface InfoRowProps {
    icon: React.ReactNode
    label: string
    value: string
}

export default function InfoRow({ icon, label, value }: InfoRowProps) {
    return (
        <div className="flex items-start gap-3 min-h-12 border-b border-gray-200 pb-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-gray-600 shrink-0">
                {icon}
            </div>

            <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-second-color">
                    {label}
                </span>

                <span className="text-base text-primary-color leading-5 line-clamp-2">
                    {value}
                </span>
            </div>
        </div>
    )
}