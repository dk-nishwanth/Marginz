import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import imgRectangle4116 from "@/assets/6384c16fe60fd03034ea9a412bb26d7700abc522.png";
import climaxLogo from "@/assets/Climax-BTJbSW4T.jpg";
import qDotzLogo from "@/assets/Q_DoTZ-Bi9cXXpD.jpg";
import snaLogo from "@/assets/sna-1Wsv0w8K.jpg";
import zenThinkLogo from "@/assets/ZenThink-CfMcHfsG.jpg";

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="relative py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-12 md:mb-16 lg:mb-20">
      {/* Blue theme background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/45 to-indigo-500/45 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/45 to-sky-500/45 rounded-full blur-[120px]"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-black font-bold"
          style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
        >
          Partner with more than 100+ Companies
        </motion.h2>
      </motion.div>

      {/* Partner Logos Container with Gradient Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
      >
        {/* Outer glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute -inset-4 bg-gradient-to-br from-blue-500/35 via-purple-500/35 to-cyan-500/35 rounded-3xl blur-2xl"
        />

        {/* Main container with gradient background */}
        <motion.div
          className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Background Image - Static with zoom on hover */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ 
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={imgRectangle4116}
              alt="Partners Background"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Dark overlay for better logo visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />

          {/* Logos Grid */}
          <div className="relative z-10 flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            {[
              { src: climaxLogo, alt: "Climax", delay: 0.4 },
              { src: qDotzLogo, alt: "Q_DoTZ", delay: 0.5 },
              { src: snaLogo, alt: "SNA", delay: 0.6 },
              { src: zenThinkLogo, alt: "ZenThink", delay: 0.7 }
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: logo.delay,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
                className="relative group"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-cyan-500/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Logo card container - all white backgrounds */}
                <motion.div
                  className="relative bg-white rounded-xl p-8 md:p-10 lg:p-12 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center shadow-2xl"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Logo image */}
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[85%] max-h-[85%] object-contain relative z-10"
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full rounded-xl"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-blue-400/30 rounded-bl-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
