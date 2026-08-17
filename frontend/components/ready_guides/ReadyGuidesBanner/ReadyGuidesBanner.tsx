import Header from "@/components/home/Header/Header";
import SearchBar from "@/components/ui/SearchBar/Searchbar";
import texts from "@/constants/texts";

export default function ReadyGuidesBanner() {
    return (
        <div className="relative overflow-hidden pb-15">
            <img src={"/imgs/ready_guides/background.jpg"}
                alt="Banner"
                className="absolute inset-0 h-full w-full object-cover z-0 brightness-40"
            />
            <div className="relative z-10 bg-white/20">
                <Header />
            </div>
            <div className="relative z-10 mt-5 text-white">
                <h1 className="mx-auto text-center text-7xl max-w-3xl font-medium">{texts.ready_guides.title}</h1>
                <h2 className="mx-auto text-center mt-1 text-2xl font-thin max-w-xl">{texts.ready_guides.subtitle}</h2>
                <SearchBar placeholder={texts.ready_guides.search_bar_placeholder} tailwindTags="max-w-3xl mx-auto mt-5" />
            </div>
        </div>
    )
}