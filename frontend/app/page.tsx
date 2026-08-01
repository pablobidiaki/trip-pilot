import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import ItineraryExamples from "@/components/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/PopularDestinations/PopularDestinations";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      <ItineraryExamples />
      <br />
    </div>
  );
}
