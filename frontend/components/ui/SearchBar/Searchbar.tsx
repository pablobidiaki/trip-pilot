import { Search } from "lucide-react"

interface SearchBarProps{
    search: string
    placeholder: string
    tailwindTags?: string
    setSearch: (value: string) => void
}

export default function SearchBar({search, placeholder, tailwindTags, setSearch}: SearchBarProps){
    return(
        <div className={`flex justify-between w-full bg-white border border-gray-100 p-2 rounded-2xl ${tailwindTags}
            xl:w-fit
        `}>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className="text-primary-color w-full outline-none" placeholder={placeholder}/>
            <div onClick={() => setSearch(search)} className="bg-blue-600 p-2 rounded-full">
                <Search className="cursor-pointer text-white"/>
            </div>
        </div>
    )
}