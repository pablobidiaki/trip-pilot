import Footer from "@/components/home/Footer/Footer";
import Header from "@/components/home/Header/Header";
import ReadyGuide from "@/components/ready_guides/ReadyGuide/ReadyGuide";
import { getReadyGuide } from "@/services/readyGuides.service";
import { notFound } from 'next/navigation'

interface ReadyGuidesProps {
  params: Promise<{ id: string }>
}

export default async function ReadyGuidePage({ params }: ReadyGuidesProps) {
  const { id } = await params;

  const guide = await getReadyGuide(id)

  if (!guide || guide.length === 0) 
          notFound()

  return (
    <div>
      <Header />
      <ReadyGuide guide={guide}/>
      <Footer />
    </div>
  )
}