import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import imgRectangle4114 from "figma:asset/f9aa8563d10e2f066c040298f2575d495ee696ca.png";

export function QualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 relative"
        >
          {/* Decorative Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -inset-4 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl"
          />
          
          {/* Geometric Corner Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-red-500 rounded-tl-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-orange-500 rounded-br-2xl"
          />

          {/* Main Image Container */}
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={imgRectangle4114}
                alt="Quality"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={isInView ? {
                opacity: [0, 1, 0],
                y: [-20, -60, -100],
              } : {}}
              transition={{
                duration: 3,
                delay: 0.8 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute w-2 h-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                bottom: '10%',
              }}
            />
          ))}
        </motion.div>

        {/* Content with Staggered Animations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 order-1 md:order-2"
        >
          {/* Title with Character Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h2
              className="text-black mb-6 text-3xl lg:text-4xl font-bold"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={isInView ? { backgroundPosition: '100% 50%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #000 0%, #ef4444 50%, #000 100%)',
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              Inherent Quality Instrumentation
            </motion.h2>
          </motion.div>

          {/* Description with Line-by-Line Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500 origin-left"
            />
            <p className="text-gray-700 leading-relaxed pl-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-block font-semibold text-black"
              >
                Zero-Deviation Execution.
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                The continuous, data-driven methodology that enforces hyper-precision and eliminates technical debt for superior quality.
              </motion.span>
            </p>
          </motion.div>

          {/* Button with Enhanced Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 bg-gray-200 hover:bg-[#141c2b] text-black hover:text-white px-8 py-4 rounded-xl transition-all duration-300 mt-6 overflow-hidden"
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Learn More</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Stats or Features (Optional Enhancement) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6"
          >
            {[
              { value: '100%', label: 'Precision' },
              { value: '0', label: 'Defects' },
              { value: '24/7', label: 'Monitoring' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
