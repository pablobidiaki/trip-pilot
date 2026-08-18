import Footer from "@/components/home/Footer/Footer";
import Header from "@/components/home/Header/Header";
import ReadyGuide from "@/components/ready_guides/ReadyGuide/ReadyGuide";

export default async function ReadyGuidePage() {
  return (
    <div>
        <Header />
        <ReadyGuide />
        <Footer />
    </div>
  )
}