import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WhyMarginsSection } from "./components/WhyMarginsSection";
import { PartnersSection } from "./components/PartnersSection";
import { DeliverablesSection } from "./components/DeliverablesSection";
import { QualitySection } from "./components/QualitySection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CreativeCardsSection } from "./components/CreativeCardsSection";
import { AnimatedTestimonialCards } from "./components/AnimatedTestimonialCards";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ConsultationSection } from "./components/ConsultationSection";
import { InsightsSection } from "./components/InsightsSection";
import { MethodologySection } from "./components/MethodologySection";
import { Footer } from "./components/Footer";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 w-full overflow-x-hidden">
      {/* ====================== NAVBAR ====================== */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* LOGO - Dark Rounded Rectangle */}
            <div className="bg-[#1a1a1a] rounded-xl px-7 py-3 shadow-sm">
              <span className="text-white text-[17px] font-bold tracking-wide uppercase">MARGINS</span>
            </div>

            {/* CENTER NAVIGATION */}
            <div className="hidden md:flex items-center gap-12">
              {["About Us", "Service", "Contact"].map((item) => (
                <button
                  key={item}
                  className="text-[15px] text-[#1a1a1a] hover:text-black font-normal transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* RIGHT SIDE - SUBSCRIBE */}
            <div className="hidden md:block">
              <button className="text-[15px] text-[#1a1a1a] hover:text-black font-normal transition">
                Subscribe
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-[#1a1a1a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              {["About Us", "Service", "Contact", "Subscribe"].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left py-2.5 text-[15px] text-[#1a1a1a] font-normal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ====================== MAIN CONTENT ====================== */}
      <HeroSection />
      <AboutSection />
      <WhyMarginsSection />
      <PartnersSection />
      <DeliverablesSection />
      <QualitySection />
      <ProjectsSection />
      <CreativeCardsSection />
      <AnimatedTestimonialCards />
      <TestimonialsSection />
      <ConsultationSection />
      <InsightsSection />
      <MethodologySection />
      <Footer />
    </div>
  );
}
