import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import imgRectangle4126 from "figma:asset/0f8ce7e9c7ab64b1125b5a4daa205533b1f19b86.png";
import imgRectangle4127 from "figma:asset/1d868fd07a29fc01e3f2f7ff7f4c5999ab13d532.png";
import imgRectangle4128 from "figma:asset/d11bdfba3ac1a2d7fa641e463059b3c95e1a2ec9.png";
import imgRectangle4122 from "figma:asset/86317754a5167cb7fae51e8f56bcb33e322fd471.png";
import imgRectangle4123 from "figma:asset/11d90f9ce584f5b4944e34569f79a94c63678074.png";
import imgRectangle4124 from "figma:asset/85ee1a3a8ddd099804b493dab502bf09578806b6.png";
import { ArrowRight } from 'lucide-react';

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
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-black mb-2 font-medium text-sm"
          >
            Our Success Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-black mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            Turning Challenges Into Opportunities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-black max-w-4xl mx-auto"
          >
            We partner with businesses to solve complex problems, harnessing technology to drive innovation, efficiency, and long-term success.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer"
              >
                {/* Background Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
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

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                  animate={{
                    borderColor: hoveredIndex === index ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : -20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      {project.subtitle}
                    </span>
                  </motion.div>

                  {/* Bottom Section */}
                  <div>
                    <motion.h3 
                      className="text-white mb-4 text-2xl font-bold"
                      animate={{
                        y: hoveredIndex === index ? -10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title.split('(')[0].trim()}
                    </motion.h3>
                    
                    <motion.p
                      className="text-white/90 text-sm mb-4 italic leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Animated Arrow */}
                    <motion.div
                      className="flex items-center gap-2 text-white"
                      animate={{
                        x: hoveredIndex === index ? 10 : 0,
                        opacity: hoveredIndex === index ? 1 : 0.7
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"
                  animate={{
                    scale: hoveredIndex === index ? 1.5 : 1,
                    opacity: hoveredIndex === index ? 0.2 : 0.1
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
