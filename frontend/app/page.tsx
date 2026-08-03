import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import ItineraryExamples from "@/components/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/PopularDestinations/PopularDestinations";
import ReadyToNextTravel from "@/components/ReadyToNextTravel/ReadyToNextTravel";
import WhyUse from "@/components/WhyUse/WhyUse";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      <ItineraryExamples />
      <WhyUse />
      <ReadyToNextTravel />
      <Footer />
    </div>
  );
}
