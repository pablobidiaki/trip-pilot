import { Toolbox } from "lucide-react";

import Hero from "@/components/home/Hero/Hero";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks"
import ItineraryExamples from "@/components/home/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/home/PopularDestinations/PopularDestinations";
import CTA from "@/components/ui/CTA/CTA";
import WhyUse from "@/components/home/WhyUse/WhyUse";
import Footer from "@/components/home/Footer/Footer";

import texts from "@/constants/texts";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      <ItineraryExamples />
      <WhyUse />
      <CTA icon={<Toolbox size={80} />} title={texts.ready_to_next_travel.title} text={texts.ready_to_next_travel.text} buttonText={texts.ready_to_next_travel.button_text} />
      <Footer />
    </div>
  );
}
