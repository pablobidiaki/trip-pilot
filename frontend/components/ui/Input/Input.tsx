import texts from "@/constants/texts";
import { ReactNode } from "react";

interface InputProps {
    icon: ReactNode,
    title: string,
    placeholder: string,
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required: boolean
}

export default function Input({ icon, title, placeholder, type, value, onChange, required }: InputProps) {
    return (
        <div className="inline-block">
            <div className="border-2 rounded-2xl border-gray-300 flex items-center p-1">
                <span className="text-main-primary-color m-2">{icon}</span>
                <div>
                    <p>{title}</p>
                    <input min={title == texts.form.budget ? 1500 : 1}
                        className={`text-second-color w-full outline-none ${type === 'date' ? "w-full rounded-xl border  border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:transition [&::-webkit-calendar-picker-indicator]:hover:opacity-100" : ""}`}
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