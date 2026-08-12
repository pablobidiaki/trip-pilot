import { ReactNode } from "react";

interface InputProps{
    icon: ReactNode,
    title: string,
    placeholder: string,
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required: boolean
}

export default function Input({icon, title, placeholder, type, value, onChange, required}: InputProps){
    return(
        <div className="inline-block">
            <div className="border-2 rounded-2xl border-gray-300 flex items-center p-1">
                <span className="text-main-primary-color m-2">{icon}</span>
                <div>
                    <p>{title}</p>
                    <input className="text-second-color w-full outline-none" type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
                </div>
            </div>
        </div>
    )
}