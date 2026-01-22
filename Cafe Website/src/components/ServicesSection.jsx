// src/components/ServicesSection.jsx - Complete fixed version
import React, { useEffect, useState } from 'react';

const ServicesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [cursorBlink, setCursorBlink] = useState(true);
  
  const fullText = "Corporate Events • Private Gatherings • Workspace Bookings";

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

  const services = [
    { 
      icon: '☕', 
      title: 'Corporate Catering', 
      desc: 'Office coffee setups, meetings & team events' 
    },
    { 
      icon: '🎉', 
      title: 'Private Events', 
      desc: 'Birthdays, workshops & special celebrations' 
    },
    { 
      icon: '💼', 
      title: 'Workspace Booking', 
      desc: 'Dedicated work areas with coffee included' 
    },
    { 
      icon: '📦', 
      title: 'Coffee Supplies', 
      desc: 'Bulk orders for offices & events' 
    }
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-zinc-900 overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-soft-light isolate">
        <div className="absolute top-1/4 left-8 w-24 h-36 bg-linear-to-b from-yellow-500/40 to-yellow-600/20 rounded-3xl shadow-2xl animate-float1 blur-xl"></div>
        <div className="absolute top-1/2 right-12 w-20 h-32 bg-linear-to-b from-amber-500/40 to-amber-600/20 rounded-2xl shadow-2xl animate-float2 blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-28 h-40 bg-linear-to-b from-orange-500/40 to-orange-600/20 rounded-3xl shadow-2xl animate-float3 blur-xl" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 py-16 lg:py-24 pb-24 lg:pb-32 max-w-7xl mx-auto">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left mb-12 lg:mb-0 lg:pl-12">
          
          <div className={`transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
              Our Services
            </h2>
            <p className="text-xl lg:text-2xl text-yellow-300 font-medium drop-shadow-md">
              Beyond Just Coffee
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

          <p className={`transition-all duration-1000 mx-auto lg:mx-0 max-w-md text-gray-400 text-lg lg:text-xl ${
            loaded ? 'opacity-100 translate-y-0 delay-800' : 'opacity-0 translate-y-6'
          }`}>
            From corporate coffee catering to private events and workspace bookings, we serve more than just coffee.
          </p>
        </div>

        {/* Right Grid - TABLET FIXED */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6 max-w-lg lg:max-w-xl mx-auto lg:mx-0 lg:pl-12">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-yellow-500/30 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-700 cursor-pointer hover:scale-105 hover:z-10 bg-linear-to-b from-black/70 via-black/50 backdrop-blur-xl ${
                loaded ? `opacity-100 translate-y-0 delay-${(idx + 15) * 50}` : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${(idx + 1.5) * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                <span className="text-yellow-400 drop-shadow-lg">{service.icon}</span>
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors drop-shadow-lg leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors drop-shadow-md">
                {service.desc}
              </p>
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

export default ServicesSection;
