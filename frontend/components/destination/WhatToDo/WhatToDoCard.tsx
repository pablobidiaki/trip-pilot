interface WhatToDoCardProps{
    title: string
    texts: string[]
}

export default function WhatToDoCard({title, texts}: WhatToDoCardProps){
    return(
        <div className="bg-white rounded-2xl border border-gray-200 p-2">
            <h1 className="text-primary-color font-medium text-xl mb-2">{title}</h1>
            {texts.map((text) => (
                <p className="text-second-color font-light text-sm">- {text}</p>
            ))}
        </div>
    )
}