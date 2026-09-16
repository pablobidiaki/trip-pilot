""

import texts from "@/constants/texts";
import { ReactNode, useRef } from "react";

interface InputProps {
    icon: ReactNode,
    title: string,
    placeholder: string,
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required: boolean
    tailwindTags?: string
}

export default function Input({ icon, title, placeholder, type, value, onChange, required, tailwindTags }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div onClick={() => inputRef.current?.focus()} className={`inline-block ${tailwindTags}`}>
            <div className="border-2 rounded-2xl border-gray-300 flex items-center p-1 hover:border-blue-300 cursor-pointer">
                <span className="text-main-primary-color m-2">{icon}</span>
                <div>
                    <p>{title}</p>
                    <input  ref={inputRef}
                        min={title == texts.form.budget ? 1500 : 1}
                        className={`text-second-color w-full outline-none `}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required} />
                </div>
            </div>
        </div>
    )
}