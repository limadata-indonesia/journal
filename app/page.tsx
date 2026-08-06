import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AlurLayanan } from "@/components/AlurLayanan";
import { BeforeAfterEditor } from "@/components/BeforeAfterEditor";
import { PricingPreview } from "@/components/PricingPreview";
import { Testimonials } from "@/components/Testimonials";
import { SampleManuscriptViewer } from "@/components/SampleManuscriptViewer";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <PricingPreview />
      <AlurLayanan />
      <BeforeAfterEditor />
      <Testimonials />
      <SampleManuscriptViewer />
      <FAQ />
    </main>
  );
}
