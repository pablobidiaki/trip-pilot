import Footer from "@/components/ui/Footer/Footer";
import ReadyGuidesBanner from "@/components/ready_guides/ReadyGuidesBanner/ReadyGuidesBanner";
import ReadyGuidesBody from "@/components/ready_guides/ReadyGuidesBody/ReadyGuidesBody";
import { auth } from "@/auth"
import { getUserIdByEmail } from "@/services/user.service"

export default async function ReadyGuides() {
  let user 
  const session = await auth()
  if (session) user = await getUserIdByEmail(session?.accessToken!, session?.user?.email)
  return (
    <div>
      <ReadyGuidesBanner />
      <ReadyGuidesBody user={user}/>
      <Footer />
    </div>
  );
}
