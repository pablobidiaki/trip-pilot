import { LoaderCircle } from "lucide-react";

export default function Loading(){
    return (
        <div className="w-full h-full flex items-center justify-center">
            <LoaderCircle size={50} className="transition-all animate-spin "/>
        </div>
    )
}