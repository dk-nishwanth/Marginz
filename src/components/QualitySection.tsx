import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import imgRectangle4114 from "../assets/f9aa8563d10e2f066c040298f2575d495ee696ca.png";

export function QualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const statsData = [
    { value: '100%', label: 'Precision' },
    { value: '0', label: 'Defects' },
    { value: '24/7', label: 'Monitoring' },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto relative overflow-hidden mb-12 md:mb-16 lg:mb-20">
      {/* Blue theme Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/45 to-blue-600/45 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/45 to-sky-500/45 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/35 to-blue-500/35 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Decorative pattern - Blue theme */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none -z-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Image with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
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
            className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-red-500 rounded-tl-2xl z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-orange-500 rounded-br-2xl z-10"
          />

          {/* Main Image Container */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <motion.img
                src={imgRectangle4114}
                alt="Quality"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              initial={{ x: '-100%' }}
              animate={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Gradient Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
          className="space-y-6 md:space-y-8 order-1 md:order-2 pr-0 md:pr-4 lg:pr-6"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-black font-bold leading-tight"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={isInView ? { backgroundPosition: '100% 50%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{
                fontSize: 'clamp(28px, 4.5vw, 56px)',
                backgroundImage: 'linear-gradient(90deg, #000 0%, #ef4444 50%, #000 100%)',
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              Inherent Quality Instrumentation
            </motion.h2>
          </motion.div>

          {/* Description */}
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
            <p className="text-gray-700 leading-relaxed pl-6" style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}>
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

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 bg-gray-200 hover:bg-[#141c2b] text-black hover:text-white px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden"
              // Adjusted to look more like the image (white background, shadow on hover)
              style={{
                backgroundColor: '#f3f4f6', // Light gray background
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 text-lg font-medium">Learn More</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Stats Cards - Realigned to match image layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-10" // Padding top to separate from button
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                // Simple styling matching the image: white background, light border/shadow
                className="text-center p-3 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300" 
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-2xl font-bold text-black" // Text color changed back to black
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