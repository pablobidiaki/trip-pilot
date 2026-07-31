import Hero from "@/components/Hero/Hero";
import texts from "@/constants/texts";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <h1 className="text-primary-color">{texts.home.how_works_title}</h1>
    </div>
  );
}
