import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Workflow } from "@/components/Workflow";
import { ManuscriptAnalyzer } from "@/components/ManuscriptAnalyzer";
import { BeforeAfterEditor } from "@/components/BeforeAfterEditor";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SubjectExpertise } from "@/components/SubjectExpertise";
import { PublicationJourney } from "@/components/PublicationJourney";
import { PricingPreview } from "@/components/PricingPreview";
import { Testimonials } from "@/components/Testimonials";
import { SampleManuscriptViewer } from "@/components/SampleManuscriptViewer";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Services />
      <Workflow />
      <ManuscriptAnalyzer />
      <BeforeAfterEditor />
      <WhyChooseUs />
      <SubjectExpertise />
      <PublicationJourney />
      <PricingPreview />
      <Testimonials />
      <SampleManuscriptViewer />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
