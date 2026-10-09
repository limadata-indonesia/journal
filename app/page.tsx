import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Challenges } from "@/components/Challenges";
import { Services } from "@/components/Services";
import { PricingPreview } from "@/components/PricingPreview";
import { AlurLayanan } from "@/components/AlurLayanan";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Challenges />
      <Services />
      <PricingPreview />
      <AlurLayanan />
      <Testimonials />
      <FAQ />
      <Blog />
    </main>
  );
}
