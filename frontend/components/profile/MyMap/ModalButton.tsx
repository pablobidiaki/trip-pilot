interface ModalButtonProps{
    text: string
    tailwindTags: string
}

export default function ModalButton({text, tailwindTags}: ModalButtonProps){
    return(
        <button className={`w-56 mx-2 p-1 mb-1 text-center rounded-sm cursor-pointer lg:p-2 ${tailwindTags}`}>
            {text}
        </button>
    )
}