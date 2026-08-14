interface Props{
    text: React.ReactNode,
    type: "button" | "submit" | "reset"
}

export default function WhiteButton({text, type}: Props){
    return(
        <button className="bg-white
                            px-4
                            py-2
                            rounded-xl
                            hover:scale-[1.02]
                            transition-all
                            duration-300
                            hover:shadow-xl
                            shadow-lg"
                type={type}>
            {text}
        </button>
    )
}