import texts from "@/constants/texts";
import CardTitle from "../CardTitle/CardTitle";
import { Camera } from "lucide-react"
import TourCard from "./TourCard";

export default function Tours(){
    return(
        <div className="mx-4 border rounded-2xl border-gray-300 min-w-1/4 mt-8 bg-white">
            <CardTitle icon={<Camera />} title={texts.itinerary_titles.tours}/>
            <TourCard image="/imgs/itinerary/cristo.jpg"
                      title="Cristo Redentor"
                      description="Uma das 7 maravilhas do mundo, um rolê que voce nao vai esquecer."
                      price={100}
            />
            <TourCard image="/imgs/itinerary/praia.jpg"
                      title="Praia de Copacabana"
                      description="A praia mais famosa do RJ."
                      price={0}
            />
        </div>
    )
}