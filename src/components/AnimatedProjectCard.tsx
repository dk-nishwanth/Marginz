import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState } from 'react';

interface AnimatedProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  index: number;
}

export function AnimatedProjectCard({ title, subtitle, description, gradient, index }: AnimatedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      <motion.div
        className={`relative p-8 rounded-3xl overflow-hidden ${gradient} h-[280px] flex flex-col justify-between`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
            transform: `translate(${mouseXSpring.get() * 100}px, ${mouseYSpring.get() * 100}px)`,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}

        <div className="relative z-10">
          <motion.h3
            className="text-2xl font-medium text-white mb-2"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-sm text-white/80"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.p
          className="relative z-10 text-white/90 text-sm leading-relaxed"
          animate={{ y: isHovered ? -5 : 0, opacity: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.2 : 0.1,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}
