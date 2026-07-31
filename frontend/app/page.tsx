import Header from "@/components/header/Header"
import Feature from "@/components/features/Feature";

import { Plane, NotebookPen, BrainCircuit, FileUser, Clock, ScrollText } from "lucide-react";

import texts from "@/constants/texts"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="imgs/background.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="Background image"
      />

      <Header />

      <h1 className="text-primary-color text-7xl font-medium max-w-2/6 mt-8 mx-4"> 
        {texts.home.title} 
        <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> {texts.home.ai} </span>
      </h1> 
      <p className="text-second-color text-lg max-w-1/4 mx-4 mt-5">{texts.home.main_text}</p>

      <div className="flex gap-4 mx-4">
        <Feature icon={<FileUser size={20}/>} text={texts.home.customized}/>
        <Feature icon={<Clock size={20}/>} text={texts.home.save_time_and_money}/>
        <Feature icon={<ScrollText size={20}/>} text={texts.home.script_for_ia}/>
      </div>
    </div>
  );
}
