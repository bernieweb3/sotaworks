import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ActivitiesSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
