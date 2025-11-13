import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Zap, Target, Rocket, Code, Palette } from 'lucide-react';

const cards = [
  {
    icon: Sparkles,
    title: 'Innovation First',
    description: 'Cutting-edge solutions that push boundaries',
    gradient: 'from-purple-600 via-pink-600 to-red-600',
    delay: 0
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for maximum efficiency',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    delay: 0.1
  },
  {
    icon: Target,
    title: 'Precision Driven',
    description: 'Accurate execution with attention to detail',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    delay: 0.2
  },
  {
    icon: Rocket,
    title: 'Scale Ready',
    description: 'Built to grow with your business needs',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    delay: 0.3
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Maintainable and well-documented solutions',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    delay: 0.4
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Beautiful interfaces that users love',
    gradient: 'from-pink-600 via-rose-600 to-red-600',
    delay: 0.5
  }
];

export function CreativeCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
            Why Choose MARGINS
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg">
            We combine technical excellence with creative innovation to deliver solutions that exceed expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: card.delay }}
              >
                <motion.div
                  whileHover={{ 
                    y: -15,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative group h-full"
                  style={{ perspective: '1000px' }}
                >
                  {/* Card */}
                  <div className="relative bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 overflow-hidden h-full">
                    {/* Gradient Overlay - Behind content */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`} />

                    {/* Corner Decoration - Behind content */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                    {/* Content with proper z-index */}
                    <div className="relative z-20">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="text-white" size={32} />
                      </motion.div>

                      {/* Title */}
                      <h4 className="text-white mb-3 text-xl font-bold drop-shadow-lg">
                        {card.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-100 leading-relaxed drop-shadow-md font-medium">
                        {card.description}
                      </p>

                      {/* Decorative Line */}
                      <motion.div
                        className={`mt-6 h-1 bg-gradient-to-r ${card.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: card.delay + 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
