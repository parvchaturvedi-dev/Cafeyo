// src/components/MenuSection.jsx - Fixed alignment
import React, { useEffect, useState } from 'react';
import menuPdf from '../assets/menu.pdf';

const MenuSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [cursorBlink, setCursorBlink] = useState(true);
  
  const fullText = "Jaipur's Favorite Destination for Fresh, Flavorful and Healthy Eats!";

  useEffect(() => {
    setLoaded(true);
    
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      setTypingText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    // Cursor blink
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(blinkInterval);
    };
  }, []);

  const handleOpenPdf = () => {
    window.open(menuPdf, '_blank');
  };

  return (
    <section
      id="menu"
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-zinc-900 overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-32 bg-gradient-to-b from-yellow-500/30 to-yellow-600/20 rounded-3xl shadow-lg animate-float1 blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-28 bg-gradient-to-b from-amber-500/30 to-amber-600/20 rounded-2xl shadow-lg animate-float2 blur-sm delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-32 bg-gradient-to-b from-orange-500/30 to-orange-600/20 rounded-3xl shadow-lg animate-float3 blur-sm delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto">
        
        {/* Left side - Text - MOBILE CENTER, DESKTOP LEFT */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left mb-12 lg:mb-0 lg:pl-8">
          
          <div className={`transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Jaipur's Favorite Destination
            </h2>
            <p className="text-xl lg:text-2xl text-yellow-300 mt-2 font-medium">
              for Fresh, Flavorful and Healthy Eats!
            </p>
          </div>

          {/* Typing subtext */}
          <div className={`transition-all duration-1000 mx-auto lg:mx-0 max-w-lg lg:max-w-md ${
            loaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
          }`}>
            <p className="text-lg lg:text-xl text-gray-300 italic">
              {typingText}
              <span className={`ml-1 inline-block w-4 h-6 bg-yellow-400 ${cursorBlink ? 'opacity-100' : 'opacity-0'} animate-pulse`}>|</span>
            </p>
          </div>

          <p className={`transition-all duration-1000 mx-auto lg:mx-0 max-w-md text-gray-400 ${
            loaded ? 'opacity-100 translate-y-0 delay-800' : 'opacity-0 translate-y-6'
          }`}>
            Celebration of salads based in local ingredients in the heart of Jaipur. 
            The highest quality beverages.
          </p>

          <div className={`flex justify-center lg:justify-start ${
            loaded ? 'opacity-100 translate-y-0 delay-1200' : 'opacity-0 translate-y-6'
          }`}>
            <button
              onClick={handleOpenPdf}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold text-lg lg:text-xl rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-4 border-yellow-300 hover:border-yellow-400"
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Right side - Image - FULL WIDTH ON MOBILE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-0">
          <div className={`relative w-full max-w-md lg:max-w-lg h-80 lg:h-96 transition-all duration-1000 rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-500/20 backdrop-blur-sm mx-auto lg:mx-0 ${
            loaded ? 'opacity-100 scale-100 delay-1500' : 'opacity-0 scale-95'
          }`}>
            
            <img 
              src="https://images.unsplash.com/photo-1591243315780-978fd00ff9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fHww"
              alt="Cafe drinks"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-8 right-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default MenuSection;
