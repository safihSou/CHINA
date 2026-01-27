import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { MapSection } from "@/components/home/MapSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <TimelineSection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
