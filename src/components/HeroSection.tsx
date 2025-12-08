import { useState, useEffect } from 'react';

// --- Content Definitions for the Carousel ---
const carouselContent = [
  {
    mainTitle: 'The Architect',
    subTitle: 'Agility & Technology',
    tagline: 'Engineering Enterprise Liberation',
  },
  {
    mainTitle: 'The Strategist',
    subTitle: 'ROI & Business Outcome',
    tagline: 'Beyond Code: Delivering Measurable MARGINS on Digital Investment.',
  },
  {
    mainTitle: 'The Specialist',
    subTitle: 'Expertise & Future-Proofing',
    tagline: 'The MERN Stack Masters. Deploying Enterprise-Grade Digital Foundations.',
  },
  {
    mainTitle: 'The Innovator',
    subTitle: 'Automation & Strategic Partnership',
    tagline: 'Automation Elevated. Your Partner in Building the Frictionless Enterprise.',
  },
  {
    mainTitle: 'The Quality Anchor',
    subTitle: 'Quality & Reliability',
    tagline: 'Quality-First Development. Where High Performance is the Minimum Standard.',
  },
];


// --- Fading Carousel Text Component ---
interface CarouselItem {
  mainTitle: string;
  subTitle: string;
  tagline: string;
}

const FadingCarouselText = ({ content }: { content: CarouselItem[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const totalDuration = 6000; // 6 seconds per slide for smoother transitions

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx(prevIdx => (prevIdx + 1) % content.length);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [content.length]);

  const currentItem = content[currentIdx];

  return (
    <>
      {/* Main Headline */}
      <h1 className="relative space-y-1 md:space-y-2">
        {/* Main Title Line 1 */}
        <div
          key={`main-${currentIdx}`}
          className="text-black font-black leading-[0.9] tracking-tight animate-fade-in-out"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 10rem)',
          }}
        >
          {currentItem.mainTitle}
        </div>
        
        {/* Sub Title Line 2 */}
        <div
          key={`sub-${currentIdx}`}
          className="text-black font-black leading-[0.9] tracking-tight animate-fade-in-out"
          style={{
            fontSize: 'clamp(2rem, 6vw, 8rem)',
            animationDelay: '0.05s',
          }}
        >
          {currentItem.subTitle}
        </div>
      </h1>

      {/* Tagline / Subtitle */}
      <p
        key={`tagline-${currentIdx}`}
        className="text-gray-600 font-semibold leading-relaxed max-w-4xl mx-auto animate-fade-in-out px-4"
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          animationDelay: '0.1s',
        }}
      >
        {currentItem.tagline}
      </p>
    </>
  );
};


// --- Hero Section - Microsoft AI Inspired (Modified) ---
export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Enhanced blue theme background (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-sky-100/60 to-cyan-100/60">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/60 to-blue-600/60 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/60 to-sky-500/60 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/50 to-blue-600/50 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-br from-sky-400/50 to-cyan-500/50 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '9s' }}></div>
        </div>
      </div>

      {/* Grid pattern overlay - Blue theme (unchanged) */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.12) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      {/* Animated particles, flowing lines, glowing dots, etc. (unchanged) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles - More visible */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-particle"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(20, 184, 166, 0.6)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(139, 92, 246, 0.6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          ></div>
        ))}

        {/* Flowing lines - Highly visible */}
        <svg className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated flowing paths - Thicker and more visible */}
          <path
            d="M 0 300 Q 400 100 800 300 T 1600 300"
            stroke="url(#lineGradient1)"
            strokeWidth="3"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M 1600 200 Q 1200 400 800 200 T 0 200"
            stroke="url(#lineGradient2)"
            strokeWidth="3"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '2s' }}
          />
          <path
            d="M 0 600 Q 400 400 800 600 T 1600 600"
            stroke="url(#lineGradient1)"
            strokeWidth="2.5"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '4s' }}
          />
          <path
            d="M 200 100 Q 600 300 1000 100 T 1800 100"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '6s' }}
          />
        </svg>

        {/* Glowing dots along paths - Blue theme */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-glow-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-glow-pulse shadow-lg shadow-blue-500/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-indigo-400 rounded-full animate-glow-pulse shadow-lg shadow-indigo-400/50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-sky-400 rounded-full animate-glow-pulse shadow-lg shadow-sky-400/50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-600 rounded-full animate-glow-pulse shadow-lg shadow-blue-600/50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-cyan-500 rounded-full animate-glow-pulse shadow-lg shadow-cyan-500/50" style={{ animationDelay: '5s' }}></div>
      </div>
      
      {/* Floating geometric shapes (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated hexagons */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-2 border-cyan-400/30 rotate-12 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-indigo-400/30 -rotate-12 animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 border-2 border-sky-400/30 rotate-45 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
        
        {/* Animated circles with gradients */}
        <div className="absolute top-1/3 left-1/5 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/20 animate-float blur-sm" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-500/20 animate-float blur-sm" style={{ animationDuration: '18s', animationDelay: '2s' }}></div>
        
        {/* Animated lines/bars */}
        <div className="absolute top-1/4 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent animate-float" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
      </div>

      {/* Animated code-like elements (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 text-blue-500 font-mono text-xs animate-float" style={{ animationDuration: '15s' }}>{'<div>'}</div>
        <div className="absolute top-1/3 right-20 text-cyan-500 font-mono text-xs animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}>{'{ }'}</div>
        <div className="absolute bottom-1/3 left-1/4 text-indigo-500 font-mono text-xs animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }}>{'</>'}</div>
        <div className="absolute bottom-1/4 right-1/3 text-sky-500 font-mono text-xs animate-float" style={{ animationDuration: '14s', animationDelay: '3s' }}>{'( )'}</div>
      </div>

      {/* Main content container - **NEW CAROUSEL INTEGRATED HERE** */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Content */}
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          {/* *** Fading Carousel Text Component *** */}
          <FadingCarouselText content={carouselContent} />

          {/* CTA Buttons - Properly sized (unchanged) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="group relative px-8 py-3 bg-white text-black font-bold rounded-full border-2 border-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg">
              <span className="relative z-10 text-black whitespace-nowrap">Start the Transformation</span>
            </button>
            <button className="group relative px-8 py-3 bg-gray-100 text-black font-bold rounded-full border-2 border-gray-300 hover:bg-gray-200 transition-all duration-300 text-base sm:text-lg">
              <span className="text-black whitespace-nowrap">Learn More</span>
            </button>
          </div>
        </div>

        {/* Floating elements - Blue theme (unchanged) */}
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/25 to-cyan-500/25 blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/25 to-blue-600/25 blur-xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 rounded-full bg-gradient-to-br from-sky-500/25 to-cyan-500/25 blur-xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        
        {/* Additional vibrant elements */}
        <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/30 blur-lg animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/30 to-sky-500/30 blur-lg animate-float" style={{ animationDelay: '3s', animationDuration: '14s' }}></div>
      </div>
    </section>
  );
};