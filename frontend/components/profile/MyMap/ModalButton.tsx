interface ModalButtonProps{
    text: string
    tailwindTags: string
}

export default function ModalButton({text, tailwindTags}: ModalButtonProps){
    return(
        <button className={`w-56 mx-2 p-2 text-center rounded-xl cursor-pointer ${tailwindTags}`}>
            {text}
        </button>
    )
}