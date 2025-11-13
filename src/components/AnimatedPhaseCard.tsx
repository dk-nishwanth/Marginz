import { motion } from 'motion/react';
import { useState } from 'react';

interface AnimatedPhaseCardProps {
  phase: string;
  title: string;
  description: string;
  tasks: string[];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function AnimatedPhaseCard({ 
  phase, 
  title, 
  description, 
  tasks, 
  index, 
  isActive,
  onClick 
}: AnimatedPhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <motion.div
        onClick={onClick}
        className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
          isActive 
            ? 'bg-white border-[#141c2b] shadow-xl' 
            : 'bg-gray-50 border-gray-200 hover:border-gray-300'
        }`}
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Phase indicator with pulse animation */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className={`relative w-12 h-12 rounded-full flex items-center justify-center ${
              isActive ? 'bg-[#141c2b]' : 'bg-gray-300'
            }`}
            animate={isActive ? {
              boxShadow: [
                "0 0 0 0 rgba(20, 28, 43, 0.4)",
                "0 0 0 10px rgba(20, 28, 43, 0)",
              ],
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-white font-medium">{phase}</span>
          </motion.div>
          
          <div>
            <h3 className="text-xl font-medium text-[#141c2b]">{title}</h3>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* Animated task list */}
        <motion.div
          initial={false}
          animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-3 mt-4">
            {tasks.map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700"
              >
                {task}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connection line to next phase */}
        {index < 2 && (
          <motion.div
            className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-[#141c2b] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
