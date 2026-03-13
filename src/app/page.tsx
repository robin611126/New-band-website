import { RoyalHeroScroll } from "@/components/RoyalHeroScroll";
import { StorySection } from "@/components/StorySection";
import { StatsSection } from "@/components/StatsSection";
import { ServicePreview } from "@/components/ServicePreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { RoyalCTA } from "@/components/RoyalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-charcoal relative">
      <RoyalHeroScroll />
      <StorySection />
      <StatsSection />
      <ServicePreview />
      <TestimonialsSection />
      <RoyalCTA />
      <Footer />
    </main>
  );
}
