// src/components/SpecialsSection.jsx - Blend fixed
import React, { useEffect, useState } from 'react';
import menuPdf from '../assets/menu.pdf';

const SpecialsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [cursorBlink, setCursorBlink] = useState(true);
  
  const fullText = "Handpicked Daily Specials for You!";

  useEffect(() => {
    setLoaded(true);
    
    let index = 0;
    const timer = setInterval(() => {
      setTypingText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);

    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(blinkInterval);
    };
  }, []);

  const dishes = [
    { image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&fit=crop', name: 'Caramel Macchiato' },
    { image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&fit=crop', name: 'Matcha Latte' },
    { image: 'https://images.unsplash.com/photo-1512568400610-3f3f73fc5d0b?w=400&fit=crop', name: 'Chocolate Croissant' },
    { image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&fit=crop', name: 'Iced Lemonade' }
  ];

  return (
    <section
      id="specials"
      className="relative min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-zinc-900 overflow-hidden"
    >
      {/* Fixed Floating Elements - Proper blending */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-soft-light isolate">
        <div className="absolute top-1/4 left-8 w-24 h-36 bg-linear-to-b from-yellow-500/40 to-yellow-600/20 rounded-3xl shadow-2xl animate-float1 blur-xl"></div>
        <div className="absolute top-1/2 right-12 w-20 h-32 bg-linear-to-b from-amber-500/40 to-amber-600/20 rounded-2xl shadow-2xl animate-float2 blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-28 h-40 bg-linear-to-b from-orange-500/40 to-orange-600/20 rounded-3xl shadow-2xl animate-float3 blur-xl" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left mb-12 lg:mb-0 lg:pl-12">
          
          <div className={`transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
              Daily Specials
            </h2>
            <p className="text-xl lg:text-2xl text-yellow-300 font-medium drop-shadow-md">
              Freshly Prepared
            </p>
          </div>

          {/* Typing */}
          <div className={`transition-all duration-1000 mx-auto lg:mx-0 max-w-lg lg:max-w-md ${
            loaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
          }`}>
            <p className="text-lg lg:text-xl text-gray-200 italic drop-shadow-lg">
              {typingText}
              <span className={`ml-1 inline-block w-4 h-7 bg-linear-to-r from-yellow-400 to-yellow-500 rounded ${cursorBlink ? 'opacity-100' : 'opacity-0'} shadow-lg animate-pulse`}>|</span>
            </p>
          </div>

          <div className={`flex justify-center lg:justify-start opacity-100 translate-y-0 delay-1200 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <button 
              onClick={() => window.open(menuPdf, '_blank')}
              className="px-10 py-4 lg:px-12 lg:py-5 bg-linear-to-r from-yellow-500/90 via-yellow-400/95 to-yellow-500/90 backdrop-blur-xl text-black font-bold text-lg lg:text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-500 border border-yellow-500/50 hover:border-yellow-400/70 group relative overflow-hidden"
            >
              <span className="relative z-10">View Full Menu</span>
              <div className="absolute inset-0 bg-linear-to-r from-yellow-400/50 to-yellow-300/50 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Right Images - 2x2 Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6 h-80 lg:h-96 max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:pl-12">
          {dishes.map((dish, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-500/30 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-700 cursor-pointer hover:scale-105 hover:z-10 ${
                loaded ? `opacity-100 translate-y-0 delay-${(idx + 15) * 50}` : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${(idx + 1.5) * 0.1}s` }}
            >
              <img 
                src={dish.image} 
                alt={dish.name}
                className="w-full h-full object-cover brightness-85 group-hover:brightness-105 hover:scale-105 transition-all duration-700 group-hover:scale-[1.1]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60" />
              <div className="absolute -bottom-10 left-3 right-3 p-3 bg-black/90 backdrop-blur-xl rounded-xl border-t border-yellow-500/50 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                <h4 className="text-sm lg:text-base font-semibold text-white truncate mb-1">
                  {dish.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(2deg) scale(1); }
          50% { transform: translateY(-8px) rotate(-1deg) scale(1.03); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-16px) scale(1.07); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 7s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default SpecialsSection;
