import texts from "@/constants/texts";
import GeneralInfoCard from "./GeneralInfoCard";

export default function GeneralItineraryInfos(){
    return(
        <div className="mx-4 max-w-2/3 border border-gray-200 rounded-2xl bg-white">
            <h1 className="text-primary-color font-medium px-2 mt-2 text-3xl">{texts.ready_guides.overview}</h1>
            <p className="px-2 text-second-color text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At autem quaerat obcaecati labore, rem nulla recusandae nostrum consequatur, pariatur vitae totam voluptatibus. Ex at maxime quaerat nam soluta. Harum, voluptas.</p>
            <div className="grid md:grid-cols-3 gap-8 items-center p-2 mt-4">
                <GeneralInfoCard image="/imgs/ready_guides/italy.jpg" days="Dia 1 - 3" title="Roma" description="Historia antiga, ruinas e gastronomia"/>
                <GeneralInfoCard image="/imgs/ready_guides/italy.jpg" days="Dia 4 - 6" title="Florença" description="Artes renascentista, museus e cultura"/>
                <GeneralInfoCard image="/imgs/ready_guides/italy.jpg" days="Dia 7 - 10" title="Veneza" description="Canais, charme e romantismo"/>
            </div>
        </div>
    )
}