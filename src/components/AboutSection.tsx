import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import imgRectangle4113 from "@/assets/8adf6ec2e9d955473bd5e4d9831a51a8e1c15da2.png";

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative pt-24 md:pt-32 lg:pt-40 pb-48 md:pb-56 lg:pb-64 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-32 md:mb-40 lg:mb-48" style={{ overflow: 'visible' }}>
      {/* Blue theme background elements */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/40 to-sky-500/40 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative pb-16 md:pb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={imgRectangle4113}
              alt="About MARGINZ"
              className="w-full h-auto"
            />
          </motion.div>
          
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-blue-200"
            style={{ zIndex: 10 }}
          >
            <div className="text-center">
              <div className="text-[#141c2b] text-4xl font-black mb-1">
                <AnimatedCounter end={99} />%
              </div>
              <p className="text-sm text-gray-700 font-bold">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8 pl-0 md:pl-4 lg:pl-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">About MARGINS Solutions</p>
            <h2 className="text-black font-bold leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
              The Architecture of Unassailable Digital Resilience
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-700 leading-relaxed"
            style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}
          >
            MARGINZ is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative. Our mission is to deliver Precision Engineering, crafting high-performance systems that secure a decisive competitive edge for major enterprises.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-10"
          >
            <div className="text-center">
              <div className="text-[#141c2b] mb-2 text-3xl font-bold">
                <AnimatedCounter end={70} />+
              </div>
              <p className="text-sm text-gray-600 font-medium">Project Mandates</p>
            </div>
            <div className="text-center">
              <div className="text-[#141c2b] mb-2 text-3xl font-bold">
                99.99%
              </div>
              <p className="text-sm text-gray-600 font-medium">Operational Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-[#141c2b] mb-2 text-3xl font-bold">
                <AnimatedCounter end={8} />+
              </div>
              <p className="text-sm text-gray-600 font-medium">Industry Verticals</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Spacer for floating badge - ensures no overlap with next section */}
      <div className="h-24 md:h-32 lg:h-40"></div>
    </section>
  );
}
