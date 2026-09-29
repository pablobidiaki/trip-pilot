import Footer from "@/components/ui/Footer/Footer";
import ReadyGuidesBanner from "@/components/ready_guides/ReadyGuidesBanner/ReadyGuidesBanner";
import ReadyGuidesBody from "@/components/ready_guides/ReadyGuidesBody/ReadyGuidesBody";
import { auth } from "@/auth"
import { getUserIdByEmail } from "@/services/user.service"

export default async function ReadyGuides() {
  const session = await auth()
  const user = await getUserIdByEmail(session?.user?.email)
  return (
    <div>
      <ReadyGuidesBanner />
      <ReadyGuidesBody user={user}/>
      <Footer />
    </div>
  );
}
