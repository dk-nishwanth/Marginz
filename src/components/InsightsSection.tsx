import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import imgRectangle4141 from "figma:asset/91c704391a9257ccb23c9293247c1bf2fe16f6d0.png";
import imgRectangle4142 from "figma:asset/d09dec56757795546d6d7b16bb2434880e1d107c.png";
import imgRectangle4143 from "figma:asset/faca54562e6e5a2595c0623f27999075b293ed9f.png";

const insights = [
  {
    title: 'Building Scalable Digital Solutions That Drive Business Impact',
    excerpt: 'From websites to enterprise-grade platforms, learn how innovative, secure, and scalable software can transform your digital presence into a growth engine....',
    image: imgRectangle4141
  },
  {
    title: 'Empowering Businesses Through Technology-Driven Growth',
    excerpt: 'Discover why aligning the right technology with your business strategy is key to streamlining operations, enhancing user engagement, and sustaining long-term success....',
    image: imgRectangle4142
  },
  {
    title: 'Inside Our Team: Blending Experience, Leadership & Innovation',
    excerpt: 'Meet the people behind the solutions — a strategic mix of architects, developers, and specialists committed to delivering precision-built, future-ready technology....',
    image: imgRectangle4143
  }
];

export function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-gray-600 mb-2 font-medium text-sm">Latest Insights</p>
        <h2 className="text-black mb-6 text-3xl lg:text-4xl font-bold">
          Empowering People, Building Technology, Delivering Impact
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Explore expert insights, technology trends, and strategies designed to help businesses innovate, scale, and thrive in the digital era.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
          >
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl h-full cursor-pointer relative"
            >
              {/* Decorative Border */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="absolute inset-0 border-2 border-gray-100 rounded-2xl z-10 pointer-events-none group-hover:border-[#141c2b]/20 transition-colors"
              />

              <div className="h-48 overflow-hidden relative">
                <motion.div
                  initial={{ scale: 1.3 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={isInView ? { x: '100%' } : {}}
                  transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="p-6"
              >
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="text-black mb-3 line-clamp-2 font-bold text-lg"
                >
                  {insight.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  className="text-gray-600 mb-4 leading-relaxed line-clamp-3"
                >
                  {insight.excerpt}
                </motion.p>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                  className="flex items-center gap-2 text-[#141c2b] mt-4 font-medium"
                >
                  <span>Read More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                className="absolute top-3 right-3 w-10 h-10 border-t-3 border-r-3 border-[#141c2b]/20 rounded-tr-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
