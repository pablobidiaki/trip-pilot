interface ModalButtonProps{
    text: string
    tailwindTags: string
    onClick?: () => void
}

export default function ModalButton({text, tailwindTags, onClick}: ModalButtonProps){
    return(
        <button onClick={onClick} className={`w-full mx-2 p-1 mb-1 text-center rounded-sm cursor-pointer lg:p-2 ${tailwindTags}`}>
            {text}
        </button>
    )
}