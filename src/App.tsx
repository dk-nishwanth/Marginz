//app.tsx
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

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

  const navClass = scrolled 
    ? "shadow-xl bg-white/95 backdrop-blur-xl border-b border-gray-200" 
    : "shadow-lg bg-white backdrop-blur-xl border-b border-gray-200";

  return (
    <div className="bg-gray-100 w-full overflow-x-hidden">
      {/* ====================== NAVBAR ====================== */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ${navClass}`}
        style={{ zIndex: 99999 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* LOGO - Black for visibility */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-0 py-2.5 cursor-pointer"
            >
              <span className="text-black text-xl font-black tracking-wide">MARGINZ</span>
            </motion.div>

            {/* CENTER NAVIGATION */}
            <div className="hidden md:flex items-center gap-12 xl:gap-16 absolute left-1/2 -translate-x-1/2">
              {["About Us", "Service", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="relative text-[15px] text-gray-700 hover:text-black font-medium transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* RIGHT SIDE - SUBSCRIBE - Black text */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white text-black text-[15px] font-bold rounded-full border-2 border-black hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-700 hover:text-black transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* MOBILE MENU */}
          <motion.div
            initial={false}
            animate={{ 
              height: mobileMenuOpen ? 'auto' : 0,
              opacity: mobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2 border-t border-gray-200">
              {["About Us", "Service", "Contact", "Subscribe"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 5 }}
                  className="block w-full text-left py-3 px-4 text-[15px] text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

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