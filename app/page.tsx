import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AlurLayanan } from "@/components/AlurLayanan";
import { BeforeAfterEditor } from "@/components/BeforeAfterEditor";
import { PricingPreview } from "@/components/PricingPreview";
import { Testimonials } from "@/components/Testimonials";
import { RekomendasiJurnalSection } from "@/components/RekomendasiJurnalSection";
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
      <RekomendasiJurnalSection />
      <FAQ />
    </main>
  );
}
