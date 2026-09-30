import DestinationBody from "@/components/destinations/DestinationsBody/DestinationsBody";
import DestinationsBanner from "@/components/destinations/DestinationsBanner/DestinationsBanner";
import Footer from "@/components/ui/Footer/Footer";
import { auth } from "@/auth"
import { getUserIdByEmail } from "@/services/user.service"

export default async function Destinations() {
  let user
  const session = await auth()
  if (session) { user = await getUserIdByEmail(session?.accessToken!, session?.user?.email)}

  return (
    <div>
      <DestinationsBanner />
      <DestinationBody user={user}/>
      <Footer />
    </div>
  );
}
