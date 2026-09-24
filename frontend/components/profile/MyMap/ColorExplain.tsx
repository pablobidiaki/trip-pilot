interface ColorExplainProps {
    color: string
    text: string
}

export default function ColorExplain({ color, text }: ColorExplainProps) {
    return (
        <div className="flex gap-1 items-center mb-1 mt-1">
            <div className={`p-2 rounded-full ${color}`} />
            <p className="text-sm font-light">{text}</p>
        </div>
    )
}