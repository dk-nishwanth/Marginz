import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Shield, Users, Code, TrendingUp } from 'lucide-react';

const impactItems = [
  {
    icon: Target,
    letter: 'I',
    title: 'Innovation',
    description: 'Cutting-edge solutions that push boundaries'
  },
  {
    icon: Zap,
    letter: 'M',
    title: 'Methodology',
    description: 'Proven frameworks for consistent results'
  },
  {
    icon: Shield,
    letter: 'P',
    title: 'Precision',
    description: 'Uncompromising quality and attention to detail'
  },
  {
    icon: Users,
    letter: 'A',
    title: 'Agility',
    
    description: 'Adaptive approaches for changing needs'
  },
  {
    icon: Code,
    letter: 'C',
    title: 'Craft',
    description: 'Expert engineering and development'
  },
  {
    icon: TrendingUp,
    letter: 'T',
    title: 'Transformation',
    description: 'Measurable business impact and growth'
  }
];

export function WhyMarginsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-32 md:pt-40 lg:pt-48 pb-32 md:pb-40 lg:pb-48 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative mb-20 md:mb-24 lg:mb-32" style={{ overflow: 'visible' }}>
      {/* Blue theme Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/45 to-blue-600/45 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/45 to-sky-500/45 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/35 to-blue-500/35 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Decorative dots pattern - Blue theme */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black font-bold"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            Why Marginz?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-xl md:text-2xl lg:text-3xl font-bold"
          >
            The IMPACT Methodology
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}
          >
            IMPACT is the proprietary framework that defines our results-first approach. It is the systematic process that guarantees transformative change, superior quality, and measurable financial yield on your digital investment.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.5 + index * 0.15,
                ease: "easeOut"
              }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full relative overflow-hidden border border-white/50"
              >
                {/* Hover Gradient Background - Blue theme */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-sky-500/12 to-cyan-500/12 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={isInView ? { rotate: 0, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + index * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className="bg-gradient-to-br from-[#141c2b] to-[#2a3f5f] text-white w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                    >
                      <item.icon size={28} />
                    </motion.div>
                    {/* MODIFIED SECTION: Changed text color and bolding */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                      className="text-black text-4xl font-extrabold"
                    >
                      {item.letter}
                    </motion.div>
                  </div>
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                    className="text-black mb-3 font-bold text-xl"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}