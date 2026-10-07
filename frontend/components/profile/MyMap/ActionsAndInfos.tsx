import texts from "@/constants/texts";
import ColorExplain from "./ColorExplain";
import MapButton from "./MapButton";
import { Maximize, ZoomIn, ZoomOut } from "lucide-react";

interface ActionsAndInfosProps{
    handleResetPosition: () => void
    handleZoomIn: () => void
    handleZoomOut: () => void
    placeholderCountry:string
}

export default function ActionsAndInfos({placeholderCountry, handleResetPosition, handleZoomIn, handleZoomOut}: ActionsAndInfosProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="bottom-2 h-fit left-2 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shadow-lg text-[10px] sm:text-sm min-w-0 sm:min-w-50 max-w-[55%] sm:max-w-none
                lg:absolute
            ">
                <p className="hidden sm:block">{placeholderCountry}</p>
                <ColorExplain color="bg-secondary-third-color" text={texts.profile.visited} />
                <ColorExplain color="bg-orange-400" text={texts.profile.wantVisit} />
                <ColorExplain color="bg-gray-600" text={texts.profile.selected} />
                <ColorExplain color="bg-[#E2E8F0]" text={texts.profile.countries} />
            </div>

            <div>
                <MapButton onClick={handleResetPosition} icon={<Maximize />} tailwindTags="bottom-2 " toolTipText={texts.profile.originPosition} />
                <MapButton onClick={handleZoomIn} icon={<ZoomIn />} tailwindTags="bottom-14 " toolTipText={texts.profile.zoom} />
                <MapButton onClick={handleZoomOut} icon={<ZoomOut />} tailwindTags="bottom-26 " toolTipText={texts.profile.zoomOut} />
            </div>
        </div>
    )
}