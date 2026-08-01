import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import PopularDestinations from "@/components/PopularDestinations/PopularDestinations";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      <br />
    </div>
  );
}
