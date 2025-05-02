
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  useEffect(() => {
    // Load Three.js dynamically to avoid SSR issues
    const loadScript = async () => {
      try {
        await import('three');
        console.log("Three.js loaded successfully");
      } catch (err) {
        console.error("Error loading Three.js:", err);
      }
    };

    loadScript();
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      
      {/* Overlay gradient for enhanced visual effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent to-background/80 opacity-70 z-[-1]"></div>
    </div>
  );
};

export default Index;
