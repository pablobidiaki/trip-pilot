import texts from "@/constants/texts";
import CTA from "@/components/ui/CTA/CTA";
import Hero from "@/components/home/Hero/Hero";
import Footer from "@/components/ui/Footer/Footer";
import ItineraryExamples from "@/components/home/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/home/PopularDestinations/PopularDestinations";
import { Toolbox } from "lucide-react";
import NextTrip from "@/components/home/NextTrip/NextTrip";
import HeroForm from "@/components/home/Hero/HeroForm";
import SevenWondersOfWorld from "@/components/home/SevenWondersOfWorld/SevenWondersOfWorld";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";

export default async function Home() {
  return (
    <div className="bg-background-color animate-[optionSelector_300ms_ease-out]">
      <Hero />
      <HowItWorks />
      <HeroForm />
      <NextTrip />
      <PopularDestinations />
      <SevenWondersOfWorld title={texts.sevenWondersOfWorld.title} filter="Maravilhas do mundo"/>
      <ItineraryExamples /> 
      <SevenWondersOfWorld title={texts.sevenWondersOfWorld.naturalTitle} filter="Maravilhas do mundo natural"/>
      <CTA icon={<Toolbox size={80} />}
        title={texts.readyToNextTravel.title}
        text={texts.readyToNextTravel.text}
        buttonText={texts.readyToNextTravel.buttonText}
        isHomePage={true}
      />
      <Footer />
    </div>
  );
}
