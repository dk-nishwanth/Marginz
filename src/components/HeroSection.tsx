import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgRectangle4118 from "figma:asset/2315b44d49316d35a274af661a100cc326c90785.png";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="h-screen pt-20 px-6 md:px-8 lg:px-12 pb-6 flex items-center justify-center">
      <div
        ref={ref}
        className="relative w-full h-[calc(100vh-7rem)] overflow-hidden rounded-3xl"
      >
        {/* Tech/Digital Background with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 h-[110%] w-full"
        >
          <img
            src={imgRectangle4118}
            alt="Technology Background"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-blue-900/60 to-blue-950/70" />
        </motion.div>

        {/* Hero Content - Bottom Left */}
        <motion.div
          style={{ opacity }}
          className="relative h-full w-full flex items-end pb-12 md:pb-16 lg:pb-20"
        >
          <div className="px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[600px]">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white font-bold leading-[1.15] mb-4"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                  letterSpacing: "-0.02em"
                }}
              >
                The Architect - Agility &
                <br />
                Technology
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/90 font-normal"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  textShadow: "0 2px 20px rgba(0,0,0,0.5)"
                }}
              >
                Engineering Enterprise Liberation.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
