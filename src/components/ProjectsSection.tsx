import { motion, useInView } from 'framer-motion'; // Corrected import path
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Image imports using @ alias
import imgRectangle4126 from "@/assets/0f8ce7e9c7ab64b1125b5a4daa205533b1f19b86.png";
import imgRectangle4127 from "@/assets/1d868fd07a29fc01e3f2f7ff7f4c5999ab13d532.png";
import imgRectangle4128 from "@/assets/d11bdfba3ac1a2d7fa641e463059b3c95e1a2ec9.png";
import imgRectangle4122 from "@/assets/86317754a5167cb7fae51e8f56bcb33e322fd471.png";
import imgRectangle4123 from "@/assets/11d90f9ce584f5b4944e34569f79a94c63678074.png";
import imgRectangle4124 from "@/assets/85ee1a3a8ddd099804b493dab502bf09578806b6.png";


const projects = [
  { 
    title: 'BRIX-ERP (Enterprise Resource Planning)', 
    subtitle: 'Enterprise Resource Planning',
    description: '"Their unified ERP solution delivered an 85% reduction in manual processing time. They truly eliminated our core operational friction."',
    image: imgRectangle4126,
    gradient: 'from-pink-400/90 to-purple-600/90'
  },
  { 
    title: 'Assessment Portal (Web Application)', 
    subtitle: 'Web Application',
    description: '"We achieved a 95% time reduction in result processing, allowing us to scale student intake by 10X. Unparalleled speed and precision."',
    image: imgRectangle4127,
    gradient: 'from-purple-400/90 to-blue-600/90'
  },
  { 
    title: 'Qdotz Website (Corporate Website)', 
    subtitle: 'Corporate Website',
    description: '"The new corporate website led to a 35% increase in qualified organic traffic within three months. Exceptional mastery in high-performing digital assets."',
    image: imgRectangle4128,
    gradient: 'from-blue-400/90 to-cyan-600/90'
  },
  { 
    title: 'BookyMet Mobile Application (Mobile Application)', 
    subtitle: 'Mobile Application',
    description: '"The dynamic booking app delivered a 20% increase in turf utilization and zero errors. A resilient platform impacting our bottom line."',
    image: imgRectangle4124,
    gradient: 'from-red-400/90 to-pink-600/90'
  },
  { 
    title: 'Cricinfo Clone Prototype', 
    subtitle: 'Web Application',
    description: 'A comprehensive cricket information platform with real-time scores and statistics.',
    image: imgRectangle4122,
    gradient: 'from-green-400/90 to-teal-600/90'
  },
  { 
    title: 'PwC Prototype Website', 
    subtitle: 'Corporate Website',
    description: 'Professional consulting website with modern design and seamless user experience.',
    image: imgRectangle4123,
    gradient: 'from-orange-400/90 to-red-600/90'
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative mb-16 md:mb-20 lg:mb-24" style={{ overflow: 'visible' }}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 space-y-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-700 font-semibold text-sm tracking-widest uppercase"
          >
            Our Success Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-black font-extrabold leading-tight"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            Turning Challenges Into Opportunities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}
          >
            We partner with businesses to solve complex problems, harnessing technology to drive innovation, efficiency, and long-term success.
          </motion.p>
        </motion.div>

        {/* Ensure responsiveness: 2 columns on medium screens, 3 on large */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
              style={{ zIndex: hoveredIndex === index ? 10 : 1 }}
            >
              <motion.div
                // Lift and custom box shadow
                whileHover={{ y: -8, boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer shadow-xl"
              >
                {/* Background Image (using user's assets) */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://placehold.co/400x300/6B7280/ffffff?text=Image+Unavailable'; 
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0.7 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.95 : 0.7 
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Border (kept subtle) */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                  animate={{
                    borderColor: hoveredIndex === index ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'
                  }}
                />

                {/* Content - Simple title overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Title - Always visible */}
                  <motion.h3 
                    className="text-white text-3xl lg:text-4xl font-bold leading-tight drop-shadow-2xl"
                    style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
                  >
                    {project.title.split('(')[0].trim()}
                  </motion.h3>
                  
                  {/* Hover content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/90 text-base mt-4 mb-4 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <span className="text-sm">View Project</span>
                      <ArrowRight size={18} />
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