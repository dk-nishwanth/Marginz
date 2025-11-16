import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Lightbulb, Code2, ShieldCheck, CheckCircle } from 'lucide-react';

// Define the content and icons for each phase
const phases = [
  {
    number: '01',
    title: 'Phase 01',
    description: 'Strategic Discovery & Architecture Design',
    details:
      'Our methodology ensures that complexity is translated into a simple, high-velocity build cycle.',
    iconSvg: <Lightbulb size={36} strokeWidth={2.5} color="white" />,
    color: 'from-fuchsia-500 to-pink-500',
    svgColor: '#e879f9', // Light Fuchsia/Pink
    pulseColor: '#f0e4ff' // Very light
  },
  {
    number: '02',
    title: 'Phase 02',
    description: 'Iterative Development with Continuous Validation',
    details:
      'We practice a specialized, client-centric Agile model, engineered to maintain maximum feature flow and zero operational friction.',
    iconSvg: <Code2 size={36} strokeWidth={2.5} color="white" />,
    color: 'from-sky-400 to-blue-600',
    svgColor: '#38bdf8', // Light Sky Blue
    pulseColor: '#e0f7ff' // Very light
  },
  {
    number: '03',
    title: 'Phase 03',
    description: 'Quality Assurance & Testing',
    details:
      'MARGINZ has perfected a development methodology that combines agile principles with enterprise-grade project management practices.',
    iconSvg: <ShieldCheck size={36} strokeWidth={2.5} color="white" />,
    color: 'from-emerald-400 to-green-600',
    svgColor: '#34d399', // Light Emerald Green
    pulseColor: '#e6fff5' // Very light
  }
];

const principles = [
  'Our methodology ensures that complexity is translated into a simple, high-velocity build cycle.',
  'We practice a specialized, client-centric Agile model, engineered to maintain maximum feature flow and zero operational friction.',
  'MARGINS has perfected a development methodology that combines agile principles with enterprise-grade project management practices.',
  'Our approach ensures that complex projects are delivered on time and exceed client expectations while maintaining flexibility to adapt to changing requirements.'
];

export function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [currentAnimationPhase, setCurrentAnimationPhase] = useState<number>(0);

  // Update current animation phase based on timing - REDUCED INTERVAL
  React.useEffect(() => {
    if (!isInView) return;

    // Reduced interval between phase content updates to 1.5 seconds (1500ms)
    const phaseInterval = 1500;
    const lineDrawDelay = 800; // Keep line 1 delay the same (0.8s)

    const timers = [
      setTimeout(() => setCurrentAnimationPhase(0), lineDrawDelay), // Phase 01 appears
      setTimeout(() => setCurrentAnimationPhase(1), lineDrawDelay + phaseInterval * 1), // Phase 02 appears
      setTimeout(() => setCurrentAnimationPhase(2), lineDrawDelay + phaseInterval * 2), // Phase 03 appears
      setTimeout(() => setCurrentAnimationPhase(-1), lineDrawDelay + phaseInterval * 3) // All phases shown (animation finished)
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [isInView]);

  // Helper to determine the stroke color of the line paths
  const getLineStroke = (index: number) => {
    // If the animation is complete (-1), or if the current phase index is
    // greater than or equal to this line's index, use its vibrant color.
    if (currentAnimationPhase === -1 || currentAnimationPhase >= index) {
      return phases[index].svgColor; // Vibrant color
    }

    // Before the line draws, it's the base color (dark)
    return '#141c2b';
  };

  // Helper to determine the color of a phase point
  const getPhasePointColor = (phaseIndex: number, type: 'main' | 'pulse') => {
    const phase = phases[phaseIndex];
    if (type === 'pulse') {
      // Use the very light color for the pulsating ring
      return phase.pulseColor;
    }

    // Determine the main color for the circle/text
    if (currentAnimationPhase === -1 || currentAnimationPhase >= phaseIndex) {
      return phase.svgColor; // Use light, vibrant color when active/complete
    }

    return '#141c2b'; // Default dark color when inactive
  };

  // Helper to get the line indicator's color (the small moving circle)
  const getIndicatorColor = () => {
    if (currentAnimationPhase === 0) return phases[0].svgColor;
    if (currentAnimationPhase === 1) return phases[1].svgColor;
    if (currentAnimationPhase === 2) return phases[2].svgColor;
    return '#5d83b7'; // Fallback color
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative mb-12 md:mb-16 lg:mb-20"
      style={{ overflow: 'visible' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #141c2b 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 space-y-6"
        >
          <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">
            Our Signature Development Framework
          </p>
          <h2
            className="text-black font-bold leading-tight"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            MARGINZ Agile-Enterprise Methodology (MAE)
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}
          >
            Our proprietary MAE framework represents the evolution of traditional agile
            methodologies.
          </p>
        </motion.div>

        {/* Triangle Diagram */}
        <div className="mb-12 relative">
          <div className="max-w-3xl mx-auto">
            {/* SVG Triangle - Smaller */}
            <svg viewBox="0 0 400 280" className="w-full h-auto mb-4">
              {/* Triangle Lines - Correct order: 01 -> 02 -> 03 */}
              {/* Line 1: Top to Bottom Right (Phase 01 to Phase 02) */}
              <motion.path
                d="M 200 40 L 350 240"
                fill="none"
                stroke={getLineStroke(0)} // Dynamic color based on current phase
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
              />

              {/* Line 2: Bottom Right to Bottom Left (Phase 02 to Phase 03) */}
              <motion.path
                d="M 350 240 L 50 240"
                fill="none"
                stroke={getLineStroke(1)} // Dynamic color based on current phase
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                // REDUCED DELAY: 0.5s (base) + 1.5s (phase interval) = 2.0s
                transition={{ duration: 1.2, delay: 2.0, ease: 'easeInOut' }}
              />

              {/* Line 3: Bottom Left to Top (Phase 03 back to Phase 01) */}
              <motion.path
                d="M 50 240 L 200 40"
                fill="none"
                stroke={getLineStroke(2)} // Dynamic color based on current phase
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                // REDUCED DELAY: 2.0s + 1.5s (phase interval) = 3.5s
                transition={{ duration: 1.2, delay: 3.5, ease: 'easeInOut' }}
              />

              {/* Connecting line animation indicator - Render BEFORE phase points so it stays behind */}
              <motion.circle
                r="6"
                fill={getIndicatorColor()} // Dynamic color based on current phase
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        offsetDistance: ['0%', '100%'],
                        opacity: [0, 1, 1, 1, 0]
                      }
                    : {}
                }
                transition={{
                  duration: 5, // Reduced total duration for snappier cycle
                  delay: 0.5,
                  ease: 'linear'
                }}
                style={{
                  offsetPath: 'path("M 200 40 L 350 240 L 50 240 L 200 40")',
                  offsetRotate: '0deg'
                }}
              />

              {/* Phase Points with Sequential Appearance - Correct order */}
              {[
                { x: 200, y: 40, label: 'Phase 01', delay: 0.8, phaseNum: '01', index: 0 }, // 0.8s
                { x: 350, y: 240, label: 'Phase 02', delay: 2.3, phaseNum: '02', index: 1 }, // 2.3s
                { x: 50, y: 240, label: 'Phase 03', delay: 3.8, phaseNum: '03', index: 2 } // 3.8s
              ].map((point, index) => (
                <g key={index}>
                  {/* Outer circle - Uses dynamic main color */}
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="20"
                    fill={getPhasePointColor(point.index, 'main')} // Dynamic color
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      delay: point.delay,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }}
                  />
                  {/* Inner circle */}
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="15"
                    fill="white"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      delay: point.delay + 0.1,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }}
                  />
                  {/* Number text - Uses dynamic main color */}
                  <motion.text
                    x={point.x}
                    y={point.y + 6}
                    textAnchor="middle"
                    fill={getPhasePointColor(point.index, 'main')} // Dynamic color
                    fontSize="16"
                    fontWeight="700"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: point.delay + 0.2, duration: 0.3 }}
                  >
                    {point.phaseNum}
                  </motion.text>

                  {/* Pulsing ring effect - Uses dynamic pulse color */}
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="20"
                    fill="none"
                    stroke={getPhasePointColor(point.index, 'pulse')} // Dynamic pulse color
                    strokeWidth="4" // Slightly thicker stroke for pulse
                    initial={{ scale: 1, opacity: 0 }}
                    animate={
                      isInView && currentAnimationPhase === point.index
                        ? {
                            scale: [1, 2, 2], // Larger scale for more noticeable animation
                            opacity: [1, 0, 0]
                          }
                        : {}
                    }
                    transition={
                      currentAnimationPhase === point.index
                        ? {
                            delay: point.delay + 0.2,
                            duration: 1.5, // Longer duration for softer pulse
                            ease: 'easeOut'
                          }
                        : { duration: 0 }
                    }
                  />
                </g>
              ))}
            </svg>

            {/* Phase Content Display - Enhanced cards */}
            <div className="relative" style={{ minHeight: '240px' }}>
              <AnimatePresence mode="wait">
                {/* -------------------------------------------------- */}
                {/* 1. Show current phase content during animation (Phase 01, 02, 03) */}
                {/* -------------------------------------------------- */}
                {currentAnimationPhase >= 0 && currentAnimationPhase < 3 && (
                  <motion.div
                    key={`animation-phase-${currentAnimationPhase}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute w-full"
                  >
                    {(() => {
                      const phase = phases[currentAnimationPhase];
                      return (
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl border-2 border-gray-200">
                          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                            {/* Left: Icon and Phase Number */}
                            <div className="flex-shrink-0 text-center lg:text-left">
                              <motion.div
                                initial={{ rotate: 0, scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                                className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center shadow-2xl mx-auto lg:mx-0 text-white`}
                              >
                                {phase.iconSvg}
                              </motion.div>
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, type: 'spring' }}
                                className="mt-3"
                              >
                                <div
                                  className={`inline-block px-4 py-2 bg-gradient-to-r ${phase.color} text-white rounded-full font-bold text-sm shadow-lg`}
                                >
                                  {phase.number}
                                </div>
                              </motion.div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 text-center lg:text-left">
                              <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-black text-xl lg:text-2xl font-bold mb-2"
                              >
                                {phase.title}
                              </motion.h3>
                              <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-700 text-sm lg:text-base font-semibold mb-3"
                              >
                                {phase.description}
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                              >
                                {phase.details}
                              </motion.p>

                              {/* Animated Progress Bar */}
                              <motion.div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${phase.color}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {/* -------------------------------------------------- */}
                {/* 2. Show all phases grid after animation completes (-1) */}
                {/* -------------------------------------------------- */}
                {currentAnimationPhase === -1 && (
                  <motion.div
                    key="all-phases"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-3 gap-6"
                  >
                    {phases.map((phase, index) => {
                      return (
                        <motion.div
                          key={phase.number}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15,
                            type: 'spring',
                            stiffness: 200
                          }}
                          onHoverStart={() => setActivePhase(index)}
                          onHoverEnd={() => setActivePhase(null)}
                        >
                          <motion.div
                            whileHover={{ y: -12, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-200 h-full relative overflow-hidden"
                          >
                            {/* Gradient Background */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${phase.color}`}
                              animate={{
                                opacity: activePhase === index ? 0.1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            />

                            <div className="relative z-10">
                              {/* Icon */}
                              <motion.div
                                animate={{
                                  rotate: activePhase === index ? 360 : 0,
                                  scale: activePhase === index ? 1.1 : 1
                                }}
                                transition={{ duration: 0.6 }}
                                className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center mb-4 shadow-lg text-white`}
                              >
                                {phase.iconSvg}
                              </motion.div>

                              <h4 className="text-black mb-2 text-lg font-bold">{phase.title}</h4>
                              <p className="text-gray-700 mb-3 font-semibold text-sm">
                                {phase.description}
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {phase.details}
                              </p>

                              {/* Progress Bar */}
                              <motion.div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${phase.color}`}
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: activePhase === index ? '100%' : '0%'
                                  }}
                                  transition={{ duration: 0.5 }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Project Management Excellence Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mt-16 md:mt-20">
          {/* Left Column - Principles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3
              className="text-black font-bold leading-tight mb-8"
              style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
            >
              Project Management Excellence
            </h3>
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all bg-gray-50/50"
              >
                <CheckCircle className="text-green-600 shrink-0 mt-1" size={22} />
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{principle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#141c2b] to-[#2a3f5f] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Animated Background Circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
              />

              <div className="text-center space-y-2 relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border-2 border-white/20"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                    <div className="w-10 h-10 bg-white/30 rounded-full border border-white/40" />
                  </div>
                </motion.div>

                <h4 className="text-white text-lg font-bold">MAE Framework</h4>
                <p className="text-white/90 text-sm">Precision. Agility. Excellence.</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/20">
                  {[
                    { value: '100%', label: 'Success Rate' },
                    { value: '50+', label: 'Projects' },
                    { value: '3', label: 'Phases' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-white/70 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}