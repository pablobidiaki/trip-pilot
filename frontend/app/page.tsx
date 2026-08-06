import Hero from "@/components/home/Hero/Hero";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks"
import ItineraryExamples from "@/components/home/ItineraryExamples/ItineraryExamples";
import PopularDestinations from "@/components/home/PopularDestinations/PopularDestinations";
import ReadyToNextTravel from "@/components/home/ReadyToNextTravel/ReadyToNextTravel";
import WhyUse from "@/components/home/WhyUse/WhyUse";
import Footer from "@/components/home/Footer/Footer";

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
