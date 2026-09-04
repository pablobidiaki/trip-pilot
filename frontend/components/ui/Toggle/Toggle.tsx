interface ToggleProps {
    isGrid: boolean;
    onChange: (value: boolean) => void;
}

export default function Toggle({isGrid, onChange}: ToggleProps) {
    return (
        <div className="relative flex gap-2 mt- ml-4 bg-white p-2 h-fit rounded-2xl border border-gray-200 shadow-2xl shadow-gray-400 max-w-40 min-w-40 justify-center">
            <p className={`font-medium ${isGrid ? "text-second-color" : "text-primary-color"}`}>Abas</p>
            
            <button
                onClick={() => onChange(!isGrid)}
                className={`
                relative
                w-12
                h-6
                rounded-full
                transition-colors
                duration-200
                bg-gray-400
            `}
            >
                <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${isGrid ? "translate-x-6" : "translate-x-0"}`}
                />
            </button>
            <p className={`font-medium ${isGrid ? "text-primary-color": "text-second-color"}`}>Grid</p>
        </div>
    );
}