import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgRectangle4116 from "figma:asset/6384c16fe60fd03034ea9a412bb26d7700abc522.png";

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-12 md:mb-16 lg:mb-20 overflow-hidden">
      {/* Vibrant background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/40 to-red-500/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/40 to-teal-500/40 rounded-full blur-[120px]"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-black font-bold"
          style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
        >
          Partner with more than 100+ Companies
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 60 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl shadow-2xl"
      >
        {/* Enhanced Decorative Frame */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl -z-10"
        />
        
        {/* Additional glow effect */}
        <motion.div
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"
        />

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={imgRectangle4116}
              alt="Our Partners"
              className="w-full h-auto"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-gray-600 mb-2 font-medium"
          >
            Trusted Partnerships
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
            className="text-[#141c2b] text-3xl font-bold"
          >
            100+
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-sm text-gray-500 font-medium"
          >
            Global Companies
          </motion.p>
        </motion.div>

        {/* Corner Accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-white/50 rounded-tr-2xl"
        />
      </motion.div>
    </section>
  );
}
