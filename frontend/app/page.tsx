import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import ItineraryExamples from "@/components/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/PopularDestinations/PopularDestinations";
import WhyUse from "@/components/WhyUse/WhyUse";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      <ItineraryExamples />
      <WhyUse />
      <br />
    </div>
  );
}
