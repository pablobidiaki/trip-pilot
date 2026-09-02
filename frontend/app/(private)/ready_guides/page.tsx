import Footer from "@/components/ui/Footer/Footer";
import ReadyGuidesBanner from "@/components/ready_guides/ReadyGuidesBanner/ReadyGuidesBanner";
import ReadyGuidesBody from "@/components/ready_guides/ReadyGuidesBody/ReadyGuidesBody";

export default function ReadyGuides() {
  return (
    <div>
      <ReadyGuidesBanner />
      <ReadyGuidesBody />
      <Footer />
    </div>
  );
}
