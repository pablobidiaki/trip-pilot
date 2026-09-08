import texts from "@/constants/texts";

interface ProgressBarProps {
    value: number;
    maxValue: number;
}

export default function ProgressBar({ value, maxValue, }: ProgressBarProps) {
    const percentage = Math.min((value / maxValue) * 100, 100);

    return (
        <div className="w-full">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-color rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}/>
            </div>

            <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-500">{texts.real} {value.toLocaleString("pt-BR")}</span>
                <span className="text-gray-500">{percentage.toFixed(0)}%</span>
            </div>
        </div>
    );
}