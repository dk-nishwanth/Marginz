import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import imgRectangle4117 from "figma:asset/0325ee26afaae80a474316be565a20584a0599e3.png";
import imgRectangle4120 from "figma:asset/f651be564541ad619f92617f4cfe4f3f578b0c8f.png";
import imgRectangle4121 from "figma:asset/e633a6a37b8bf6df9aaaa684804db4ebc2112a8a.png";
import imgFrame6 from "figma:asset/68f2477970241dc43c8d42630537a5df3b7309aa.png";

const deliverables = [
  {
    title: 'Innovation',
    image: imgRectangle4117,
    description: 'Cutting-edge solutions that drive business transformation'
  },
  {
    title: 'Quality and Accessibility',
    image: imgRectangle4120,
    description: 'Excellence in every detail with universal access'
  },
  {
    title: 'Client Success',
    image: imgRectangle4121,
    description: 'Your success is our ultimate goal and measure'
  }
];

export function DeliverablesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#5d83b7] to-[rgba(11,44,131,0.9)]" />
        <img
          src={imgFrame6}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
            What We Build - Key Deliverables
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl h-[500px]"
              >
                {/* Decorative Border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="absolute inset-0 border-4 border-white/20 rounded-2xl z-10 pointer-events-none"
                />

                <motion.div
                  initial={{ scale: 1.3 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={isInView ? { x: '100%' } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4"
                >
                  <motion.h3
                    className="text-white mb-3 font-bold text-xl"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>

                {/* Corner Accent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, type: "spring" }}
                  className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-white/50 rounded-tr-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
