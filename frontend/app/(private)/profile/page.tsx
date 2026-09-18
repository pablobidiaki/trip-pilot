import OptionsSelect from "@/components/profile/OptionsSelect";
import MainContent from "@/components/profile/MainContent";

export default function Profile() {
    return(
        <div className="bg-background-color flex mt-2">
                <OptionsSelect />
                <MainContent />
        </div>
    )
}