// src/components/HomeSection.jsx
import React, { useEffect, useState } from 'react';
import interiorPic from '../assets/interior.png';

const HomeSection = () => {
  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black text-white pt-16 lg:pt-20 flex items-center justify-center"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Left container - Text with staggered animation */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <p 
              className={`uppercase tracking-[0.4em] text-sm sm:text-base text-yellow-500 transition-all duration-700 ease-out ${
                textLoaded ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-6'
              }`}
            >
              Welcome to
            </p>
            
            <h1 
              className={`font-bold leading-tight transition-all duration-1000 ease-out ${
                textLoaded 
                  ? 'opacity-100 translate-y-0 delay-300' 
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block">
                CAFEGRAM
              </span>
            </h1>
            
            <p 
              className={`text-gray-300 text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 transition-all duration-1000 ease-out ${
                textLoaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
              }`}
            >
              Experience freshly brewed coffee, cozy interiors, and a calm space to work, meet, or simply unwind with your favourite cup.
            </p>
            
            <div 
              className={`flex flex-col lg:justify-start sm:justify-center md:justify-center sm:flex-row gap-3 sm:gap-4 pt-4 transition-all duration-1000 ease-out ${
                textLoaded ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#menu"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Visit Us
              </a>
            </div>
          </div>

          {/* Right container - Bigger responsive image with fade-in */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
              textLoaded ? 'opacity-100 translate-y-0 delay-900' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-md lg:h-112 xl:w-lg xl:h-128">
              {/* Glow effect */}
              <div className="absolute -inset-4 lg:-inset-6 rounded-3xl bg-linear-to-tr from-yellow-600/30 via-yellow-400/20 to-transparent blur-3xl -z-10" />
              {/* Shadow backdrop */}
              <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm rounded-3xl -z-10" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-zinc-700/50 shadow-2xl">
                <img
                  src={interiorPic}
                  alt="Cafegram cozy interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
