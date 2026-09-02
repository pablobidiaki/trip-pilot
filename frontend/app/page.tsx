import texts from "@/constants/texts";
import CTA from "@/components/ui/CTA/CTA";
import Hero from "@/components/home/Hero/Hero";
import Footer from "@/components/ui/Footer/Footer";
import WhyUse from "@/components/home/WhyUse/WhyUse";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks"
import ItineraryExamples from "@/components/home/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/home/PopularDestinations/PopularDestinations";

import { Toolbox } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background-color">
      <Hero />
      <HowItWorks />
      <PopularDestinations/>
      <ItineraryExamples />
      <WhyUse />
      <CTA icon={<Toolbox size={80} />} title={texts.ready_to_next_travel.title} text={texts.ready_to_next_travel.text} buttonText={texts.ready_to_next_travel.button_text} />
      <Footer />
    </div>
  );
}
