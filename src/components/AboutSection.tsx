import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import imgRectangle4113 from "figma:asset/8adf6ec2e9d955473bd5e4d9831a51a8e1c15da2.png";

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
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={imgRectangle4113}
              alt="About MARGINS"
              className="w-full h-auto"
            />
          </motion.div>
          
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="text-center">
              <div className="text-[#141c2b] text-3xl font-bold">
                <AnimatedCounter end={99} />%
              </div>
              <p className="text-sm text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-600 mb-2 font-medium text-sm">About MARGINS Solutions</p>
            <h2 className="text-black mb-6 text-3xl lg:text-4xl font-bold">
              The Architecture of Unassailable Digital Resilience
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-700 leading-relaxed"
          >
            MARGINS is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative. Our mission is to deliver Precision Engineering, crafting high-performance systems that secure a decisive competitive edge for major enterprises.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8"
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
    </section>
  );
}
