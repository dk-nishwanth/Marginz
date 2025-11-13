import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

// --- Placeholder NavBar Component ---
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Zap className="h-6 w-6 text-teal-600 mr-2" />
            <span className="text-xl font-extrabold text-gray-900 tracking-wider">
              TECH AGILITY
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Services', 'Insights', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Services', 'Insights', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section Component (Updated from original) ---
export const HeroSection = () => {
  // Modern tech-focused background image - circuit boards, data, digital technology
  const heroImageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 pt-40 pb-16 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <div className="mt-0">
        {/* Modern Glass-morphism Card Container */}
        <div className="relative w-full h-[75vh] min-h-[600px] overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out transform hover:scale-[1.01] border border-white/10">
          {/* Background Image with overlay */}
          <img
            src={heroImageUrl}
            alt="Digital technology and innovation"
            className="w-full h-full object-cover object-center scale-105"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80";
            }}
          />
          
          {/* Dark gradient overlay for maximum text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
          
          {/* Animated floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
          </div>

          {/* Content CENTERED with animations */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-8 md:p-12 lg:p-20">
            <div className="text-center max-w-7xl animate-fade-in">
              {/* Brand Badge with slide-in animation */}
              <div className="inline-flex items-center gap-3 mb-12 px-12 py-5 bg-black/60 backdrop-blur-xl rounded-full border-2 border-teal-400 shadow-[0_0_60px_rgba(20,184,166,0.6)] animate-slide-down">
                <span className="text-teal-300 text-3xl md:text-4xl font-bold tracking-widest">✦ MARGINZ ✦</span>
              </div>

              {/* Title with fade-in animation - MASSIVE SIZE */}
              <h1
                className="text-white font-black text-[6rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[16rem] mb-16 leading-[0.85] animate-slide-up"
                style={{
                  textShadow: "0 0 100px rgba(0,0,0,1), 0 12px 60px rgba(0,0,0,1), 0 6px 40px rgba(0,0,0,0.9)",
                  letterSpacing: "-0.04em",
                  animationDelay: "0.2s"
                }}
              >
                The Architect
                <br />
                <span className="text-teal-400 drop-shadow-[0_0_80px_rgba(20,184,166,1)]">Agility & Technology</span>
              </h1>
              
              {/* Subtitle with animation - MASSIVE SIZE */}
              <p
                className="text-white text-[3rem] md:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem] font-bold mb-20 leading-tight animate-slide-up"
                style={{
                  textShadow: "0 0 80px rgba(0,0,0,1), 0 8px 50px rgba(0,0,0,1)",
                  animationDelay: "0.4s"
                }}
              >
                Engineering Enterprise Liberation.
              </p>
              
              {/* CTA Button with animation - MASSIVE SIZE */}
              <button className="group relative inline-flex items-center gap-6 px-24 py-10 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-black text-[2.5rem] md:text-[3rem] lg:text-[4rem] rounded-full shadow-[0_0_100px_rgba(20,184,166,0.9)] hover:shadow-[0_0_150px_rgba(20,184,166,1)] transition-all duration-300 transform hover:scale-105 active:scale-95 border-4 border-teal-400/50 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <span className="relative z-10 flex items-center gap-6">
                  Start the Transformation 
                  <svg className="w-14 h-14 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </button>
            </div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-teal-400/30 rounded-tl-[2rem]"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/30 rounded-br-[2rem]"></div>
        </div>
      </div>
    </section>
  );
};

  