interface Props{
    text: React.ReactNode,
    type: "button" | "submit" | "reset"
}

export default function GradientButton({text, type}: Props){
    return(
        <button className="rounded-xl
                           bg-linear-to-r
                           from-blue-600
                           to-violet-600
                           w-full
                           px-4
                           py-2
                           font-semibold
                           text-white
                           shadow-lg
                           shadow-blue-500/20z'
                           transition-all
                           duration-300
                           hover:scale-[1.02]
                           hover:from-blue-700
                           hover:to-violet-700
                           hover:shadow-xl
                           hover:shadow-violet-500/30
                           active:scale-[0.98]"
                type={type}>
            {text}
        </button>
    )
}