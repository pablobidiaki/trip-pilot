import { ReactNode } from "react"

interface FeatureProps {
  icon: ReactNode;
  text: string;
}

export default function Feature({icon, text}: FeatureProps){
    return(
        <div className="flex items-center gap-1">
            <span className="text-secondary-third-color">{icon}</span>
            <p className="text-second-color text-sm">{text}</p>
        </div>
    )
}