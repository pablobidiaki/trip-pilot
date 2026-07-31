export default function Input({icon, title, placeholder, type, required}){
    return(
        <div className="inline-block">
            <div className="border-2 rounded-2xl border-gray-300 flex items-center p-1">
                <span className="text-main-primary-color m-2">{icon}</span>
                <div>
                    <p>{title}</p>
                    <input className="w-full outline-none" type={type} placeholder={placeholder} required={required}/>
                </div>
            </div>
        </div>
    )
}