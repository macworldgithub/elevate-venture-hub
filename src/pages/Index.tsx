import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import TechnologySection from "@/components/landing/TechnologySection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import ImpactSection from "@/components/landing/ImpactSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TechnologySection />
      <ArchitectureSection />
      <RoadmapSection />
      <ImpactSection />
      <CTASection />
    </div>
  );
};

export default Index;
