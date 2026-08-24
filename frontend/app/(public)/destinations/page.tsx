import DestinationBody from "@/components/destinations/DestinationsBody/DestinationsBody";
import DestinationsBanner from "@/components/destinations/DestinationsBanner/DestinationsBanner";
import Footer from "@/components/home/Footer/Footer";

export default function Destinations() {
  return (
    <div>
      <DestinationsBanner/>
      <DestinationBody />
      <Footer />
    </div>
  );
}
