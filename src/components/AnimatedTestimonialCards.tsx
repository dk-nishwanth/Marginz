import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Their unified ERP solution delivered an 85% reduction in manual processing time. They truly eliminated our core operational friction.",
    author: "BRIX-ERP",
    role: "Enterprise Resource Planning",
    gradient: 'from-pink-600 via-rose-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop'
  },
  {
    quote: "We achieved a 95% time reduction in result processing, allowing us to scale student intake by 10X. Unparalleled speed and precision.",
    author: "Assessment Portal",
    role: "Web Application",
    gradient: 'from-purple-600 via-violet-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
  },
  {
    quote: "The new corporate website led to a 35% increase in qualified organic traffic within three months. Exceptional mastery in high-performing digital assets.",
    author: "Qdotz Website",
    role: "Corporate Website",
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    quote: "The dynamic booking app delivered a 20% increase in turf utilization and zero errors. A resilient platform impacting our bottom line.",
    author: "BookyMet Mobile",
    role: "Mobile Application",
    gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  }
];

export function AnimatedTestimonialCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative mb-16 md:mb-20 lg:mb-24" style={{ overflow: 'visible' }}>
      {/* Floating Shapes Background */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 space-y-6"
        >
          <h2 className="text-black font-bold leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
            Client Success Stories
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}>
            Real results from real partnerships. See how we've transformed businesses through innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full"
              >
                {/* Card with solid gradient background */}
                <div 
                  className="relative rounded-3xl p-8 overflow-hidden shadow-2xl h-full min-h-[320px] flex flex-col"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #db2777 0%, #f43f5e 50%, #dc2626 100%)' :
                               index === 1 ? 'linear-gradient(135deg, #9333ea 0%, #8b5cf6 50%, #6366f1 100%)' :
                               index === 2 ? 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #14b8a6 100%)' :
                               'linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #eab308 100%)'
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 180 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Quote className="text-white" size={24} />
                    </div>
                  </motion.div>

                  {/* Quote Text */}
                  <motion.p
                    className="text-white text-lg italic leading-relaxed mb-6 flex-grow font-medium"
                    animate={{
                      y: hoveredIndex === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    "{testimonial.quote}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    className="flex items-center gap-4"
                    animate={{
                      y: hoveredIndex === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        {testimonial.author}
                      </h4>
                      <p className="text-white text-sm font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
