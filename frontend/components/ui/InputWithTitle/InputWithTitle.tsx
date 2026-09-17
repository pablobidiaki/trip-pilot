import { ReactNode } from "react"

interface InputWithTitleProps{
    icon: ReactNode,
    title: string,
    placeholder: string,
    inputType: string,
    tailwindTags?: string,
    required?: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputWithTitle({icon, title, placeholder, inputType, tailwindTags, required, value, onChange}:InputWithTitleProps){
    return(
        <div className="w-full">
            <p className="mb-1 text-primary-color font-medium">{title}</p>
              <div className={`border flex items-center p-2 rounded-xl mb-5 ${tailwindTags}`} >
                <span>{icon}</span>
                <input type={inputType} className="outline-none w-full ml-2 px-1" placeholder={placeholder} value={value} onChange={onChange} required={required} />
              </div>
        </div>
    )
}