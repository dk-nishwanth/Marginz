import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Target, Award } from 'lucide-react';
import imgRectangle4117 from "../assets/0325ee26afaae80a474316be565a20584a0599e3.png";
import imgRectangle4120 from "../assets/f651be564541ad619f92617f4cfe4f3f578b0c8f.png";
import imgRectangle4121 from "../assets/e633a6a37b8bf6df9aaaa684804db4ebc2112a8a.png";
import imgFrame6 from "../assets/68f2477970241dc43c8d42630537a5df3b7309aa.png";

const deliverables = [
  {
    title: 'Innovation',
    image: imgRectangle4117,
    description: 'Cutting-edge solutions that drive business transformation',
    icon: Sparkles,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Quality and Accessibility',
    image: imgRectangle4120,
    description: 'Excellence in every detail with universal access',
    icon: Award,
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Client Success',
    image: imgRectangle4121,
    description: 'Your success is our ultimate goal and measure',
    icon: Target,
    gradient: 'from-orange-500 to-red-600'
  }
];

export function DeliverablesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative pt-20 md:pt-24 lg:pt-32 pb-32 md:pb-40 lg:pb-48 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-6 md:px-8 lg:px-12 mb-20 md:mb-24 lg:mb-32" style={{ overflow: 'visible' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10" style={{ overflow: 'hidden' }}>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/15 to-yellow-400/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-blue-500/20 shadow-lg">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
              <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Expertise</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-900 font-bold leading-tight"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}
          >
            Key Deliverables That Transform Your Business
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className="relative"
                style={{ zIndex: 1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.zIndex = '10';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.zIndex = '1';
                }}
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative h-full cursor-pointer"
                >
                  {/* Card Container with Image */}
                  <div className="relative overflow-hidden rounded-[32px] h-[520px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-500">
                    
                    {/* Image Section */}
                    <div className="relative h-[240px] overflow-hidden">
                      <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
                        className="w-full h-full"
                      >
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-40 mix-blend-multiply group-hover:opacity-50 transition-opacity duration-500`} />
                      
                      {/* Floating Icon Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        transition={{ 
                          delay: 0.5 + index * 0.15,
                          type: "spring",
                          stiffness: 300
                        }}
                        className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-shadow duration-500"
                      >
                        <Icon className={`w-8 h-8 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                      </motion.div>

                      {/* Animated Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={isInView ? { x: '200%' } : {}}
                        transition={{ 
                          delay: 0.8 + index * 0.2,
                          duration: 1.2,
                          ease: "easeInOut"
                        }}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="relative p-8 flex flex-col h-[280px] bg-white">
                      
                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15 }}
                        className="text-2xl font-bold text-black mb-4 leading-tight"
                      >
                        {item.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.15 }}
                        className="text-gray-700 text-base leading-relaxed mb-6 flex-grow"
                      >
                        {item.description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.15 }}
                        className="mt-auto"
                      >
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-gray-900 font-semibold group/btn"
                        >
                          <span className="text-sm">Learn more</span>
                          <motion.svg
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="text-gray-900"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path
                              d="M4 10h12m0 0l-4-4m4 4l-4 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </motion.button>
                      </motion.div>

                      {/* Decorative Gradient Line */}
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                      />
                    </div>

                    {/* Removed background pattern for better text readability */}
                  </div>

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700 -z-10`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
