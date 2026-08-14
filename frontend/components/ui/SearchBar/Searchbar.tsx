import { Search } from "lucide-react"

interface SearchBarProps{
    placeholder: string,
    tailwindTags?: string
}

export default function SearchBar({placeholder, tailwindTags}: SearchBarProps){
    return(
        <div className={`flex justify-between bg-white border p-2 rounded-2xl ${tailwindTags}`}>
            <input className="text-primary-color w-full outline-none" placeholder={placeholder}/>
            <div className="bg-blue-600 p-2 rounded-full">
                <Search/>
            </div>
        </div>
    )
}