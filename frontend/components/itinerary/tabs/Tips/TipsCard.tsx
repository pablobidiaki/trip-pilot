import texts from "@/constants/texts"
import { CircleDollarSign, ShoppingCart, Van, WifiHigh } from "lucide-react"

interface TipsCardProps{
    title: string
    text: string
}

export default function TipsCard({title, text}: TipsCardProps){
    const getIcon = (title: string) => {
        if (title === texts.tips.transport) return <Van size={30}/> 
        if (title === texts.tips.internet) return <WifiHigh size={30}/> 
        if (title === texts.tips.money) return <CircleDollarSign size={30}/> 
        if (title === texts.tips.shop) return <ShoppingCart size={30}/> 
    }
    return(
        <div className="mx-4 bg-gray-50 rounded-2xl p-2 mb-5">
            <span className="flex w-fit mx-auto">{getIcon(title)}</span>
            <h1 className="text-center text-primary-color text-2xl font-medium">{title}</h1>
            <p className="text-center text-second-color mt-2">{text}</p>
        </div>
    )
}