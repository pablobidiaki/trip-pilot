import DestinationBody from "@/components/destinations/DestinationBody/DestinationBody";
import DestinationsBanner from "@/components/destinations/DestinationsBanner/DestinationsBanner";
import Header from "@/components/home/Header/Header";

export default function Destinations() {
  return (
    <div>
      <DestinationsBanner />
      <DestinationBody />
    </div>
  );
}
